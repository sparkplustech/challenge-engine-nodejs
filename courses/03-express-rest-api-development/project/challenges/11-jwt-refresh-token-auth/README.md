# Challenge 11: JWT Refresh Token Auth

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Practice building token-based authentication by signing and verifying JWTs with `jwt.sign`/`jwt.verify` and modelling access and refresh token flows.

## What to do

1. **Implement the solver** — Open `src/challenges/11-jwt-refresh-token-auth/index.js` and implement `solve_11_jwt_refresh_token_auth`.
2. Sign and verify JWTs with `jwt.sign` and `jwt.verify`.
3. Model access and refresh token issuance or rotation in your auth flow.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_11_jwt_refresh_token_auth` from `src/challenges/11-jwt-refresh-token-auth/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use jwt sign/verify flows; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=11-jwt-refresh-token-auth`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
