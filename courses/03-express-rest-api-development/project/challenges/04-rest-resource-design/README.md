# Challenge 04: REST Resource Design

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 3 hours

## Goal

Practice designing RESTful endpoints by modelling a resource as collection and item routes and mapping each URL and HTTP verb to the correct operation.

## What to do

1. **Implement the solver** — Open `src/challenges/04-rest-resource-design/index.js` and implement `solve_04_rest_resource_design`.
2. Design RESTful resource routes (collection + item) with `express.Router()`.
3. Map HTTP verbs to resource operations in a consistent URL structure.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_04_rest_resource_design` from `src/challenges/04-rest-resource-design/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; define routing with `express.router()` or router methods; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=04-rest-resource-design`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
