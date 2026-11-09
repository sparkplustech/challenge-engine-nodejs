# Challenge 01: Express App Bootstrap

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** beginner | **Estimated time:** 2 hours

## Goal

Practice creating an Express application from scratch by setting up an app instance, applying basic configuration, and exporting it so it can be started or tested.

## What to do

1. **Implement the solver** — Open `src/challenges/01-express-app-bootstrap/index.js` and implement `solve_01_express_app_bootstrap`.
2. Create an Express application with `express()` and basic app configuration.
3. Export the app or a factory from `solve_01_express_app_bootstrap`.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_01_express_app_bootstrap` from `src/challenges/01-express-app-bootstrap/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; initialize an express app instance (`express()`); code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=01-express-app-bootstrap`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
