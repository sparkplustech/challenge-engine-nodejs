import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { pathToFileURL } from 'url';
import { resolveRepoRoot } from '../shared/utils/root.js';
import { CHALLENGE_GOALS, CHALLENGE_TASK_STEPS } from './challenge-task-descriptions.js';

const ROOT = resolveRepoRoot(import.meta.url);
const force = process.argv.includes('--force');

const PATTERN_GUIDANCE = {
  arrowFunction: 'Use at least one arrow function expression.',
  destructuring: 'Use object or array destructuring assignment.',
  spreadOperator: 'Use spread or rest syntax (`...`) in real logic.',
  templateLiteral: 'Use template literals for string construction.',
  arrayMap: 'Use `.map()` in your transformation flow.',
  arrayFilter: 'Use `.filter()` to narrow data.',
  arrayReduce: 'Use `.reduce()` for aggregation.',
  classSyntax: 'Define at least one class.',
  extendsKeyword: 'Use `extends` to model inheritance.',
  importStatement: 'Use ES module `import` syntax.',
  exportStatement: 'Use ES module `export` syntax.',
  callbackFunction: 'Implement callback-style control flow in at least one function.',
  promiseUsage: 'Use Promise-based async logic (`new Promise` or `Promise.*`).',
  promiseCatch: 'Handle Promise errors with `.catch()`.',
  asyncFunction: 'Mark at least one function as `async`.',
  awaitExpression: 'Use `await` with async work.',
  tryCatch: 'Handle runtime errors with `try/catch`.',
  setTimeoutUsage: 'Use `setTimeout` to model async scheduling behavior.',
  fsModuleImport: 'Import Node `fs`/`node:fs` and use it meaningfully.',
  streamPipeline: 'Use streaming (`pipeline`, read/write streams) for data flow.',
  pathModuleImport: 'Import and use Node `path`/`node:path`.',
  osModuleImport: 'Import and use Node `os`/`node:os`.',
  processUsage: 'Use `process.env`, `process.argv`, or `process.exit`.',
  childProcessUsage: 'Use Node child-process APIs (`spawn`, `fork`, `execFile`, or import child_process).',
  signalHandler: 'Handle shutdown signals (`SIGINT` and/or `SIGTERM`) via `process.on`.',
  gracefulShutdown: 'Implement graceful shutdown behavior (for example `server.close()` and cleanup).',
  npmScript: 'Define/consume script automation through a `scripts` section in package config.',
  dotenvConfig: 'Load env values with `dotenv.config()` or equivalent startup config.',
  httpCreateServer: 'Build a server using Node `http.createServer(...)`.',
  httpsServer: 'Use HTTPS server APIs (`https.createServer` or `node:https`).',
  urlClassUsage: 'Parse/request URLs with the `URL` class.',
  loggerPattern: 'Use structured logging patterns (`console.info/warn/error` or a logger object).',
  expressApp: 'Initialize an Express app instance (`express()`).',
  expressRouter: 'Define routing with `express.Router()` or router methods.',
  expressStaticServing: 'Serve static assets with `express.static(...)`.',
  templateEngineSetup: 'Configure a template engine (`app.set("view engine", ...)`).',
  healthEndpoint: 'Expose health/readiness style GET endpoint(s) such as `/health` or `/ready`.',
  paginationQueryHandling: 'Read and apply pagination/sorting/filter query params from `req.query`.',
  routeParamUsage: 'Use route params (`:id`) and consume `req.params`.',
  middlewareNext: 'Implement middleware that calls `next()` correctly.',
  httpStatusUsage: 'Return explicit HTTP status codes via `res.status(...)`.',
  corsMiddleware: 'Apply CORS middleware/configuration.',
  parameterizedQuery: 'Use parameterized SQL query patterns (`$1`, `$2`, ...).',
  mongooseSchema: 'Define Mongoose schema/model structures.',
  transactionUsage: 'Model transaction control (`BEGIN/COMMIT/ROLLBACK` or transaction wrapper).',
  jwtSignVerify: 'Use JWT sign/verify flows.',
  bcryptUsage: 'Use bcrypt hashing/comparison for credential flow.',
  inputValidation: 'Validate/sanitize input with Joi/Zod/validation layer.',
  rateLimitMiddleware: 'Use a request rate-limiting middleware.',
  openApiDoc: 'Include OpenAPI/Swagger contract artifacts or setup.',
  jestDescribeIt: 'Write Jest-style tests with `describe`/`it` blocks.',
  supertestRequest: 'Use Supertest request assertions against HTTP routes.',
  typeAnnotation: 'Use explicit TypeScript type annotations.',
  interfaceDeclaration: 'Define at least one `interface`.',
  typeAlias: 'Define at least one `type` alias.',
  enumDeclaration: 'Define at least one `enum`.',
  tupleType: 'Use at least one tuple type.',
  genericType: 'Use generic type parameters in reusable code.',
  typeGuard: 'Implement a type guard (`value is SomeType`).',
  tsNodeScript: 'Configure or reference `ts-node` workflow commands.',
  nodemonScript: 'Configure or reference `nodemon` workflow commands.',
  tsConfigPresent: 'Demonstrate `compilerOptions`-based TypeScript configuration behavior.',
  expressTypeImport: 'Use typed Express imports (`Request`, `Response`, `NextFunction`).',
  pathAliasImport: 'Use a path alias import (for example `@/...`).',
  nestjsModule: 'Use NestJS module decorators (`@Module(...)`).',
  nestjsController: 'Use NestJS controller decorators (`@Controller(...)`).',
  nestjsInjectable: 'Use NestJS DI decorators (`@Injectable(...)`).',
  nestjsGuard: 'Implement route protection with guards (`@UseGuards` / `CanActivate`).',
  nestjsPipe: 'Implement or apply a Nest pipe (`PipeTransform` / `@UsePipes`).',
  nestjsExceptionFilter: 'Implement exception filtering (`@Catch` / `ExceptionFilter`).',
  nestjsDecorator: 'Implement custom decorators or metadata reflection usage.',
  repositoryPattern: 'Use repository-style data access boundaries.',
  classValidatorUsage: 'Use class-validator decorators/rules in DTO or payload validation.',
  passportStrategy: 'Implement Passport strategy/auth-guard usage.',
  rolesDecorator: 'Implement role metadata/decorator-based authorization.',
  eventHandler: 'Implement event-driven producer/consumer flow (`emit`, event patterns).',
  grpcClient: 'Implement gRPC handler/client integration points.',
  serviceDiscoveryPattern: 'Represent service discovery/registry integration behavior.',
  requestIdInterceptor: 'Propagate request/correlation ID in interceptor/logging flow.',
  envSchemaValidation: 'Validate environment config against a schema at startup.'
};

