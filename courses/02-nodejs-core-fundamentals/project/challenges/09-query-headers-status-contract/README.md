# Challenge 09: Query Headers Status Contract

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 3 hours

## Goal

Practice handling the HTTP request/response contract by parsing URLs with the `URL` class, reading query parameters, and returning the correct headers and status codes.

## What to do

1. **Implement the solver** — Open `src/challenges/09-query-headers-status-contract/index.js` and implement `solve_09_query_headers_status_contract`.
2. Parse URLs with the `URL` class, read query parameters, and set response headers and status codes.
3. Return or demonstrate the query/header/status contract from the exported function.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_09_query_headers_status_contract` from `src/challenges/09-query-headers-status-contract/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; parse/request urls with the `url` class; return explicit http status codes via `res.status(...)`; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=02-nodejs-core-fundamentals --challenge=09-query-headers-status-contract`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/02-nodejs-core-fundamentals/project`, run `npm run dev` after importing your exported function in `src/main.js`
