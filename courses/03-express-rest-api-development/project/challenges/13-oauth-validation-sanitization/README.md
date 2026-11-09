# Challenge 13: OAuth Validation Sanitization

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** advanced | **Estimated time:** 4 hours

## Goal

Practice protecting an API from bad input by validating and sanitizing request data with Joi or Zod and by modelling the key steps of an OAuth2-style flow.

## What to do

1. **Implement the solver** — Open `src/challenges/13-oauth-validation-sanitization/index.js` and implement `solve_13_oauth_validation_sanitization`.
2. Validate and sanitize input with Joi, Zod, or an equivalent validation layer.
3. Include OAuth2-style flow stubs or callback handling patterns in your solution.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_13_oauth_validation_sanitization` from `src/challenges/13-oauth-validation-sanitization/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; validate/sanitize input with joi/zod/validation layer; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=13-oauth-validation-sanitization`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
