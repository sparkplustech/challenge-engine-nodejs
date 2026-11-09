# Challenge 14: Unit E2E Mocking Strategy

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Practice testing a NestJS application at two levels by writing unit tests with mocks and end-to-end tests with Supertest.

## What to do

1. **Implement the solver** — Open `src/challenges/14-unit-e2e-mocking-strategy/index.ts` and implement `solve_14_unit_e2e_mocking_strategy`.
2. Write Jest unit tests with `describe`/`it` and E2E tests with Supertest.
3. Mock Nest dependencies in unit tests and assert HTTP routes in E2E tests.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_14_unit_e2e_mocking_strategy` from `src/challenges/14-unit-e2e-mocking-strategy/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; write jest-style tests with `describe`/`it` blocks; use supertest request assertions against http routes; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=05-nestjs-enterprise-framework --challenge=14-unit-e2e-mocking-strategy`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/05-nestjs-enterprise-framework/project`, run `npm run dev` after importing your exported function in `src/main.ts`
