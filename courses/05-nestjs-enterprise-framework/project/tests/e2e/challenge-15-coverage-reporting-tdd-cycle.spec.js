import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_15_coverage_reporting_tdd_cycle } from '../../src/challenges/15-coverage-reporting-tdd-cycle/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 15-coverage-reporting-tdd-cycle returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_15_coverage_reporting_tdd_cycle());
  assert.ok(result !== undefined && result !== null);
});
