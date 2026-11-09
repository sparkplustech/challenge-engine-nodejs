# Challenge 08: Mongoose Schema Model Validation

**Work on this challenge only.** After you finish and run review, move on to the next challenge. You don't need to read other challenge READMEs yet.

**Difficulty:** intermediate | **Estimated time:** 4 hours

## Goal

Practice modelling MongoDB data with Mongoose by defining a schema with validation rules and exporting a model that enforces those rules.

## What to do

1. **Implement the solver** — Open `src/challenges/08-mongoose-schema-model-validation/index.js` and implement `solve_08_mongoose_schema_model_validation`.
2. Define a Mongoose schema with validation rules and export a model.
3. Use `new Schema(...)` or `mongoose.model(...)` in your implementation.
4. **Clean up** — Remove all `TODO` and `throw new Error('Not implemented')` placeholders before review.

## Code

Use JavaScript. Export `solve_08_mongoose_schema_model_validation` from `src/challenges/08-mongoose-schema-model-validation/index.js`. Edit only the scoped file(s) listed in the steps above. Remove placeholder stubs (`TODO`, `throw new Error('Not implemented')`). Avoid `var` and unnecessary `console.*` where possible.

## Review

Review checks: scoped files exist and are not placeholder stubs; define mongoose schema/model structures; code quality and best practices; optional challenge unit/E2E tests when present; AI code review when enabled. Pass threshold: **≥ 80%**.

> **Note:** Missing scoped files or placeholder code scores **0%** until replaced with real implementation.

## Verify

- `npm run review:challenge -- --course=03-express-rest-api-development --challenge=08-mongoose-schema-model-validation`
- `npm run dashboard:dev` → open the dashboard and click **Run Review** for this challenge
- Optional live check: from `courses/03-express-rest-api-development/project`, run `npm run dev` after importing your exported function in `src/main.js`
