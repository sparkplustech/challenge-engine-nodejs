# Challenge 06: Semver Lockfile Policy

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** beginner | **Estimated time:** 2 hours

## Goal

Practice applying semantic-versioning rules by comparing version ranges or lockfile policies and returning a clear decision about which versions are allowed.

## What to do

1. **Implement the solver** — Open `src/challenges/06-semver-lockfile-policy/index.js` and implement `solve_06_semver_lockfile_policy`.
2. Implement semver comparison or lockfile policy logic (version ranges, pinning, or upgrade rules).
3. Return a clear result from the exported function (for example allowed versions or policy outcome).
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_06_semver_lockfile_policy` from `src/challenges/06-semver-lockfile-policy/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; application of semver, package-lock; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=02-nodejs-core-fundamentals --challenge=06-semver-lockfile-policy`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/02-nodejs-core-fundamentals/project`, run `npm run dev` after importing your exported function in `src/main.js`
