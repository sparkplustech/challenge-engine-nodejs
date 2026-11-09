# Challenge 15: OpenAPI Contract Documentation

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** beginner | **Estimated time:** 3 hours

## Goal

Practice documenting an API so other developers can use it by producing OpenAPI/Swagger contract details for at least one route's request and response.

## What to do

1. **Implement the solver** — Open `src/challenges/15-openapi-contract-documentation/index.js` and implement `solve_15_openapi_contract_documentation`.
2. Include OpenAPI/Swagger contract artifacts or setup in your solution.
3. Document at least one route with request/response schema metadata.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_15_openapi_contract_documentation` from `src/challenges/15-openapi-contract-documentation/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; include openapi/swagger contract artifacts or setup; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=15-openapi-contract-documentation`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
