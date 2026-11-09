import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_08_passport_local_jwt_strategies } from '../../src/challenges/08-passport-local-jwt-strategies/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 08-passport-local-jwt-strategies returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_08_passport_local_jwt_strategies());
  assert.ok(result !== undefined && result !== null);
});
