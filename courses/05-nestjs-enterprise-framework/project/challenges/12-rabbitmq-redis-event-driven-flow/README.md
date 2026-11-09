# Challenge 12: RabbitMQ Redis Event Driven Flow

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** advanced | **Estimated time:** 5 hours

## Goal

Practice building event-driven communication by modelling a producer/consumer flow with message-queue or pub/sub patterns in NestJS.

## What to do

1. **Implement the solver** — Open `src/challenges/12-rabbitmq-redis-event-driven-flow/index.ts` and implement `solve_12_rabbitmq_redis_event_driven_flow`.
2. Implement event-driven producer/consumer flow with `@EventPattern` or `emit(...)`.
3. Model message queue or pub/sub integration in your Nest handlers.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_12_rabbitmq_redis_event_driven_flow` from `src/challenges/12-rabbitmq-redis-event-driven-flow/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; implement event-driven producer/consumer flow (`emit`, event patterns); code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=05-nestjs-enterprise-framework --challenge=12-rabbitmq-redis-event-driven-flow`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/05-nestjs-enterprise-framework/project`, run `npm run dev` after importing your exported function in `src/main.ts`
