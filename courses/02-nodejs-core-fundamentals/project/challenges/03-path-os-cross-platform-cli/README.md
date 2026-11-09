# Challenge 03: Path OS Cross Platform CLI

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 3 hours

## Goal

Practice building cross-platform command-line helpers by using Node's `path` and `os` modules to create and inspect file paths and system information.

## What to do

1. **Implement the solver** — Open `src/challenges/03-path-os-cross-platform-cli/index.js` and implement `solve_03_path_os_cross_platform_cli`.
2. Import and use `path` and `os` to build cross-platform path helpers or system metadata.
3. Return normalized paths or platform info from the exported function.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_03_path_os_cross_platform_cli` from `src/challenges/03-path-os-cross-platform-cli/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; import and use node `path`/`node:path`; import and use node `os`/`node:os`; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=02-nodejs-core-fundamentals --challenge=03-path-os-cross-platform-cli`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/02-nodejs-core-fundamentals/project`, run `npm run dev` after importing your exported function in `src/main.js`
