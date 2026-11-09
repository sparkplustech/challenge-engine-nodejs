import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_07_validation_config_logging } from '../../src/challenges/07-validation-config-logging/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 07-validation-config-logging returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_07_validation_config_logging());
  assert.ok(result !== undefined && result !== null);
});
