# Challenge 04: Exception Filter Error Handling

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 3 hours

## Goal

Practice returning consistent errors from a NestJS API by implementing an exception filter that maps thrown errors to HTTP responses.

## What to do

1. **Implement the solver** — Open `src/challenges/04-exception-filter-error-handling/index.ts` and implement `solve_04_exception_filter_error_handling`.
2. Implement an exception filter with `@Catch` or `ExceptionFilter`.
3. Map thrown exceptions to consistent HTTP error responses.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_04_exception_filter_error_handling` from `src/challenges/04-exception-filter-error-handling/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; implement exception filtering (`@catch` / `exceptionfilter`); code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=05-nestjs-enterprise-framework --challenge=04-exception-filter-error-handling`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/05-nestjs-enterprise-framework/project`, run `npm run dev` after importing your exported function in `src/main.ts`
