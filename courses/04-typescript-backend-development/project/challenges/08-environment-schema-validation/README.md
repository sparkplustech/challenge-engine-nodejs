# Challenge 08: Environment Schema Validation

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 2 hours

## Goal

Practice validating application configuration with TypeScript by checking `process.env` against a schema and failing fast when required values are missing or invalid.

## What to do

1. **Implement the solver** — Open `src/challenges/08-environment-schema-validation/index.ts` and implement `solve_08_environment_schema_validation`.
2. Validate `process.env` against a Zod, Joi, or equivalent schema at startup.
3. Fail fast with clear errors when required env vars are missing or invalid.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_08_environment_schema_validation` from `src/challenges/08-environment-schema-validation/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; validate environment config against a schema at startup; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=04-typescript-backend-development --challenge=08-environment-schema-validation`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/04-typescript-backend-development/project`, run `npm run dev` after importing your exported function in `src/main.ts`