function ensureDir(dirPath) {
  mkdirSync(dirPath, { recursive: true });
}

function readJson(filePath) {
  const raw = readFileSync(filePath, 'utf-8').replace(/^\uFEFF/, '');
  return JSON.parse(raw);
}

function writeJson(filePath, data) {
  ensureDir(dirname(filePath));
  writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
}

function writeText(filePath, content, allowOverwrite = false) {
  if (!allowOverwrite && existsSync(filePath)) {
    return false;
  }

  ensureDir(dirname(filePath));
  writeFileSync(filePath, content.endsWith('\n') ? content : `${content}\n`, 'utf-8');
  return true;
}

function buildProjectEnv(courseConfig) {
  return [
    `APP_NAME=${courseConfig.courseName}`,
    'PORT=3000',
    'NODE_ENV=development',
    ''
  ].join('\n');
}

function buildProjectReadme(courseConfig) {
  const moduleLines = courseConfig.modules
    .map((module) => {
      const concepts = module.concepts.map((concept) => `  - ${concept}`).join('\n');
      return `- **${module.name}**\n${concepts}`;
    })
    .join('\n');

  return `# ${courseConfig.courseName} - Learner Project\n\nThis project uses challenge stubs only. Learners implement each challenge in \`src/challenges/*\` and validate through review automation.\n\n## Module Coverage\n\n${moduleLines}\n\n## Challenge Progress\n\n<!-- COURSE_PROGRESS_START -->\n_Not generated yet. Run progress update after review results are available._\n<!-- COURSE_PROGRESS_END -->\n`;
}

