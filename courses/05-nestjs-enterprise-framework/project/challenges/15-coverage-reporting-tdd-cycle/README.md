# Challenge 15: Coverage Reporting TDD Cycle

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** advanced | **Estimated time:** 4 hours

## Goal

Practice measuring and improving test quality by structuring Jest suites for coverage reporting and following a red/green TDD cycle.

## What to do

1. **Implement the solver** — Open `src/challenges/15-coverage-reporting-tdd-cycle/index.ts` and implement `solve_15_coverage_reporting_tdd_cycle`.
2. Structure Jest test suites that support coverage reporting goals.
3. Demonstrate a TDD-style red/green cycle in test and implementation code.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_15_coverage_reporting_tdd_cycle` from `src/challenges/15-coverage-reporting-tdd-cycle/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; write jest-style tests with `describe`/`it` blocks; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=05-nestjs-enterprise-framework --challenge=15-coverage-reporting-tdd-cycle`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/05-nestjs-enterprise-framework/project`, run `npm run dev` after importing your exported function in `src/main.ts`
