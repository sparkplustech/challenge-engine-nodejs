import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_05_custom_decorators_metadata_reflection } from '../../src/challenges/05-custom-decorators-metadata-reflection/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 05-custom-decorators-metadata-reflection returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_05_custom_decorators_metadata_reflection());
  assert.ok(result !== undefined && result !== null);
});
