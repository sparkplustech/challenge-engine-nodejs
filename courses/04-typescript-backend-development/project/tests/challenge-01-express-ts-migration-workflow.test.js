import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  assertNoPlaceholder,
  assertCommonSourceRules,
  assertRequiredPatterns,
  assertForbiddenPatterns,
  getChallengeForbiddenPatterns,
  getChallengeRequiredPatterns,
  assertReturnProfile,
  solverImportUrl
} from '../../../../shared/challenge-test-helpers/index.js';

const challengeId = '01-express-ts-migration-workflow';
const filesToCheck = [
  'src/challenges/01-express-ts-migration-workflow/index.ts',
  'package.json'
];
const sourceFile = filesToCheck[0];
const solverName = 'solve_01_express_ts_migration_workflow';
const combinedSource = filesToCheck
  .map((file) => readFileSync(new URL(`../${file}`, import.meta.url), 'utf-8'))
  .join('\n');
const patternsRequired = ['tsNodeScript', 'nodemonScript'];

test('no placeholder code remains in scoped source files', () => {
  for (const file of filesToCheck) {
    const fileSource = readFileSync(new URL(`../${file}`, import.meta.url), 'utf-8');
    assertNoPlaceholder(fileSource, file);
  }
});

test('configures ts-node and nodemon scripts for Express TypeScript migration', () => {
  for (const file of filesToCheck) {
    const fileSource = readFileSync(new URL(`../${file}`, import.meta.url), 'utf-8');
    assertCommonSourceRules(fileSource, file);
    assertForbiddenPatterns(
      fileSource,
      getChallengeForbiddenPatterns(challengeId),
      file
    );
  }
  assertRequiredPatterns(
    combinedSource,
    getChallengeRequiredPatterns(challengeId, patternsRequired),
    'scoped challenge files'
  );
});

test('exports solve_01_express_ts_migration_workflow from scoped source', () => {
  assert.match(
    combinedSource,
    /export\s+(async\s+)?function\s+solve_01_express_ts_migration_workflow\b/,
    'expected exported solver function in scoped source'
  );
});

test('returns Express TypeScript migration workflow result', async () => {
  const projectDir = dirname(dirname(fileURLToPath(import.meta.url)));
  const solverModule = await import(solverImportUrl(projectDir, sourceFile));
  const solver = solverModule[solverName];
  assert.equal(typeof solver, 'function');
  await assertReturnProfile('meaningfulResult', solver());
});
