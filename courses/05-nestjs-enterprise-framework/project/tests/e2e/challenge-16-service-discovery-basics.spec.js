import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_16_service_discovery_basics } from '../../src/challenges/16-service-discovery-basics/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 16-service-discovery-basics returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_16_service_discovery_basics());
  assert.ok(result !== undefined && result !== null);
});
