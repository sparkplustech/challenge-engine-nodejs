# Challenge 02: FS Stream Buffer Operations

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Practice reading and writing files efficiently by using Node.js streams to process data in chunks instead of loading an entire file into memory at once.

## What to do

1. **Implement the solver** — Open `src/challenges/02-fs-stream-buffer-operations/index.js` and implement `solve_02_fs_stream_buffer_operations`.
2. Import Node `fs` and use streams (`createReadStream`, `createWriteStream`, or `pipeline`) for file I/O.
3. Perform a real stream-based read, write, or transform operation in your solution.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_02_fs_stream_buffer_operations` from `src/challenges/02-fs-stream-buffer-operations/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; import node `fs`/`node:fs` and use it meaningfully; use streaming (`pipeline`, read/write streams) for data flow; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=02-nodejs-core-fundamentals --challenge=02-fs-stream-buffer-operations`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/02-nodejs-core-fundamentals/project`, run `npm run dev` after importing your exported function in `src/main.js`
