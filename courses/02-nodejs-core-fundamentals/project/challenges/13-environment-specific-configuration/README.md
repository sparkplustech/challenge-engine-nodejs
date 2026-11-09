# Challenge 13: Environment Specific Configuration

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 3 hours

## Goal

Practice supporting different deployment environments by loading `dotenv` values and branching configuration and behavior based on `process.env`.

## What to do

1. **Implement the solver** — Open `src/challenges/13-environment-specific-configuration/index.js` and implement `solve_13_environment_specific_configuration`.
2. Load env config with `dotenv.config()` and branch behavior using `process.env`.
3. Return environment-specific settings (development vs production) from the exported function.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_13_environment_specific_configuration` from `src/challenges/13-environment-specific-configuration/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; load env values with `dotenv.config()` or equivalent startup config; use `process.env`, `process.argv`, or `process.exit`; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=02-nodejs-core-fundamentals --challenge=13-environment-specific-configuration`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/02-nodejs-core-fundamentals/project`, run `npm run dev` after importing your exported function in `src/main.js`
