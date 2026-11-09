# Challenge 03: Generics Guards Utility Types

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 3 hours

## Goal

Practice writing reusable, type-safe TypeScript by creating generic functions, narrowing values with a type guard, and using utility types such as `Partial` and `Pick`.

## What to do

1. **Implement the solver** — Open `src/challenges/03-generics-guards-utility-types/index.ts` and implement `solve_03_generics_guards_utility_types`.
2. Write generic functions or types with type parameters (`<T>`).
3. Implement a type guard (`value is SomeType`) and use utility types (`Partial`, `Pick`, etc.).
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_03_generics_guards_utility_types` from `src/challenges/03-generics-guards-utility-types/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use generic type parameters in reusable code; implement a type guard (`value is sometype`); code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=04-typescript-backend-development --challenge=03-generics-guards-utility-types`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/04-typescript-backend-development/project`, run `npm run dev` after importing your exported function in `src/main.ts`
