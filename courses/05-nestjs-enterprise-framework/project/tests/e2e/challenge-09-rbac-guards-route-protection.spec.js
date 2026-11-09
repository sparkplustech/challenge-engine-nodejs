import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_09_rbac_guards_route_protection } from '../../src/challenges/09-rbac-guards-route-protection/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 09-rbac-guards-route-protection returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_09_rbac_guards_route_protection());
  assert.ok(result !== undefined && result !== null);
});
