# Challenge 05: Custom Decorators Metadata Reflection

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Practice extending NestJS with your own syntax by creating a custom decorator with `SetMetadata` or `createParamDecorator` and reading that metadata with `Reflector`.

## What to do

1. **Implement the solver** — Open `src/challenges/05-custom-decorators-metadata-reflection/index.ts` and implement `solve_05_custom_decorators_metadata_reflection`.
2. Create a custom decorator using `SetMetadata`, `createParamDecorator`, or `Reflector`.
3. Read metadata in a guard, interceptor, or handler.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_05_custom_decorators_metadata_reflection` from `src/challenges/05-custom-decorators-metadata-reflection/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; implement custom decorators or metadata reflection usage; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=05-nestjs-enterprise-framework --challenge=05-custom-decorators-metadata-reflection`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/05-nestjs-enterprise-framework/project`, run `npm run dev` after importing your exported function in `src/main.ts`