function solveFunctionName(challengeId) {
  return `solve_${challengeId.replace(/-/g, '_')}`;
}

function formatChallengeNumber(challengeId) {
  const match = challengeId.match(/^(\d+)-/);
  return match ? match[1] : challengeId;
}

function buildChallengeGoal(challenge) {
  const customGoal = CHALLENGE_GOALS[challenge.id];
  if (customGoal) {
    return customGoal;
  }

  const skillsText =
    Array.isArray(challenge.skills) && challenge.skills.length > 0
      ? challenge.skills.join(', ')
      : 'core module topics';

  return `Implement **${challenge.name}** in the scoped challenge file(s), applying **${challenge.moduleName}** concepts (${skillsText}).`;
}

function buildReviewSummary(challenge, minPassScore) {
  const checks = ['scoped files exist and are not placeholder stubs'];

  if (Array.isArray(challenge.patternsRequired) && challenge.patternsRequired.length > 0) {
    for (const pattern of challenge.patternsRequired) {
      const guidance = PATTERN_GUIDANCE[pattern];
      checks.push(guidance ? guidance.replace(/\.$/, '').toLowerCase() : pattern);
    }
  } else if (Array.isArray(challenge.skills) && challenge.skills.length > 0) {
    checks.push(`application of ${challenge.skills.join(', ')}`);
  }

  checks.push('code quality and best practices');
  checks.push('optional challenge unit/E2E tests when present');
  checks.push('AI code review when enabled');

  return `Review checks: ${checks.join('; ')}. Pass threshold: **≥ ${minPassScore}%**.`;
}

function buildVerifySection(courseId, challengeId, ext) {
  const mainFile = ext === 'ts' ? 'src/main.ts' : 'src/main.js';

  return `- \`npm run review:challenge -- --course=${courseId} --challenge=${challengeId}\`
- \`npm run dashboard:dev\` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from \`courses/${courseId}/project\`, run \`npm run dev\` after importing your exported function in \`${mainFile}\``;
}

function buildDefaultTaskSteps(challenge, filesToCheck, functionName, languageLabel) {
  const steps = [];

  if (filesToCheck.length === 1) {
    steps.push(
      `**Implement the solver** — Open \`${filesToCheck[0]}\` and implement \`${functionName}\` in ${languageLabel}.`
    );
  } else {
    steps.push(`**Implement the solver** — Complete every scoped file below in ${languageLabel}.`);
    for (const filePath of filesToCheck) {
      steps.push(`Edit \`${filePath}\` and remove placeholder stubs.`);
    }
    steps.push(`Export \`${functionName}\` from the primary challenge file.`);
  }

  if (Array.isArray(challenge.patternsRequired) && challenge.patternsRequired.length > 0) {
    steps.push('**Required patterns** — Your code must demonstrate:');
    for (const pattern of challenge.patternsRequired) {
      const guidance = PATTERN_GUIDANCE[pattern];
      if (guidance) {
        steps.push(guidance.replace(/\.$/, ''));
      }
    }
  } else if (Array.isArray(challenge.skills) && challenge.skills.length > 0) {
    steps.push(`**Apply module topics** — Use ${challenge.skills.join(', ')} in real logic.`);
  }

  steps.push(
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  );

  return steps;
}

function buildTaskSteps(challenge, filesToCheck, functionName, languageLabel) {
  const customSteps = CHALLENGE_TASK_STEPS[challenge.id];
  if (customSteps?.length) {
    return customSteps;
  }

  return buildDefaultTaskSteps(challenge, filesToCheck, functionName, languageLabel);
}

function formatTaskSteps(steps) {
  return steps.map((step, index) => `${index + 1}. ${step}`).join('\n');
}

