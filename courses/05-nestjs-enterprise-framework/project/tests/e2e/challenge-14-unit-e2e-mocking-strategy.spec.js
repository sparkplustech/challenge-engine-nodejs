import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_14_unit_e2e_mocking_strategy } from '../../src/challenges/14-unit-e2e-mocking-strategy/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 14-unit-e2e-mocking-strategy returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_14_unit_e2e_mocking_strategy());
  assert.ok(result !== undefined && result !== null);
});
