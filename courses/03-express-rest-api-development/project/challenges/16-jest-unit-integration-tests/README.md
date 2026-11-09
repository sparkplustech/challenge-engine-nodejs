# Challenge 16: Jest Unit Integration Tests

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Practice writing automated tests by using Jest's `describe` and `it` blocks to check that a unit of code behaves as expected.

## What to do

1. **Implement the solver** — Open `src/challenges/16-jest-unit-integration-tests/index.js` and implement `solve_16_jest_unit_integration_tests`.
2. Write Jest tests using `describe` and `it` blocks for unit or integration coverage.
3. Export test suites or tested modules from the scoped file.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_16_jest_unit_integration_tests` from `src/challenges/16-jest-unit-integration-tests/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; write jest-style tests with `describe`/`it` blocks; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=16-jest-unit-integration-tests`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