function buildChallengeReadme(challenge, ext) {
  const courseId = challenge.courseIdHint || '<course-id>';
  const minPassScore = challenge.minPassScore ?? 80;
  const filesToCheck = challenge.filesToCheck?.length
    ? challenge.filesToCheck
    : [`src/challenges/${challenge.id}/index.${ext}`];
  const functionName = solveFunctionName(challenge.id);
  const challengeNumber = formatChallengeNumber(challenge.id);
  const languageLabel = ext === 'ts' ? 'TypeScript' : 'JavaScript';
  const goal = buildChallengeGoal(challenge);
  const taskSteps = buildTaskSteps(challenge, filesToCheck, functionName, languageLabel);
  const formattedTaskSteps = formatTaskSteps(taskSteps);
  const reviewSummary = buildReviewSummary(challenge, minPassScore);
  const verifySection = buildVerifySection(courseId, challenge.id, ext);
  const difficulty = challenge.difficulty || 'not specified';
  const estimatedTime = challenge.estimatedTime || 'not specified';
  const primaryFile = filesToCheck[0];

  return `# Challenge ${challengeNumber}: ${challenge.name}

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** ${difficulty} | **Estimated time:** ${estimatedTime}

## Goal

${goal}

## What to do

${formattedTaskSteps}

## Code

Use ${languageLabel}. Export \`${functionName}\` from \`${primaryFile}\`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (\`TODO\`, \`throw new Error('Not implemented')\`). Avoid \`var\` and unnecessary \`console.*\` where possible.

## Review

${reviewSummary}

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

${verifySection}
`;
}

function buildSourceStub(challenge, ext) {
  if (ext === 'ts') {
    return `// TODO: Implement ${challenge.id} - ${challenge.name}\nexport function solve_${challenge.id.replace(/-/g, '_')}(): string {\n  throw new Error('Not implemented');\n}\n`;
  }

  return `// TODO: Implement ${challenge.id} - ${challenge.name}\nexport function solve_${challenge.id.replace(/-/g, '_')}() {\n  throw new Error('Not implemented');\n}\n`;
}

function buildProjectPackage(courseConfig, ext) {
  const base = {
    name: `${courseConfig.courseId}-project`,
    private: true,
    version: '1.0.0',
    type: 'module'
  };

  if (ext === 'ts') {
    return {
      ...base,
      scripts: {
        start: 'ts-node src/main.ts',
        dev: 'nodemon --watch src --ext ts --exec \"ts-node src/main.ts\"'
      }
    };
  }

  return {
    ...base,
    scripts: {
      start: 'node src/main.js',
      dev: 'nodemon src/main.js'
    }
  };
}

function buildReviewEngineStub(courseId) {
  return `import { runCourseReview } from '../../../shared/review-engine/index.js';\nimport { resolveRepoRoot } from '../../../shared/utils/root.js';\n\nconst ROOT = resolveRepoRoot(import.meta.url);\n\nexport async function runReview({ challengeId = null } = {}) {\n  return runCourseReview({\n    rootDir: ROOT,\n    courseId: '${courseId}',\n    challengeId\n  });\n}\n`;
}

function buildCourseSummarySeed(courseConfig) {
  return {
    courseId: courseConfig.courseId,
    courseName: courseConfig.courseName,
    averageScore: 0,
    completionPercentage: 0,
    totalChallenges: courseConfig.challenges.length,
    completedChallenges: 0,
    badgeLevel: 'none',
    challengeResults: [],
    generatedAt: new Date().toISOString()
  };
}

