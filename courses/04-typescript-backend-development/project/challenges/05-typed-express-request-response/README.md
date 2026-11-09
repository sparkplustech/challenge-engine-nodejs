# Challenge 05: Typed Express Request Response

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 3 hours

## Goal

Practice typing Express handlers by using the `Request`, `Response`, and `NextFunction` types so route parameters and responses are checked by TypeScript.

## What to do

1. **Implement the solver** — Open `src/challenges/05-typed-express-request-response/index.ts` and implement `solve_05_typed_express_request_response`.
2. Import and use typed Express types (`Request`, `Response`, `NextFunction`).
3. Type route handler parameters and return values explicitly.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_05_typed_express_request_response` from `src/challenges/05-typed-express-request-response/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use typed express imports (`request`, `response`, `nextfunction`); use explicit typescript type annotations; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=04-typescript-backend-development --challenge=05-typed-express-request-response`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/04-typescript-backend-development/project`, run `npm run dev` after importing your exported function in `src/main.ts`
