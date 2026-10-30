# Challenge 05: Package JSON Governance

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** beginner | **Estimated time:** 2 hours

## Goal

Represent or validate `package.json` governance: dependencies, devDependencies, and npm `scripts`.

## What to do

1. **Implement the solver** — Open `src/challenges/05-package-json-governance/index.js` and implement `solve_05_package_json_governance`.
2. Represent or validate `package.json` structure: dependencies, devDependencies, and npm `scripts`.
3. Show how script automation is defined or consumed in your implementation.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.
5. **Package Format** - const \<package_name\> = \` { <Package Details Here> } \`

## Code

Use JavaScript. Export `solve_05_package_json_governance` from `src/challenges/05-package-json-governance/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; define/consume script automation through a `scripts` section in package config; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=02-nodejs-core-fundamentals --challenge=05-package-json-governance`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/02-nodejs-core-fundamentals/project`, run `npm run dev` after importing your exported function in `src/main.js`
