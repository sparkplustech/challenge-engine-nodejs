# Challenge 16: Service Discovery Basics

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** advanced | **Estimated time:** 4 hours

## Goal

Practice letting services find each other at runtime by modelling a service registry or discovery helper that resolves endpoints dynamically.

## What to do

1. **Implement the solver** — Open `src/challenges/16-service-discovery-basics/index.ts` and implement `solve_16_service_discovery_basics`.
2. Represent service registry or discovery integration (Consul, etcd, or abstract registry).
3. Export helpers that resolve service endpoints dynamically.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_16_service_discovery_basics` from `src/challenges/16-service-discovery-basics/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; represent service discovery/registry integration behavior; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=05-nestjs-enterprise-framework --challenge=16-service-discovery-basics`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/05-nestjs-enterprise-framework/project`, run `npm run dev` after importing your exported function in `src/main.ts`
