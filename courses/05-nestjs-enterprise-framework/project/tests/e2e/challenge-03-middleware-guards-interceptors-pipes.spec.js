import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_03_middleware_guards_interceptors_pipes } from '../../src/challenges/03-middleware-guards-interceptors-pipes/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 03-middleware-guards-interceptors-pipes returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_03_middleware_guards_interceptors_pipes());
  assert.ok(result !== undefined && result !== null);
});
