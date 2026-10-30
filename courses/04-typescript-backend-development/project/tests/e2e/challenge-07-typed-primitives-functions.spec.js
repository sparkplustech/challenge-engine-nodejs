import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_07_typed_primitives_functions } from '../../src/challenges/07-typed-primitives-functions/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 07-typed-primitives-functions returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_07_typed_primitives_functions());
  assert.ok(result !== undefined && result !== null);
});
