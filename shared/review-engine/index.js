import { join } from 'path';
import { execFileSync } from 'node:child_process';
import { readJson, readText, writeJson, exists, clampScore, roundScore } from '../utils/io.js';
import { loadDotEnv } from '../utils/env.js';
import { resolveRepoRoot } from '../utils/root.js';
import {
  AVAILABLE_PATTERN_KEYS,
  PATTERN_MATCHERS,
  isPlaceholder
} from '../challenge-patterns.js';

export { AVAILABLE_PATTERN_KEYS };

function asNonNegativeNumber(value, fallback = 0) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return fallback;
  }
  return parsed;
}

function asPositiveInteger(value, fallback) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }

  const integer = Math.floor(parsed);
  if (integer <= 0) {
    return fallback;
  }

  return integer;
}

function getChallengeWeight(challenge, fallbackWeight) {
  return asNonNegativeNumber(challenge?.weight, fallbackWeight);
}

function normalizeScoring(scoring = {}) {
  const defaults = {
    functionalTests: 0.35,
    codeQuality: 0.15,
    architecture: 0.1,
    bestPractices: 0.1,
    e2eTests: 0.15,
    aiReview: 0.15
  };

  const merged = Object.fromEntries(
    Object.entries({ ...defaults, ...scoring }).map(([key, value]) => [key, asNonNegativeNumber(value, 0)])
  );
  const sum = Object.values(merged).reduce((acc, value) => acc + value, 0);

  if (sum <= 0) {
    return defaults;
  }

  return Object.fromEntries(
    Object.entries(merged).map(([key, value]) => [key, value / sum])
  );
}

function determineBadge(score, completion, badgeLevels = {}) {
  if (!badgeLevels || typeof badgeLevels !== 'object') {
    return 'none';
  }

  const entries = Object.entries(badgeLevels).sort((a, b) => {
    const scoreDiff = (b[1]?.minScore ?? 0) - (a[1]?.minScore ?? 0);
    if (scoreDiff !== 0) {
      return scoreDiff;
    }
    return (b[1]?.minCompletion ?? 0) - (a[1]?.minCompletion ?? 0);
  });
  for (const [badge, rule] of entries) {
    if (score >= rule.minScore && completion >= rule.minCompletion) {
      return badge;
    }
  }
  return 'none';
}

function readChallengeContext({ projectDir, challengeId, fallbackChallengeConfig }) {
  const metadataPath = join(projectDir, 'challenges', challengeId, 'metadata.json');
  const readmePath = join(projectDir, 'challenges', challengeId, 'README.md');

  const metadataRaw = readJson(metadataPath, {
    challengeId,
    challengeName: fallbackChallengeConfig.name,
    moduleId: fallbackChallengeConfig.moduleId,
    moduleName: fallbackChallengeConfig.moduleName,
    filesToCheck: fallbackChallengeConfig.filesToCheck || [],
    skills: fallbackChallengeConfig.skills || [],
    patternsRequired: fallbackChallengeConfig.patternsRequired || []
  });
  const metadata = metadataRaw && typeof metadataRaw === 'object' ? metadataRaw : {};

  const filesToCheck = Array.isArray(metadata.filesToCheck) && metadata.filesToCheck.length > 0
    ? metadata.filesToCheck
    : fallbackChallengeConfig.filesToCheck || [];

  const files = filesToCheck.map((relativePath) => {
    const absolutePath = join(projectDir, relativePath);
    const content = readText(absolutePath, '');
    return {
      relativePath,
      absolutePath,
      exists: exists(absolutePath),
      content,
      placeholder: isPlaceholder(content)
    };
  });

  return {
    metadata: {
      ...metadata,
      filesToCheck
    },
    challengeReadme: readText(readmePath, ''),
    files
  };
}

