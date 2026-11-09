# Challenge 09: SQL vs NoSQL Design Review

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 3 hours

## Goal

Practice choosing the right database for a feature by comparing SQL and NoSQL trade-offs and returning a structured recommendation.

## What to do

1. **Implement the solver** — Open `src/challenges/09-sql-vs-nosql-design-review/index.js` and implement `solve_09_sql_vs_nosql_design_review`.
2. Model a data design decision framework comparing SQL vs NoSQL trade-offs.
3. Return structured criteria or recommendations from the exported function.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_09_sql_vs_nosql_design_review` from `src/challenges/09-sql-vs-nosql-design-review/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; application of SQL vs NoSQL, normalization, indexing; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=09-sql-vs-nosql-design-review`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
