import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_13_grpc_rest_interservice_bridge } from '../../src/challenges/13-grpc-rest-interservice-bridge/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 13-grpc-rest-interservice-bridge returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_13_grpc_rest_interservice_bridge());
  assert.ok(result !== undefined && result !== null);
});
