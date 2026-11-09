# Challenge 07: Validation Config Logging

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Practice making a NestJS app production-ready by validating DTOs with `class-validator` and adding configuration and structured logging.

## What to do

1. **Implement the solver** — Open `src/challenges/07-validation-config-logging/index.ts` and implement `solve_07_validation_config_logging`.
2. Use `class-validator` decorators on DTOs for input validation.
3. Integrate `@nestjs/config` or structured logging in your module setup.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_07_validation_config_logging` from `src/challenges/07-validation-config-logging/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use class-validator decorators/rules in dto or payload validation; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=05-nestjs-enterprise-framework --challenge=07-validation-config-logging`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/05-nestjs-enterprise-framework/project`, run `npm run dev` after importing your exported function in `src/main.ts`
