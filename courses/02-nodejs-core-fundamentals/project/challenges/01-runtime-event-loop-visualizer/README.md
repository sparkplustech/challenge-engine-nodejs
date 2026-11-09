# Challenge 01: Runtime Event Loop Visualizer

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** beginner | **Estimated time:** 3 hours

## Goal

Practice how Node.js schedules asynchronous code by running timers and Promises in a deliberate order, then recording the order in which each callback executes.

## What to do

1. **Implement the solver** — Open `src/challenges/01-runtime-event-loop-visualizer/index.js` and implement `solve_01_runtime_event_loop_visualizer`.
2. Combine `setTimeout` and Promise usage to illustrate event-loop phase ordering.
3. Return or log an ordered list of execution steps from your exported function.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_01_runtime_event_loop_visualizer` from `src/challenges/01-runtime-event-loop-visualizer/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use promise-based async logic (`new promise` or `promise.*`); use `settimeout` to model async scheduling behavior; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=02-nodejs-core-fundamentals --challenge=01-runtime-event-loop-visualizer`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/02-nodejs-core-fundamentals/project`, run `npm run dev` after importing your exported function in `src/main.js`
