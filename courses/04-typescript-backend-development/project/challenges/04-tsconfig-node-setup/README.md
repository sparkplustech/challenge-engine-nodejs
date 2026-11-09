# Challenge 04: TSConfig Node Setup

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** beginner | **Estimated time:** 2 hours

## Goal

Practice configuring TypeScript for a Node.js project by explaining and demonstrating the important `compilerOptions` in a `tsconfig.json`.

## What to do

1. **Implement the solver** — Open `src/challenges/04-tsconfig-node-setup/index.ts` and implement `solve_04_tsconfig_node_setup`.
2. Demonstrate `compilerOptions`-based TypeScript configuration for a Node project.
3. Export configuration helpers or typed entry logic from the scoped file.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use TypeScript. Export `solve_04_tsconfig_node_setup` from `src/challenges/04-tsconfig-node-setup/index.ts`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; demonstrate `compileroptions`-based typescript configuration behavior; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=04-typescript-backend-development --challenge=04-tsconfig-node-setup`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/04-typescript-backend-development/project`, run `npm run dev` after importing your exported function in `src/main.ts`
