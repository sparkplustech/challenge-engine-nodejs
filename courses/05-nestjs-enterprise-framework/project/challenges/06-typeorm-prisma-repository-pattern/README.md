# Challenge 06: TypeORM Prisma Repository Pattern

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** advanced | **Estimated time:** 5 hours

## Goal

Practice keeping database code out of controllers by putting data access behind a repository or service boundary (for example with TypeORM or Prisma).

## What to do

1. **Implement the solver** — Open `src/challenges/06-typeorm-prisma-repository-pattern/index.ts` and implement `solve_06_typeorm_prisma_repository_pattern`.
2. Implement repository-style data access (Repository class, `PrismaService`, or equivalent).
3. Keep database logic behind a repository boundary, not in controllers.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_06_typeorm_prisma_repository_pattern` from `src/challenges/06-typeorm-prisma-repository-pattern/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use repository-style data access boundaries; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=05-nestjs-enterprise-framework --challenge=06-typeorm-prisma-repository-pattern`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/05-nestjs-enterprise-framework/project`, run `npm run dev` after importing your exported function in `src/main.ts`
