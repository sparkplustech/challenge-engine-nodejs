# Challenge 02: Routing Params Query Handlers

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** beginner | **Estimated time:** 3 hours

## Goal

Practice organizing Express routes by using `express.Router()` to define handlers that read route parameters (`req.params`) and query-string values (`req.query`).

## What to do

1. **Implement the solver** — Open `src/challenges/02-routing-params-query-handlers/index.js` and implement `solve_02_routing_params_query_handlers`.
2. Define routes with `express.Router()` using route params (`:id`) and query string handlers.
3. Read `req.params` and `req.query` inside route handlers.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_02_routing_params_query_handlers` from `src/challenges/02-routing-params-query-handlers/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; define routing with `express.router()` or router methods; use route params (`:id`) and consume `req.params`; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=02-routing-params-query-handlers`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
