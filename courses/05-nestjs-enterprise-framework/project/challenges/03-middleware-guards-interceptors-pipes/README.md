# Challenge 03: Middleware Guards Interceptors Pipes

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Practice controlling a NestJS request by implementing a guard and a pipe and showing where each one runs in the request pipeline.

## What to do

1. **Implement the solver** — Open `src/challenges/03-middleware-guards-interceptors-pipes/index.ts` and implement `solve_03_middleware_guards_interceptors_pipes`.
2. Implement a guard (`@UseGuards` or `CanActivate`) and a pipe (`PipeTransform` or `@UsePipes`).
3. Show how guards and pipes participate in the request pipeline.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_03_middleware_guards_interceptors_pipes` from `src/challenges/03-middleware-guards-interceptors-pipes/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; implement route protection with guards (`@useguards` / `canactivate`); implement or apply a nest pipe (`pipetransform` / `@usepipes`); code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=05-nestjs-enterprise-framework --challenge=03-middleware-guards-interceptors-pipes`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/05-nestjs-enterprise-framework/project`, run `npm run dev` after importing your exported function in `src/main.ts`
