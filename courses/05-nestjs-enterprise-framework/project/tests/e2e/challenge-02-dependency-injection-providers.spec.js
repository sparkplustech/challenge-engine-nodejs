import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_02_dependency_injection_providers } from '../../src/challenges/02-dependency-injection-providers/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 02-dependency-injection-providers returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_02_dependency_injection_providers());
  assert.ok(result !== undefined && result !== null);
});
