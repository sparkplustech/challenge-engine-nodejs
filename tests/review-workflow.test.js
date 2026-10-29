import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { resolveRepoRoot } from '../shared/utils/root.js';
import { calculateTotalScore, runCourseReview } from '../shared/review-engine/index.js';
import { updateProgress } from '../scripts/update-progress.js';
import { getChangedChallenges } from '../scripts/get-changed-challenges.js';

const ROOT = resolveRepoRoot(import.meta.url);

function readJson(filePath) {
  const raw = readFileSync(filePath, 'utf-8').replace(/^\uFEFF/, '');
  return JSON.parse(raw);
}

test('E2E and AI scores add bonuses without lowering the core score', () => {
  const scoring = {
    functionalTests: 0.35,
    codeQuality: 0.15,
    architecture: 0.1,
    bestPractices: 0.1,
    e2eTests: 0.15,
    aiReview: 0.15
  };
  const layers = {
    functionalTests: { score: 80, passedChecks: 1, totalChecks: 1 },
    codeQuality: { score: 80 },
    architecture: { score: 80 },
    bestPractices: { score: 80 },
    e2eTests: { score: 0 },
    aiReview: { score: 0 }
  };

  const withoutOptionalScores = calculateTotalScore(layers, scoring);
  assert.equal(withoutOptionalScores.coreScore, 80);
  assert.equal(withoutOptionalScores.score, 80);

  const withOptionalScores = calculateTotalScore({
    ...layers,
    e2eTests: { score: 100 },
    aiReview: { score: 100 }
  }, scoring);
  assert.equal(withOptionalScores.coreScore, 80);
  assert.equal(withOptionalScores.score, 100);
});

test('incomplete functional checks remain a hard failure regardless of bonuses', () => {
  const score = calculateTotalScore({
    functionalTests: { score: 50, passedChecks: 0, totalChecks: 1 },
    codeQuality: { score: 100 },
    architecture: { score: 100 },
    bestPractices: { score: 100 },
    e2eTests: { score: 100 },
    aiReview: { score: 100 }
  }, {});
  assert.deepEqual(score, { score: 0, coreScore: 0 });
});
test('single challenge review returns expected shape and preserves course result set', async () => {
  process.env.GROQ_API_KEY = '';

  const courseId = '01-javascript-fundamentals-async';
  const challengeId = '01-es6-syntax-foundations';
  const challengeResultsPath = join(ROOT, 'courses', courseId, 'results', 'challenge-results.json');
  const before = readJson(challengeResultsPath);

  const run = await runCourseReview({ rootDir: ROOT, courseId, challengeId });

  assert.equal(run.courseId, courseId);
  assert.equal(run.challengeId, challengeId);
  assert.deepEqual(run.reviewedChallenges, [challengeId]);
  assert.equal(run.reviewedResults.length, 1);
  assert.equal(run.reviewedResults[0].challengeId, challengeId);
  assert.equal(run.summary.reviewedChallengesCount, 1);
  assert.equal(run.summary.challengeResults.length, 1);
  assert.ok(run.summary.totalChallenges > 0);
  assert.ok(run.summary.averageScore >= 0 && run.summary.averageScore <= 100);

  const after = readJson(challengeResultsPath);
  assert.ok(after.length > 0);
  assert.ok(after.length <= run.summary.totalChallenges);
  assert.ok(after.some((item) => item.challengeId === challengeId));
  assert.ok(after.length >= before.length || after.length === run.summary.totalChallenges);

  const reviewedChallenge = after.find((item) => item.challengeId === challengeId);
  const unitJs = join(ROOT, 'courses', courseId, 'project', 'tests', `challenge-${challengeId}.test.js`);
  const unitTs = join(ROOT, 'courses', courseId, 'project', 'tests', `challenge-${challengeId}.test.ts`);
  const e2eJs = join(ROOT, 'courses', courseId, 'project', 'tests', 'e2e', `challenge-${challengeId}.spec.js`);
  const e2eTs = join(ROOT, 'courses', courseId, 'project', 'tests', 'e2e', `challenge-${challengeId}.spec.ts`);
  const e2eConfigured = [e2eJs, e2eTs].some((path) => existsSync(path));

  if (!e2eConfigured) {
    assert.equal(reviewedChallenge?.layers?.e2eTests?.mode, 'not_configured');
    assert.equal(reviewedChallenge?.layers?.e2eTests?.score, 0);
  } else {
    assert.ok(['passed', 'failed'].includes(reviewedChallenge?.layers?.e2eTests?.mode));
    assert.equal(reviewedChallenge?.layers?.e2eTests?.testPassed, reviewedChallenge?.layers?.e2eTests?.mode === 'passed');
    assert.equal(reviewedChallenge?.layers?.e2eTests?.score, reviewedChallenge?.layers?.e2eTests?.testPassed ? 100 : 0);
  }
  assert.equal(reviewedChallenge?.passed, reviewedChallenge?.coreScore >= 80);
  assert.ok(reviewedChallenge?.score >= reviewedChallenge?.coreScore);

  assert.ok(run.summary.improvementAreas.length <= 4);
  assert.ok(!run.summary.improvementAreas.includes('classes'));
});

test('progress update produces consistent totals', () => {
  const summary = updateProgress({ rootDir: ROOT });
  const pathwayConfig = readJson(join(ROOT, 'pathway-review', 'pathway-config.json'));
  const expectedTotal = pathwayConfig.courses
    .map((course) => readJson(join(ROOT, 'courses', course.id, 'course-config.json')))
    .reduce((sum, courseConfig) => sum + (courseConfig.challenges?.length || 0), 0);

  assert.equal(summary.totalChallenges, expectedTotal);
  assert.ok(summary.overallScore >= 0 && summary.overallScore <= 100);
  assert.ok(summary.completionPercentage >= 0 && summary.completionPercentage <= 100);

  const skillBreakdown = readJson(join(ROOT, 'pathway-review', 'skill-breakdown.json'));
  assert.equal(skillBreakdown.pathwayName, pathwayConfig.pathwayName);
  assert.ok(Array.isArray(skillBreakdown.skills));
  assert.ok(skillBreakdown.totals?.trackedSkills >= 1);
});

test('review script works from nested course directory', () => {
  const cwd = join(ROOT, 'courses', '01-javascript-fundamentals-async');

  const output = execFileSync(
    'node',
    ['../../scripts/run-review-course.js', '--json', '--course=01-javascript-fundamentals-async', '--challenge=01-es6-syntax-foundations'],
    {
      cwd,
      encoding: 'utf-8'
    }
  );

  const parsed = JSON.parse(output);
  assert.equal(parsed.result.courseId, '01-javascript-fundamentals-async');
  assert.equal(parsed.result.challengeId, '01-es6-syntax-foundations');
});

test('runCourseReview rejects missing courseId', async () => {
  await assert.rejects(
    () => runCourseReview({ rootDir: ROOT }),
    /courseId/i
  );
});

test('getChangedChallenges handles unsafe ref text without throwing', () => {
  const changed = getChangedChallenges({
    rootDir: ROOT,
    ref: 'HEAD~1 && echo should-not-run'
  });
  assert.ok(Array.isArray(changed));
});

test('review:changed rejects invalid fallback values', () => {
  try {
    execFileSync(
      'node',
      ['scripts/run-review-changed.js', '--fallback=invalid-mode'],
      { cwd: ROOT, encoding: 'utf-8', stdio: 'pipe' }
    );
    assert.fail('Expected command to fail for invalid fallback mode');
  } catch (error) {
    const stderr = String(error.stderr || '');
    assert.match(stderr, /Invalid --fallback value/);
  }
});
