# Challenge 18: Static Files and Template Engines

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 3 hours

## Goal

Practice serving more than JSON by using `express.static` for static assets and configuring a view engine (such as EJS) to render templates.

## What to do

1. **Implement the solver** — Open `src/challenges/18-static-files-template-engines/index.js` and implement `solve_18_static_files_template_engines`.
2. Serve static assets with `express.static(...)` and configure a view engine (`app.set("view engine", ...)`).
3. Export an Express app that serves static files and renders templates.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_18_static_files_template_engines` from `src/challenges/18-static-files-template-engines/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; serve static assets with `express.static(...)`; configure a template engine (`app.set("view engine", ...)`); code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=18-static-files-template-engines`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
