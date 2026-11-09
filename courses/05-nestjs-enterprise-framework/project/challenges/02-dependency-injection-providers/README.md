# Challenge 02: Dependency Injection Providers

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** beginner | **Estimated time:** 3 hours

## Goal

Practice NestJS dependency injection by creating providers and injecting them into controllers or services through their constructors.

## What to do

1. **Implement the solver** — Open `src/challenges/02-dependency-injection-providers/index.ts` and implement `solve_02_dependency_injection_providers`.
2. Create injectable providers and inject them into controllers or services via constructor DI.
3. Use `@Injectable()` on classes that participate in Nest DI.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_02_dependency_injection_providers` from `src/challenges/02-dependency-injection-providers/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use nestjs di decorators (`@injectable(...)`); code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=05-nestjs-enterprise-framework --challenge=02-dependency-injection-providers`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/05-nestjs-enterprise-framework/project`, run `npm run dev` after importing your exported function in `src/main.ts`
