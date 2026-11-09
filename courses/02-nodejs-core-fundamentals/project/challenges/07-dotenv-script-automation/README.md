# Challenge 07: Dotenv Script Automation

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** beginner | **Estimated time:** 3 hours

## Goal

Practice loading configuration from environment files by calling `dotenv.config()` and wiring the resulting `process.env` values into your application settings.

## What to do

1. **Implement the solver** — Open `src/challenges/07-dotenv-script-automation/index.js` and implement `solve_07_dotenv_script_automation`.
2. Call `dotenv.config()` and read configuration values from `process.env`.
3. Wire env-driven settings into the object or behavior returned by your exported function.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_07_dotenv_script_automation` from `src/challenges/07-dotenv-script-automation/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; load env values with `dotenv.config()` or equivalent startup config; use `process.env`, `process.argv`, or `process.exit`; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=02-nodejs-core-fundamentals --challenge=07-dotenv-script-automation`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/02-nodejs-core-fundamentals/project`, run `npm run dev` after importing your exported function in `src/main.js`
