# Challenge 17: Coverage Mocking Versioned API Tests

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** advanced | **Estimated time:** 4 hours

## Goal

Practice testing HTTP endpoints by using Supertest to send requests to an Express app, mocking slow or external dependencies and covering versioned routes.

## What to do

1. **Implement the solver** — Open `src/challenges/17-coverage-mocking-versioned-api-tests/index.js` and implement `solve_17_coverage_mocking_versioned_api_tests`.
2. Use Supertest (`request(app).get/post/...)`) for HTTP route assertions.
3. Mock dependencies and cover versioned API routes in your tests.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_17_coverage_mocking_versioned_api_tests` from `src/challenges/17-coverage-mocking-versioned-api-tests/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use supertest request assertions against http routes; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=17-coverage-mocking-versioned-api-tests`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
