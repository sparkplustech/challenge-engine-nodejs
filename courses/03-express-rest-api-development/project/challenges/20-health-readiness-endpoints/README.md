# Challenge 20: Health and Readiness Endpoints

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** beginner | **Estimated time:** 2 hours

## Goal

Practice making a service observable in production by exposing `/health` or `/ready` endpoints that report whether the app is running and able to serve traffic.

## What to do

1. **Implement the solver** — Open `src/challenges/20-health-readiness-endpoints/index.js` and implement `solve_20_health_readiness_endpoints`.
2. Expose GET `/health` or `/ready` (or `/readiness`) endpoints on your Express app.
3. Return appropriate status codes reflecting service health.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_20_health_readiness_endpoints` from `src/challenges/20-health-readiness-endpoints/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; expose health/readiness style get endpoint(s) such as `/health` or `/ready`; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=20-health-readiness-endpoints`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
