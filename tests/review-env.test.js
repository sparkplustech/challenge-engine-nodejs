import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { runCourseReview } from '../shared/review-engine/index.js';

function restoreEnv(key, value) {
  if (value === undefined) {
    delete process.env[key];
    return;
  }

  process.env[key] = value;
}

test('review test process receives env defaults and root .env values', async () => {
  const rootDir = mkdtempSync(join(tmpdir(), 'challenge-env-'));
  const courseId = 'env-fixture';
  const challengeId = '01-env-fixture';
  const courseDir = join(rootDir, 'courses', courseId);
  const projectDir = join(courseDir, 'project');
  const sourceDir = join(projectDir, 'src', 'challenges', challengeId);
  const testsDir = join(projectDir, 'tests');
  const childEnvOutput = join(rootDir, 'child-env.json');

  mkdirSync(sourceDir, { recursive: true });
  mkdirSync(testsDir, { recursive: true });

  writeFileSync(join(rootDir, '.env'), 'CHALLENGE_FIXTURE_ENV=from-root-env\n');
  writeFileSync(
    join(courseDir, 'course-config.json'),
    JSON.stringify(
      {
        courseId,
        courseName: 'Environment Fixture',
        challenges: [
          {
            id: challengeId,
            name: 'Environment Fixture Challenge',
            moduleId: 'm1',
            moduleName: 'Environment',
            weight: 1,
            skills: [],
            patternsRequired: [],
            filesToCheck: [`src/challenges/${challengeId}/index.js`]
          }
        ],
        requirements: { minScore: 80 }
      },
      null,
      2
    )
  );
  writeFileSync(
    join(sourceDir, 'index.js'),
    `export function solve_${challengeId.replace(/-/g, '_')}() {\n  return 'ok';\n}\n`
  );
  writeFileSync(
    join(testsDir, `challenge-${challengeId}.test.js`),
    [
      "import test from 'node:test';",
      "import assert from 'node:assert/strict';",
      "import { writeFileSync } from 'node:fs';",
      '',
      "test('review process receives challenge env', () => {",
      '  const snapshot = {',
      '    NODE_ENV: process.env.NODE_ENV,',
      '    APP_NAME: process.env.APP_NAME,',
      '    PORT: process.env.PORT,',
      '    CHALLENGE_FIXTURE_ENV: process.env.CHALLENGE_FIXTURE_ENV',
      '  };',
      '  writeFileSync(process.env.CHALLENGE_ENV_OUTPUT, JSON.stringify(snapshot));',
      "  assert.equal(snapshot.NODE_ENV, 'development');",
      "  assert.equal(snapshot.APP_NAME, 'challenge-engine');",
      "  assert.equal(snapshot.PORT, '3000');",
      "  assert.equal(snapshot.CHALLENGE_FIXTURE_ENV, 'from-root-env');",
      '});',
      ''
    ].join('\n')
  );

    const previousEnv = {
    NODE_ENV: process.env.NODE_ENV,
    APP_NAME: process.env.APP_NAME,
    PORT: process.env.PORT,
    APP_ENV: process.env.APP_ENV,
    CHALLENGE_FIXTURE_ENV: process.env.CHALLENGE_FIXTURE_ENV,
    CHALLENGE_ENV_OUTPUT: process.env.CHALLENGE_ENV_OUTPUT,
    GROQ_API_KEY: process.env.GROQ_API_KEY
  };

  delete process.env.NODE_ENV;
  delete process.env.APP_NAME;
  delete process.env.PORT;
  delete process.env.APP_ENV;
  delete process.env.CHALLENGE_FIXTURE_ENV;
  process.env.CHALLENGE_ENV_OUTPUT = childEnvOutput;
  process.env.GROQ_API_KEY = '';

  try {
    const run = await runCourseReview({ rootDir, courseId, challengeId });
    const functionalTests = run.reviewedResults[0].layers.functionalTests;

    assert.equal(functionalTests.testPassed, true, functionalTests.testError);
    assert.ok(existsSync(childEnvOutput), 'challenge test did not run');

    const childEnv = JSON.parse(readFileSync(childEnvOutput, 'utf-8'));
    assert.equal(childEnv.NODE_ENV, 'development');
    assert.equal(childEnv.APP_NAME, 'challenge-engine');
    assert.equal(childEnv.PORT, '3000');
    assert.equal(childEnv.CHALLENGE_FIXTURE_ENV, 'from-root-env');
  } finally {
    for (const [key, value] of Object.entries(previousEnv)) {
      restoreEnv(key, value);
    }
    rmSync(rootDir, { recursive: true, force: true });
  }
});
