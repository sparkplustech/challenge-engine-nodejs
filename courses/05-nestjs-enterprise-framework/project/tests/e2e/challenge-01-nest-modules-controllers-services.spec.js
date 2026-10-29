import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_01_nest_modules_controllers_services } from '../../src/challenges/01-nest-modules-controllers-services/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 01-nest-modules-controllers-services returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_01_nest_modules_controllers_services());
  assert.ok(result !== undefined && result !== null);
});
