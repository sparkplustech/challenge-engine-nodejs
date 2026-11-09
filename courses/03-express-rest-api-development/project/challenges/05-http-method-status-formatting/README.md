# Challenge 05: HTTP Method Status Formatting

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 3 hours

## Goal

Practice returning predictable API responses by handling the common HTTP methods and using explicit `res.status(...)` codes with consistently formatted JSON bodies.

## What to do

1. **Implement the solver** — Open `src/challenges/05-http-method-status-formatting/index.js` and implement `solve_05_http_method_status_formatting`.
2. Handle GET/POST/PUT/PATCH/DELETE with appropriate `res.status(...)` codes.
3. Return consistently formatted JSON responses from route handlers.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_05_http_method_status_formatting` from `src/challenges/05-http-method-status-formatting/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; return explicit http status codes via `res.status(...)`; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=05-http-method-status-formatting`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
