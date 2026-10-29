import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_10_refresh_token_api_key_auth } from '../../src/challenges/10-refresh-token-api-key-auth/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 10-refresh-token-api-key-auth returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_10_refresh_token_api_key_auth());
  assert.ok(result !== undefined && result !== null);
});
