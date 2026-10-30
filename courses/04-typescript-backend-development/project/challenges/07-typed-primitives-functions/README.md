# Challenge 07: Typed Primitives and Functions

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** beginner | **Estimated time:** 2 hours

## Goal

Add explicit TypeScript annotations to primitives, arrays, objects, and function signatures.

## What to do

1. **Implement the solver** — Open `src/challenges/07-typed-primitives-functions/index.ts` and implement `solve_07_typed_primitives_functions`.
2. Add explicit TypeScript type annotations to primitives, arrays, objects, and function signatures.
3. Export the typed function with a clear return type.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_07_typed_primitives_functions` from `src/challenges/07-typed-primitives-functions/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use explicit typescript type annotations; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=04-typescript-backend-development --challenge=07-typed-primitives-functions`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/04-typescript-backend-development/project`, run `npm run dev` after importing your exported function in `src/main.ts`