function getNodeTestArgs(courseId, testFile) {
  return courseId === '05-nestjs-enterprise-framework'
    ? ['--import=reflect-metadata', '--import=tsx', '--test', testFile]
    : ['--experimental-strip-types', '--test', testFile];
}
function runFunctionalTests(files, projectDir, challengeId, courseId) {
  const fileTotal = files.length;
  if (fileTotal === 0) {
    return {
      score: 0,
      totalChecks: 0,
      passedChecks: 0,
      failedFiles: [],
      note: 'No filesToCheck configured.'
    };
  }

  const failedFiles = files
    .filter((file) => !file.exists || file.placeholder)
    .map((file) => file.relativePath);

  const filePassedChecks = fileTotal - failedFiles.length;

  const unitCandidates = [
    join(projectDir, 'tests', `challenge-${challengeId}.test.js`),
    join(projectDir, 'tests', `challenge-${challengeId}.test.ts`)
  ];
  const testFile = unitCandidates.find((candidate) => exists(candidate));
  let testPassed = true;
  let testError = null;

  if (testFile && filePassedChecks === fileTotal) {
    try {
      const testArgs = getNodeTestArgs(courseId, testFile);
      execFileSync('node', testArgs, {
        cwd: projectDir,
        encoding: 'utf-8',
        stdio: 'pipe'
      });
    } catch (error) {
      testPassed = false;
      testError = String(error.stderr || error.stdout || error.message).trim().slice(0, 500);
    }
  }

  const totalChecks = fileTotal + (testFile ? 1 : 0);
  const passedChecks = filePassedChecks + (testFile && testPassed ? 1 : 0);

  return {
    score: totalChecks === 0 ? 0 : roundScore((passedChecks / totalChecks) * 100),
    totalChecks,
    passedChecks,
    failedFiles,
    testFile: testFile || null,
    testPassed: testFile ? testPassed : null,
    testError,
    note: testFile
      ? 'Functional checks include scoped file validation and challenge unit tests.'
      : 'Scoped file validation only; no challenge unit test file configured.'
  };
}

