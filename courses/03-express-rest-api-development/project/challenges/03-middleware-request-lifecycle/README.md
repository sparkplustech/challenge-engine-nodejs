# Challenge 03: Middleware Request Lifecycle

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 3 hours

## Goal

Practice controlling an Express request as it travels through the app by writing custom middleware that inspects the request and calls `next()` to continue the chain.

## What to do

1. **Implement the solver** — Open `src/challenges/03-middleware-request-lifecycle/index.js` and implement `solve_03_middleware_request_lifecycle`.
2. Write custom middleware that calls `next()` to continue the request lifecycle.
3. Chain middleware before route handlers in your Express app setup.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_03_middleware_request_lifecycle` from `src/challenges/03-middleware-request-lifecycle/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; implement middleware that calls `next()` correctly; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=03-middleware-request-lifecycle`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
