import test from 'node:test';
import assert from 'node:assert/strict';
import { solve_06_typeorm_prisma_repository_pattern } from '../../src/challenges/06-typeorm-prisma-repository-pattern/index.ts';
import { resolveSolverResult } from '../../../../../shared/challenge-test-helpers/index.js';

test('e2e: 06-typeorm-prisma-repository-pattern returns a meaningful result', async () => {
  const result = await resolveSolverResult(solve_06_typeorm_prisma_repository_pattern());
  assert.ok(result !== undefined && result !== null);
});