function runScaffold() {
  const pathwayConfig = readJson(join(ROOT, 'pathway-review', 'pathway-config.json'));
  let createdCount = 0;

  for (const course of pathwayConfig.courses) {
    const courseDir = join(ROOT, 'courses', course.id);
    const courseConfigPath = join(courseDir, 'course-config.json');

    if (!existsSync(courseConfigPath)) {
      throw new Error(`Missing course config: ${courseConfigPath}`);
    }

    const courseConfig = readJson(courseConfigPath);
    const ext = courseConfig.sourceExtension || 'js';

    ensureDir(join(courseDir, 'project', 'challenges'));
    ensureDir(join(courseDir, 'project', 'src', 'challenges'));
    ensureDir(join(courseDir, 'results'));
    ensureDir(join(courseDir, 'review-engine'));

    if (writeText(join(courseDir, 'review-engine', 'index.js'), buildReviewEngineStub(course.id), force)) {
      createdCount += 1;
    }

    const projectReadmePath = join(courseDir, 'project', 'README.md');
    if (writeText(projectReadmePath, buildProjectReadme(courseConfig), force)) {
      createdCount += 1;
    }

    const projectEnv = buildProjectEnv(courseConfig);
    const envExamplePath = join(courseDir, 'project', '.env.example');
    if (writeText(envExamplePath, projectEnv, force)) {
      createdCount += 1;
    }

    const envPath = join(courseDir, 'project', '.env');
    if (writeText(envPath, projectEnv)) {
      createdCount += 1;
    }

    const projectPackagePath = join(courseDir, 'project', 'package.json');
    if (force || !existsSync(projectPackagePath)) {
      writeJson(projectPackagePath, buildProjectPackage(courseConfig, ext));
      createdCount += 1;
    }

    const mainFilePath = join(courseDir, 'project', 'src', `main.${ext}`);
    const mainContent = ext === 'ts'
      ? `export const appName: string = '${courseConfig.courseName}';\nconsole.log(appName);\n`
      : `export const appName = '${courseConfig.courseName}';\nconsole.log(appName);\n`;
    if (writeText(mainFilePath, mainContent, force)) {
      createdCount += 1;
    }

    for (const challenge of courseConfig.challenges) {
      const sourceFile = challenge.filesToCheck?.[0] || `src/challenges/${challenge.id}/index.${ext}`;
      const challengeDir = join(courseDir, 'project', 'challenges', challenge.id);
      const sourcePath = join(courseDir, 'project', sourceFile);

      const metadata = {
        challengeId: challenge.id,
        challengeName: challenge.name,
        moduleId: challenge.moduleId,
        moduleName: challenge.moduleName,
        difficulty: challenge.difficulty,
        estimatedTime: challenge.estimatedTime,
        filesToCheck: challenge.filesToCheck,
        skills: challenge.skills,
        patternsRequired: challenge.patternsRequired
      };

      if (writeText(
        join(challengeDir, 'README.md'),
        buildChallengeReadme(
          {
            ...challenge,
            courseIdHint: course.id,
            minPassScore: courseConfig.requirements?.minScore ?? 80
          },
          ext
        ),
        force
      )) {
        createdCount += 1;
      }

      const metadataPath = join(challengeDir, 'metadata.json');
      if (force || !existsSync(metadataPath)) {
        writeJson(metadataPath, metadata);
        createdCount += 1;
      }

      if (writeText(sourcePath, buildSourceStub(challenge, ext), force)) {
        createdCount += 1;
      }
    }

    const challengeResultsPath = join(courseDir, 'results', 'challenge-results.json');
    const aiFeedbackPath = join(courseDir, 'results', 'ai-feedback.json');
    const courseSummaryPath = join(courseDir, 'results', 'course-summary.json');

    if (force || !existsSync(challengeResultsPath)) {
      writeJson(challengeResultsPath, []);
      createdCount += 1;
    }

    if (force || !existsSync(aiFeedbackPath)) {
      writeJson(aiFeedbackPath, []);
      createdCount += 1;
    }

    if (force || !existsSync(courseSummaryPath)) {
      writeJson(courseSummaryPath, buildCourseSummarySeed(courseConfig));
      createdCount += 1;
    }
  }

  return createdCount;
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (isMain) {
  try {
    const created = runScaffold();
    console.log(`Scaffold complete. Created or updated ${created} file(s).`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export { runScaffold, buildChallengeReadme, solveFunctionName, buildSourceStub, buildCourseSummarySeed };

