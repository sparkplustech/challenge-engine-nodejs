# Challenge 11: Microservices Architecture Patterns

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Practice splitting a NestJS application into services by organising modules around clear service boundaries and the messages they exchange.

## What to do

1. **Implement the solver** — Open `src/challenges/11-microservices-architecture-patterns/index.ts` and implement `solve_11_microservices_architecture_patterns`.
2. Organize Nest modules to reflect microservice boundaries and communication patterns.
3. Export module definitions that separate service concerns.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_11_microservices_architecture_patterns` from `src/challenges/11-microservices-architecture-patterns/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use nestjs module decorators (`@module(...)`); code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=05-nestjs-enterprise-framework --challenge=11-microservices-architecture-patterns`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/05-nestjs-enterprise-framework/project`, run `npm run dev` after importing your exported function in `src/main.ts`
