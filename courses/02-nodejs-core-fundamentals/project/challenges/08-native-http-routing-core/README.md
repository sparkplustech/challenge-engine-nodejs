# Challenge 08: Native HTTP Routing Core

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Practice building a web server without a framework by using Node's `http.createServer` to create a server and route requests by URL path.

## What to do

1. **Implement the solver** — Open `src/challenges/08-native-http-routing-core/index.js` and implement `solve_08_native_http_routing_core`.
2. Create an HTTP server with `http.createServer` and implement basic path-based routing.
3. Return a server factory, router map, or handler from the exported function.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_08_native_http_routing_core` from `src/challenges/08-native-http-routing-core/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; build a server using node `http.createserver(...)`; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=02-nodejs-core-fundamentals --challenge=08-native-http-routing-core`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/02-nodejs-core-fundamentals/project`, run `npm run dev` after importing your exported function in `src/main.js`