function runCodeQuality(files) {
  let errors = 0;
  let warnings = 0;
  const details = [];

  for (const file of files) {
    if (!file.exists) {
      errors += 1;
      details.push(`${file.relativePath}: file missing`);
      continue;
    }

    const lines = file.content.split(/\r?\n/);
    lines.forEach((line, index) => {
      if (line.length > 140) {
        warnings += 1;
        details.push(`${file.relativePath}:${index + 1} line longer than 140 chars`);
      }

      if (/\s+$/.test(line)) {
        warnings += 1;
        details.push(`${file.relativePath}:${index + 1} trailing whitespace`);
      }
    });

    const consoleLogCount = (file.content.match(/console\.log\s*\(/g) || []).length;
    warnings += consoleLogCount;
    if (consoleLogCount > 0) {
      details.push(`${file.relativePath}: console.log used ${consoleLogCount} time(s)`);
    }

    const varCount = (file.content.match(/\bvar\s+/g) || []).length;
    warnings += varCount;
    if (varCount > 0) {
      details.push(`${file.relativePath}: var used ${varCount} time(s)`);
    }
  }

  const score = clampScore(100 - errors * 20 - warnings * 4);
  return { score, errors, warnings, details };
}

function runArchitectureChecks(files, patternsRequired = []) {
  if (!Array.isArray(patternsRequired) || patternsRequired.length === 0) {
    return {
      score: 100,
      required: [],
      found: [],
      missing: []
    };
  }

  const source = files.map((file) => file.content).join('\n');
  const found = [];
  const missing = [];

  for (const pattern of patternsRequired) {
    const matcher = PATTERN_MATCHERS[pattern];
    const match = matcher ? matcher.test(source) : source.includes(pattern);

    if (match) {
      found.push(pattern);
    } else {
      missing.push(pattern);
    }
  }

  return {
    score: roundScore((found.length / patternsRequired.length) * 100),
    required: patternsRequired,
    found,
    missing
  };
}

function runBestPractices(files) {
  const issues = [];

  const checks = [
    { regex: /eval\s*\(/, message: 'Avoid eval().' },
    { regex: /Function\s*\(\s*['\"]/, message: 'Avoid dynamic Function constructor.' },
    { regex: /password\s*[:=]\s*['\"][^'\"]+['\"]/i, message: 'Hardcoded password detected.' },
    { regex: /secret\s*[:=]\s*['\"][^'\"]+['\"]/i, message: 'Hardcoded secret detected.' },
    { regex: /process\.env\.[A-Z0-9_]+\s*\|\|\s*['\"][^'\"]+['\"]/i, message: 'Sensitive env fallback hardcoded.' }
  ];

  for (const file of files) {
    if (!file.exists) {
      continue;
    }

    for (const check of checks) {
      if (check.regex.test(file.content)) {
        issues.push(`${file.relativePath}: ${check.message}`);
      }
    }
  }

  return {
    score: clampScore(100 - issues.length * 20),
    issueCount: issues.length,
    issues
  };
}

function runE2ETests(projectDir, challengeId, courseId) {
  const e2eCandidates = [
    join(projectDir, 'tests', 'e2e', 'challenge-' + challengeId + '.spec.js'),
    join(projectDir, 'tests', 'e2e', 'challenge-' + challengeId + '.spec.ts')
  ];

  const testFile = e2eCandidates.find((file) => exists(file));
  if (!testFile) {
    return {
      score: 0,
      mode: 'not_configured',
      hasE2E: false,
      testFile: null,
      testPassed: null,
      testError: null,
      e2eCandidates,
      note: 'No E2E spec is configured; E2E does not reduce the core score.'
    };
  }

  let testPassed = true;
  let testError = null;
  try {
    execFileSync('node', getNodeTestArgs(courseId, testFile), {
      cwd: projectDir,
      encoding: 'utf-8',
      stdio: 'pipe'
    });
  } catch (error) {
    testPassed = false;
    testError = String(error.stderr || error.stdout || error.message).trim().slice(0, 500);
  }

  return {
    score: testPassed ? 100 : 0,
    mode: testPassed ? 'passed' : 'failed',
    hasE2E: true,
    testFile,
    testPassed,
    testError,
    e2eCandidates,
    note: 'E2E specs are executed and contribute optional bonus points.'
  };
}

function extractJsonObject(text) {
  if (!text) {
    return null;
  }

  const normalized = String(text)
    .replace(/```json\s*/gi, '')
    .replace(/```/g, '')
    .trim();

  try {
    return JSON.parse(normalized);
  } catch {
    const start = normalized.indexOf('{');
    const end = normalized.lastIndexOf('}');
    if (start === -1 || end === -1 || end <= start) {
      return null;
    }

    const candidate = normalized.slice(start, end + 1);
    try {
      return JSON.parse(candidate);
    } catch {
      return null;
    }
  }
}

function isEligibleForAi(files) {
  const implementedFiles = files.filter((file) => file.exists && !file.placeholder);
  if (implementedFiles.length === 0) {
    return false;
  }

  const totalChars = implementedFiles.reduce((sum, file) => sum + file.content.length, 0);
  return totalChars >= 80;
}

async function runAiReview({ rootDir, courseConfig, challenge, challengeReadme, files }) {
  loadDotEnv(rootDir);

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return {
      score: 0,
      mode: 'disabled',
      strengths: [],
      improvements: ['Set GROQ_API_KEY to enable AI review.']
    };
  }

  if (!isEligibleForAi(files)) {
    return {
      score: 0,
      mode: 'skipped',
      strengths: [],
      improvements: ['Code appears incomplete. AI review skipped until substantial implementation exists.']
    };
  }

  if (typeof fetch !== 'function') {
    return {
      score: 0,
      mode: 'error',
      strengths: [],
      improvements: ['Global fetch is not available in this Node runtime.']
    };
  }

  const model = process.env.GROQ_MODEL || 'llama-3.1-8b-instant';
  const maxFiles = asPositiveInteger(process.env.AI_REVIEW_MAX_FILES || 3, 3);
  const maxChars = asPositiveInteger(process.env.AI_REVIEW_MAX_CHARS || 7000, 7000);
  const charsPerFile = Math.max(300, Math.floor(maxChars / maxFiles));
  const fileContext = files
    .filter((file) => file.exists)
    .slice(0, maxFiles)
    .map((file) => `FILE: ${file.relativePath}\n${file.content.slice(0, charsPerFile)}`)
    .join('\n\n---\n\n');

  const prompt = [
    'You are evaluating a backend challenge solution.',
    'Return STRICT JSON only with keys: score (0-100 number), strengths (string[]), improvements (string[]).',
    `Course: ${courseConfig.courseName}`,
    `Challenge: ${challenge.id} - ${challenge.name}`,
    'Challenge brief:',
    challengeReadme.slice(0, 2200),
    'Learner code:',
    fileContext.slice(0, maxChars)
  ].join('\n\n');

  try {
    const maxAttempts = 3;
    let response;
    let body = '';

    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
      response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model,
          messages: [
            {
              role: 'system',
              content: 'You are a strict backend code reviewer. Respond with valid JSON only.'
            },
            { role: 'user', content: prompt }
          ],
          temperature: 0.1,
          response_format: { type: 'json_object' }
        })
      });

      if (response.ok) {
        break;
      }

      body = await response.text();
      const retryable = response.status === 429 || response.status >= 500;
      if (!retryable || attempt === maxAttempts) {
        return {
          score: 0,
          mode: 'error',
          strengths: [],
          improvements: [`AI review request failed (${response.status}).`, body.slice(0, 300)]
        };
      }

      await new Promise((resolve) => setTimeout(resolve, attempt * 1500));
    }

    const payload = await response.json();
    const content = payload?.choices?.[0]?.message?.content || '';
    const parsed = extractJsonObject(content);

    if (!parsed) {
      return {
        score: 0,
        mode: 'parse_error',
        strengths: [],
        improvements: ['AI response was not valid JSON.']
      };
    }

    const score = clampScore(Number(parsed.score) || 0);
    const strengths = Array.isArray(parsed.strengths) ? parsed.strengths.slice(0, 6) : [];
    const improvements = Array.isArray(parsed.improvements) ? parsed.improvements.slice(0, 6) : [];

    return {
      score,
      mode: 'live',
      strengths,
      improvements
    };
  } catch (error) {
    return {
      score: 0,
      mode: 'error',
      strengths: [],
      improvements: [`AI review error: ${error.message}`]
    };
  }
}

export function calculateTotalScore(layers, scoring) {
  // Missing or failing scoped implementation/unit checks remain a hard failure.
  if (
    layers.functionalTests.score <= 0 ||
    layers.functionalTests.passedChecks < layers.functionalTests.totalChecks
  ) {
    return { score: 0, coreScore: 0 };
  }

  const safeScoring = normalizeScoring(scoring);
  const coreKeys = ['functionalTests', 'codeQuality', 'architecture', 'bestPractices'];
  const bonusKeys = ['e2eTests', 'aiReview'];
  const coreWeight = coreKeys.reduce((total, key) => total + safeScoring[key], 0);
  const weightedCore = coreKeys.reduce(
    (total, key) => total + layers[key].score * safeScoring[key],
    0
  );
  const coreScore = coreWeight > 0 ? roundScore(weightedCore / coreWeight) : 0;
  const bonusScore = bonusKeys.reduce(
    (total, key) => total + layers[key].score * safeScoring[key],
    0
  );

  return {
    coreScore,
    score: clampScore(roundScore(coreScore + bonusScore))
  };
}

function mergeByChallengeOrder(existing, incoming, challengeOrder) {
  const map = new Map();
  for (const item of existing || []) {
    if (item?.challengeId) {
      map.set(item.challengeId, item);
    }
  }
  for (const item of incoming || []) {
    if (item?.challengeId) {
      map.set(item.challengeId, item);
    }
  }

  return challengeOrder.map((challengeId) => map.get(challengeId)).filter(Boolean);
}

function buildCourseSummary({ courseConfig, mergedResults, mergedAiFeedback }) {
  const challengeCount = courseConfig.challenges.length;
  const challengeById = new Map(courseConfig.challenges.map((challenge) => [challenge.id, challenge]));
  const reviewedChallenges = mergedResults
    .map((result) => challengeById.get(result.challengeId))
    .filter(Boolean);
  const reviewedCount = reviewedChallenges.length;
  const fallbackWeight = reviewedCount > 0 ? 1 / reviewedCount : 0;
  const rawWeights = reviewedChallenges.map((challenge) => getChallengeWeight(challenge, fallbackWeight));
  const weightSum = rawWeights.reduce((sum, value) => sum + value, 0);
  const normalizedWeightMap = new Map(
    reviewedChallenges.map((challenge, index) => [
      challenge.id,
      weightSum > 0 ? rawWeights[index] / weightSum : fallbackWeight
    ])
  );

  const scoreMap = new Map(mergedResults.map((item) => [item.challengeId, item.score]));

  const weightedTotal = reviewedChallenges.reduce((sum, challenge) => {
    const score = scoreMap.get(challenge.id) ?? 0;
    const weight = normalizedWeightMap.get(challenge.id) ?? fallbackWeight;
    return sum + score * weight;
  }, 0);

  const passedSet = new Set(
    mergedResults.filter((item) => item.passed).map((item) => item.challengeId)
  );

  const completedChallenges = passedSet.size;
  const completionPercentage = challengeCount === 0 ? 0 : roundScore((completedChallenges / challengeCount) * 100);
  const averageScore = reviewedCount === 0 ? 0 : roundScore(weightedTotal);

  const strengthSkills = [];
  const improvementSkills = [];

  for (const result of mergedResults) {
    const challenge = challengeById.get(result.challengeId);
    if (!challenge) {
      continue;
    }

    const targetSkills = result.passed ? strengthSkills : improvementSkills;
    for (const skill of challenge.skills || []) {
      if (!targetSkills.includes(skill)) {
        targetSkills.push(skill);
      }
    }
  }

  const aiStrengths = [];
  const aiImprovements = [];
  for (const item of mergedAiFeedback) {
    for (const line of item.strengths || []) {
      if (!aiStrengths.includes(line)) {
        aiStrengths.push(line);
      }
    }
    for (const line of item.improvements || []) {
      if (!aiImprovements.includes(line)) {
        aiImprovements.push(line);
      }
    }
  }

  return {
    courseId: courseConfig.courseId,
    courseName: courseConfig.courseName,
    averageScore,
    completionPercentage,
    totalChallenges: challengeCount,
    completedChallenges,
    reviewedChallengesCount: reviewedCount,
    badgeLevel: determineBadge(averageScore, completionPercentage, courseConfig.badgeLevels),
    challengeResults: mergedResults.map((result) => ({
      challengeId: result.challengeId,
      challengeName: result.challengeName,
      score: result.score,
      passed: result.passed,
      reviewedAt: result.reviewedAt
    })),
    skillStrengths: strengthSkills.slice(0, 12),
    improvementAreas: improvementSkills.slice(0, 12),
    aiStrengths: aiStrengths.slice(0, 12),
    aiImprovements: aiImprovements.slice(0, 12),
    generatedAt: new Date().toISOString()
  };
}

export async function runCourseReview({ rootDir = resolveRepoRoot(import.meta.url), courseId, challengeId = null }) {
  if (!courseId || typeof courseId !== 'string') {
    throw new Error('runCourseReview requires a valid courseId.');
  }

  const courseDir = join(rootDir, 'courses', courseId);
  const projectDir = join(courseDir, 'project');
  const resultsDir = join(courseDir, 'results');

  const courseConfig = readJson(join(courseDir, 'course-config.json'));
  if (!courseConfig) {
    throw new Error(`Course config not found for ${courseId}`);
  }
  if (!Array.isArray(courseConfig.challenges) || courseConfig.challenges.length === 0) {
    throw new Error(`Course ${courseId} has no challenges configured.`);
  }

  const targets = challengeId
    ? courseConfig.challenges.filter((challenge) => challenge.id === challengeId)
    : courseConfig.challenges;

  if (targets.length === 0) {
    throw new Error(`No challenge found for ${courseId}${challengeId ? ` (${challengeId})` : ''}`);
  }

  const existingResults = readJson(join(resultsDir, 'challenge-results.json'), []);
  const existingAi = readJson(join(resultsDir, 'ai-feedback.json'), []);

  const freshResults = [];
  const freshAiFeedback = [];

  for (const challenge of targets) {
    const { metadata, challengeReadme, files } = readChallengeContext({
      projectDir,
      challengeId: challenge.id,
      fallbackChallengeConfig: challenge
    });

    const layers = {
      functionalTests: runFunctionalTests(files, projectDir, challenge.id, courseId),
      codeQuality: runCodeQuality(files),
      architecture: runArchitectureChecks(files, metadata.patternsRequired || []),
      bestPractices: runBestPractices(files),
      e2eTests: runE2ETests(projectDir, challenge.id, courseId),
      aiReview: await runAiReview({
        rootDir,
        courseConfig,
        challenge,
        challengeReadme,
        files
      })
    };

    const { score, coreScore } = calculateTotalScore(layers, courseConfig.scoring);
    const passed = coreScore >= (courseConfig.requirements?.minScore ?? 80);

    freshResults.push({
      challengeId: challenge.id,
      challengeName: challenge.name,
      moduleId: challenge.moduleId,
      moduleName: challenge.moduleName,
      score,
      coreScore,
      passed,
      layers,
      reviewedAt: new Date().toISOString()
    });

    freshAiFeedback.push({
      challengeId: challenge.id,
      challengeName: challenge.name,
      score: layers.aiReview.score,
      mode: layers.aiReview.mode,
      strengths: layers.aiReview.strengths,
      improvements: layers.aiReview.improvements,
      reviewedAt: new Date().toISOString()
    });
  }

  const untouchedResults = existingResults.filter(
    (item) => !freshResults.some((fresh) => fresh.challengeId === item.challengeId)
  );
  const untouchedAi = existingAi.filter(
    (item) => !freshAiFeedback.some((fresh) => fresh.challengeId === item.challengeId)
  );

  const order = courseConfig.challenges.map((challenge) => challenge.id);
  const mergedResults = mergeByChallengeOrder(untouchedResults, freshResults, order);
  const mergedAiFeedback = mergeByChallengeOrder(untouchedAi, freshAiFeedback, order);

  writeJson(join(resultsDir, 'challenge-results.json'), mergedResults);
  writeJson(join(resultsDir, 'ai-feedback.json'), mergedAiFeedback);

  const summary = buildCourseSummary({
    courseConfig,
    mergedResults,
    mergedAiFeedback
  });

  writeJson(join(resultsDir, 'course-summary.json'), summary);

  return {
    courseId,
    challengeId,
    reviewedChallenges: targets.map((challenge) => challenge.id),
    reviewedResults: freshResults,
    summary
  };
}
