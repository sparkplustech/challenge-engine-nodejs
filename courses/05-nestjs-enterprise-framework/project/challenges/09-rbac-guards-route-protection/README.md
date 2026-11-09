# Challenge 09: RBAC Guards Route Protection

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Practice controlling who can call which route by attaching role metadata to handlers and enforcing it with a role-aware guard.

## What to do

1. **Implement the solver** — Open `src/challenges/09-rbac-guards-route-protection/index.ts` and implement `solve_09_rbac_guards_route_protection`.
2. Define role metadata with `@Roles` or `SetMetadata("roles", ...)`.
3. Protect routes with guards that enforce role-based access control.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_09_rbac_guards_route_protection` from `src/challenges/09-rbac-guards-route-protection/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; implement route protection with guards (`@useguards` / `canactivate`); implement role metadata/decorator-based authorization; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=05-nestjs-enterprise-framework --challenge=09-rbac-guards-route-protection`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/05-nestjs-enterprise-framework/project`, run `npm run dev` after importing your exported function in `src/main.ts`
