# Challenge 01: Express TS Migration Workflow

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Migrate Express workflow to TypeScript with `ts-node` and `nodemon` scripts in `package.json`.

## What to do

1. **Implement the solver** — Open `src/challenges/01-express-ts-migration-workflow/index.ts` and implement `solve_01_express_ts_migration_workflow`.
2. Update `package.json` in the project root with `ts-node` and `nodemon` dev workflow scripts.
3. Export typed Express migration helpers from the TypeScript entry file.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_01_express_ts_migration_workflow` from `src/challenges/01-express-ts-migration-workflow/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; configure or reference `ts-node` workflow commands; configure or reference `nodemon` workflow commands; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=04-typescript-backend-development --challenge=01-express-ts-migration-workflow`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/04-typescript-backend-development/project`, run `npm run dev` after importing your exported function in `src/main.ts`
