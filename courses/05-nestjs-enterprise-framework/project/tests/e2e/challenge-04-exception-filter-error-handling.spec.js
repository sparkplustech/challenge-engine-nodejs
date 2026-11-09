import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_04_exception_filter_error_handling } from '../../src/challenges/04-exception-filter-error-handling/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 04-exception-filter-error-handling returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_04_exception_filter_error_handling());
  assert.ok(result !== undefined && result !== null);
});
