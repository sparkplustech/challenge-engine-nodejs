# Challenge 13: gRPC REST Interservice Bridge

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** advanced | **Estimated time:** 5 hours

## Goal

Practice connecting two services that speak different protocols by adding gRPC handlers or a `ClientGrpc` client and bridging them to REST-style endpoints.

## What to do

1. **Implement the solver** — Open `src/challenges/13-grpc-rest-interservice-bridge/index.ts` and implement `solve_13_grpc_rest_interservice_bridge`.
2. Define gRPC handlers (`@GrpcMethod`) or `ClientGrpc` client integration points.
3. Bridge REST and gRPC communication between services in your code.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_13_grpc_rest_interservice_bridge` from `src/challenges/13-grpc-rest-interservice-bridge/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; implement grpc handler/client integration points; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=05-nestjs-enterprise-framework --challenge=13-grpc-rest-interservice-bridge`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/05-nestjs-enterprise-framework/project`, run `npm run dev` after importing your exported function in `src/main.ts`
