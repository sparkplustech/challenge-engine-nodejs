# Challenge 12: Bcrypt Session Cookie Security

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Practice storing credentials safely by hashing and comparing passwords with `bcrypt` and by configuring secure session and cookie options.

## What to do

1. **Implement the solver** — Open `src/challenges/12-bcrypt-session-cookie-security/index.js` and implement `solve_12_bcrypt_session_cookie_security`.
2. Hash and compare passwords with `bcrypt.hash` and `bcrypt.compare`.
3. Configure secure session or cookie options in your auth helper.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_12_bcrypt_session_cookie_security` from `src/challenges/12-bcrypt-session-cookie-security/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use bcrypt hashing/comparison for credential flow; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=12-bcrypt-session-cookie-security`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
