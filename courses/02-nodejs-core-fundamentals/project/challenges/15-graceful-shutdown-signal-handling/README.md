# Challenge 15: Graceful Shutdown Signal Handling

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 3 hours

## Goal

Practice shutting a server down safely by listening for `SIGINT`/`SIGTERM` signals and releasing resources (for example with `server.close()`) before the process exits.

## What to do

1. **Implement the solver** — Open `src/challenges/15-graceful-shutdown-signal-handling/index.js` and implement `solve_15_graceful_shutdown_signal_handling`.
2. Register `SIGINT` and/or `SIGTERM` handlers with `process.on`.
3. Implement graceful shutdown (for example `server.close()` and cleanup) in your solution.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_15_graceful_shutdown_signal_handling` from `src/challenges/15-graceful-shutdown-signal-handling/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; handle shutdown signals (`sigint` and/or `sigterm`) via `process.on`; implement graceful shutdown behavior (for example `server.close()` and cleanup); code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=02-nodejs-core-fundamentals --challenge=15-graceful-shutdown-signal-handling`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/02-nodejs-core-fundamentals/project`, run `npm run dev` after importing your exported function in `src/main.js`
