# Challenge 12: Debug and Log Observability

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 3 hours

## Goal

Practice making an application easier to debug by adding structured logging with `console.info`/`warn`/`error` (or a logger) around the important steps.

## What to do

1. **Implement the solver** — Open `src/challenges/12-debug-and-log-observability/index.js` and implement `solve_12_debug_and_log_observability`.
2. Use structured logging (`console.info`/`warn`/`error` or a logger object) for observability.
3. Integrate logging into the flow returned or demonstrated by your exported function.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_12_debug_and_log_observability` from `src/challenges/12-debug-and-log-observability/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use structured logging patterns (`console.info/warn/error` or a logger object); code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=02-nodejs-core-fundamentals --challenge=12-debug-and-log-observability`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/02-nodejs-core-fundamentals/project`, run `npm run dev` after importing your exported function in `src/main.js`
