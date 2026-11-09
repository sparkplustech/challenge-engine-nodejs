# Challenge 11: Operational vs Programmer Errors

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 3 hours

## Goal

Practice telling recoverable operational errors apart from programmer bugs and handling each category appropriately with `try/catch`.

## What to do

1. **Implement the solver** — Open `src/challenges/11-operational-vs-programmer-errors/index.js` and implement `solve_11_operational_vs_programmer_errors`.
2. Classify errors as operational vs programmer and handle each type differently.
3. Use `try/catch` for recoverable operational failures in your exported function.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_11_operational_vs_programmer_errors` from `src/challenges/11-operational-vs-programmer-errors/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; handle runtime errors with `try/catch`; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=02-nodejs-core-fundamentals --challenge=11-operational-vs-programmer-errors`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/02-nodejs-core-fundamentals/project`, run `npm run dev` after importing your exported function in `src/main.js`
