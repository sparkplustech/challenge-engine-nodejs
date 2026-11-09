# Challenge 10: Transaction ACID N Plus One Fix

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** advanced | **Estimated time:** 5 hours

## Goal

Practice protecting multi-step database work by wrapping it in a transaction and by replacing an N+1 query pattern with a batched or joined query.

## What to do

1. **Implement the solver** — Open `src/challenges/10-transaction-acid-n-plus-one-fix/index.js` and implement `solve_10_transaction_acid_n_plus_one_fix`.
2. Wrap multi-step database work in a transaction (`BEGIN`/`COMMIT`/`ROLLBACK` or a transaction API).
3. Address an N+1 query pattern with a batched or joined query strategy.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_10_transaction_acid_n_plus_one_fix` from `src/challenges/10-transaction-acid-n-plus-one-fix/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; model transaction control (`begin/commit/rollback` or transaction wrapper); code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=10-transaction-acid-n-plus-one-fix`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
