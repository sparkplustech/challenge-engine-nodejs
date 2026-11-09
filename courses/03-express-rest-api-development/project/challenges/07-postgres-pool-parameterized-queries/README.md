# Challenge 07: Postgres Pool Parameterized Queries

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Practice querying PostgreSQL safely by using a connection pool and parameterized SQL values (`$1`, `$2`, ...) instead of pasting user input into query strings.

## What to do

1. **Implement the solver** — Open `src/challenges/07-postgres-pool-parameterized-queries/index.js` and implement `solve_07_postgres_pool_parameterized_queries`.
2. Use a connection pool and parameterized queries (`$1`, `$2`, ...) — never string-concatenate SQL.
3. Export query helpers or repository functions from the scoped file.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_07_postgres_pool_parameterized_queries` from `src/challenges/07-postgres-pool-parameterized-queries/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use parameterized sql query patterns (`$1`, `$2`, ...); code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=07-postgres-pool-parameterized-queries`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
