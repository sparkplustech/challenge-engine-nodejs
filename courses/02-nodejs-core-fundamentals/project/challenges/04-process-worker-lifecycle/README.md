# Challenge 04: Process Worker Lifecycle

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Practice controlling a Node.js process by reading environment values and command-line arguments and by starting a child process with the built-in `child_process` APIs.

## What to do

1. **Implement the solver** — Open `src/challenges/04-process-worker-lifecycle/index.js` and implement `solve_04_process_worker_lifecycle`.
2. Read `process.env` or `process.argv` and use child-process APIs (`spawn`, `fork`, or `execFile`).
3. Demonstrate process lifecycle control (start, signal, or exit handling) in your code.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_04_process_worker_lifecycle` from `src/challenges/04-process-worker-lifecycle/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use `process.env`, `process.argv`, or `process.exit`; use node child-process apis (`spawn`, `fork`, `execfile`, or import child_process); code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=02-nodejs-core-fundamentals --challenge=04-process-worker-lifecycle`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/02-nodejs-core-fundamentals/project`, run `npm run dev` after importing your exported function in `src/main.js`
