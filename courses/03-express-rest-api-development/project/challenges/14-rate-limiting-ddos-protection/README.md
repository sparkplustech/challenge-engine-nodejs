# Challenge 14: Rate Limiting DDoS Protection

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** advanced | **Estimated time:** 3 hours

## Goal

Practice reducing abuse of an API by applying rate-limiting middleware that limits how many requests a client can make in a period of time.

## What to do

1. **Implement the solver** — Open `src/challenges/14-rate-limiting-ddos-protection/index.js` and implement `solve_14_rate_limiting_ddos_protection`.
2. Apply rate-limiting middleware (`rateLimit(...)`) to protect routes.
3. Export middleware or app setup that enforces request limits.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_14_rate_limiting_ddos_protection` from `src/challenges/14-rate-limiting-ddos-protection/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use a request rate-limiting middleware; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=14-rate-limiting-ddos-protection`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
