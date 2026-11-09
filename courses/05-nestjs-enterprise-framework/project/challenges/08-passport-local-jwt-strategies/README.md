# Challenge 08: Passport Local JWT Strategies

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Practice securing a NestJS API by implementing Passport local and JWT strategies and protecting routes with an `AuthGuard`.

## What to do

1. **Implement the solver** — Open `src/challenges/08-passport-local-jwt-strategies/index.ts` and implement `solve_08_passport_local_jwt_strategies`.
2. Implement Passport strategies (`PassportStrategy`) for local and JWT auth.
3. Apply `AuthGuard` to protect routes in your Nest setup.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_08_passport_local_jwt_strategies` from `src/challenges/08-passport-local-jwt-strategies/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; implement passport strategy/auth-guard usage; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=05-nestjs-enterprise-framework --challenge=08-passport-local-jwt-strategies`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/05-nestjs-enterprise-framework/project`, run `npm run dev` after importing your exported function in `src/main.ts`
