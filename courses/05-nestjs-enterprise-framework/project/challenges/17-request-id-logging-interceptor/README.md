# Challenge 17: Request ID Logging Interceptor

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 3 hours

## Goal

Practice tracing a request through a NestJS app by generating or forwarding a request ID in an interceptor and including it in structured logs.

## What to do

1. **Implement the solver** — Open `src/challenges/17-request-id-logging-interceptor/index.ts` and implement `solve_17_request_id_logging_interceptor`.
2. Propagate a request/correlation ID via an interceptor or middleware.
3. Include the request ID in structured log output for each request.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_17_request_id_logging_interceptor` from `src/challenges/17-request-id-logging-interceptor/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; propagate request/correlation id in interceptor/logging flow; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=05-nestjs-enterprise-framework --challenge=17-request-id-logging-interceptor`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/05-nestjs-enterprise-framework/project`, run `npm run dev` after importing your exported function in `src/main.ts`
