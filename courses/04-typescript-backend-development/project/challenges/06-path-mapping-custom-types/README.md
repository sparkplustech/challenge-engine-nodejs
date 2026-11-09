# Challenge 06: Path Mapping Custom Types

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 3 hours

## Goal

Practice keeping imports clean in a TypeScript project by using a path alias such as `@/...` and adding custom type definitions for shared or external code.

## What to do

1. **Implement the solver** — Open `src/challenges/06-path-mapping-custom-types/index.ts` and implement `solve_06_path_mapping_custom_types`.
2. Use a path alias import (for example `from "@/...`) in your TypeScript code.
3. Define custom type definitions for external or shared modules.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_06_path_mapping_custom_types` from `src/challenges/06-path-mapping-custom-types/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use a path alias import (for example `@/...`); code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=04-typescript-backend-development --challenge=06-path-mapping-custom-types`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/04-typescript-backend-development/project`, run `npm run dev` after importing your exported function in `src/main.ts`
