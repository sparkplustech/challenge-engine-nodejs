# Challenge 10: Stream Based Transfer Service

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Practice moving large files efficiently by using stream pipelines to copy or transfer data without buffering the whole file in memory.

## What to do

1. **Implement the solver** — Open `src/challenges/10-stream-based-transfer-service/index.js` and implement `solve_10_stream_based_transfer_service`.
2. Use stream pipelines to transfer or copy data without loading entire files into memory.
3. Export a transfer service API (function or factory) from the scoped file.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_10_stream_based_transfer_service` from `src/challenges/10-stream-based-transfer-service/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use streaming (`pipeline`, read/write streams) for data flow; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=02-nodejs-core-fundamentals --challenge=10-stream-based-transfer-service`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/02-nodejs-core-fundamentals/project`, run `npm run dev` after importing your exported function in `src/main.js`
