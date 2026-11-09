# Challenge 01: Nest Modules Controllers Services

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** beginner | **Estimated time:** 3 hours

## Goal

Practice the three core NestJS building blocks by creating a module, a controller, and an injectable service, then connecting them so the controller can use the service.

## What to do

1. **Implement the solver** — Open `src/challenges/01-nest-modules-controllers-services/index.ts` and implement `solve_01_nest_modules_controllers_services`.
2. Define a Nest module (`@Module`), controller (`@Controller`), and injectable service (`@Injectable`).
3. Wire providers and controllers together in the module metadata.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_01_nest_modules_controllers_services` from `src/challenges/01-nest-modules-controllers-services/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; use nestjs module decorators (`@module(...)`); use nestjs controller decorators (`@controller(...)`); use nestjs di decorators (`@injectable(...)`); code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=05-nestjs-enterprise-framework --challenge=01-nest-modules-controllers-services`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/05-nestjs-enterprise-framework/project`, run `npm run dev` after importing your exported function in `src/main.ts`
