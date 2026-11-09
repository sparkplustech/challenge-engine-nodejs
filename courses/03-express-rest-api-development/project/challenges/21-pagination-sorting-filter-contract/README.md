# Challenge 21: Pagination Sorting Filter Contract

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 3 hours

## Goal

Practice returning large collections in a predictable way by reading `page`, `limit`, `sort`, and `filter` values from `req.query` and applying them to list responses.

## What to do

1. **Implement the solver** — Open `src/challenges/21-pagination-sorting-filter-contract/index.js` and implement `solve_21_pagination_sorting_filter_contract`.
2. Read `page`, `limit`, `sort`, and `filter` values from `req.query`.
3. Apply pagination, sorting, and filtering to list responses in a consistent contract.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_21_pagination_sorting_filter_contract` from `src/challenges/21-pagination-sorting-filter-contract/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; read and apply pagination/sorting/filter query params from `req.query`; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=21-pagination-sorting-filter-contract`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
