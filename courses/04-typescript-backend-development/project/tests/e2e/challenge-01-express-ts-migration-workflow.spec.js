import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_01_express_ts_migration_workflow } from '../../src/challenges/01-express-ts-migration-workflow/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 01-express-ts-migration-workflow returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_01_express_ts_migration_workflow());
  assert.ok(result !== undefined && result !== null);
});
