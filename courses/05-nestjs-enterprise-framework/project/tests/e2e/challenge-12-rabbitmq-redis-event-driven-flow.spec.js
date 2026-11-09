import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_12_rabbitmq_redis_event_driven_flow } from '../../src/challenges/12-rabbitmq-redis-event-driven-flow/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 12-rabbitmq-redis-event-driven-flow returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_12_rabbitmq_redis_event_driven_flow());
  assert.ok(result !== undefined && result !== null);
});
