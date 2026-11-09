# Challenge 19: HTTPS TLS API Hardening

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** advanced | **Estimated time:** 4 hours

## Goal

Practice serving an API over HTTPS by creating a TLS-enabled server with `https.createServer` and applying sensible security options.

## What to do

1. **Implement the solver** — Open `src/challenges/19-https-tls-api-hardening/index.js` and implement `solve_19_https_tls_api_hardening`.
2. Create an HTTPS server with `https.createServer` or import from `node:https`.
3. Apply TLS-related hardening options in your server setup.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_19_https_tls_api_hardening` from `src/challenges/19-https-tls-api-hardening/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use https server apis (`https.createserver` or `node:https`); code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=19-https-tls-api-hardening`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
