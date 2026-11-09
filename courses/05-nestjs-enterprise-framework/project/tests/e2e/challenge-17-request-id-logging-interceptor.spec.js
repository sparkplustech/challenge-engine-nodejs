import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_17_request_id_logging_interceptor } from '../../src/challenges/17-request-id-logging-interceptor/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 17-request-id-logging-interceptor returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_17_request_id_logging_interceptor());
  assert.ok(result !== undefined && result !== null);
});
