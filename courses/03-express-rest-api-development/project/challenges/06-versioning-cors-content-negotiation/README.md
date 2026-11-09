# Challenge 06: Versioning CORS Content Negotiation

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Practice making an API safe to call from browsers and ready to evolve by configuring CORS, choosing a versioning strategy, and respecting `Accept` headers.

## What to do

1. **Implement the solver** — Open `src/challenges/06-versioning-cors-content-negotiation/index.js` and implement `solve_06_versioning_cors_content_negotiation`.
2. Apply CORS middleware or headers and support API versioning (path or header based).
3. Respect `Accept` headers or content negotiation where applicable.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_06_versioning_cors_content_negotiation` from `src/challenges/06-versioning-cors-content-negotiation/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; apply cors middleware/configuration; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=06-versioning-cors-content-negotiation`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
