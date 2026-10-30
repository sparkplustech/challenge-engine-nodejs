/**
 * Per-challenge learner goals and task steps for README generation.
 * Keys match challenge ids from course-config.json.
 */
export const CHALLENGE_GOALS = {
  '01-es6-syntax-foundations':
    'Build an ES6 syntax foundation: use `const`/`let`, destructuring, arrow functions, and spread/rest to transform a list of numbers in an exported solver function.',
  '02-template-literal-string-lab':
    'Create formatted strings with template literals instead of concatenation, returning labeled output from an exported solver function.',
  '03-array-methods-data-pipeline':
    'Process a dataset through a `.map()` → `.filter()` → `.reduce()` pipeline and return the aggregated result.',
  '04-oop-inheritance-refactor':
    'Model inheritance with `class` and `extends`, demonstrating subclass behavior inside an exported solver function.',
  '05-module-system-conversion':
    'Convert module usage to ES module `import`/`export` syntax in a scoped challenge file with an exported solver.',
  '06-callback-hell-rescue':
    'Coordinate async steps with callbacks and propagate errors through callback-based control flow.',
  '07-promises-chain-rejection-handling':
    'Chain Promises for sequential async work and handle failures with `.catch()`.',
  '08-async-await-event-loop-diagnostics':
    'Use `async`/`await`, `try/catch`, and `setTimeout` to demonstrate event-loop execution order.',
  '01-runtime-event-loop-visualizer':
    'Visualize event-loop ordering by combining `setTimeout` and Promise scheduling in an exported solver.',
  '02-fs-stream-buffer-operations':
    'Perform file I/O with Node `fs` streams (`pipeline`, read/write streams) instead of loading whole files into memory.',
  '03-path-os-cross-platform-cli':
    'Build cross-platform path helpers and system metadata using Node `path` and `os` modules.',
  '04-process-worker-lifecycle':
    'Demonstrate process lifecycle control with `process.env`/`process.argv` and child-process APIs.',
  '05-package-json-governance':
    'Represent or validate `package.json` governance: dependencies, devDependencies, and npm `scripts`.',
  '06-semver-lockfile-policy':
    'Implement semver comparison or lockfile policy rules and return a clear policy outcome.',
  '07-dotenv-script-automation':
    'Load environment variables with `dotenv.config()` and wire `process.env` into application config.',
  '08-native-http-routing-core':
    'Build a native HTTP server with `http.createServer` and basic path-based routing.',
  '09-query-headers-status-contract':
    'Parse URLs with the `URL` class, read query params, and return explicit headers and status codes.',
  '10-stream-based-transfer-service':
    'Transfer data with stream pipelines for efficient large-file handling.',
  '11-operational-vs-programmer-errors':
    'Classify operational vs programmer errors and handle recoverable failures with `try/catch`.',
  '12-debug-and-log-observability':
    'Add structured logging (`console.info`/`warn`/`error` or a logger) for debug and observability.',
  '13-environment-specific-configuration':
    'Branch configuration by environment using `dotenv` and `process.env`.',
  '14-utility-libraries-and-package-publishing':
    'Demonstrate utility-library patterns or package publishing conventions in a reusable module.',
  '15-graceful-shutdown-signal-handling':
    'Handle `SIGINT`/`SIGTERM` and implement graceful shutdown (for example `server.close()`).',
  '01-express-app-bootstrap':
    'Bootstrap an Express app with `express()` and export the configured application.',
  '02-routing-params-query-handlers':
    'Define Express routes with route params and query handlers using `express.Router()`.',
  '03-middleware-request-lifecycle':
    'Implement custom middleware that calls `next()` and participates in the request lifecycle.',
  '04-rest-resource-design':
    'Design RESTful resource routes (collection + item) with consistent URL and verb mapping.',
  '05-http-method-status-formatting':
    'Map HTTP methods to handlers with explicit `res.status(...)` codes and formatted JSON responses.',
  '06-versioning-cors-content-negotiation':
    'Configure CORS, API versioning, and content negotiation (`Accept` headers) on an Express app.',
  '07-postgres-pool-parameterized-queries':
    'Query PostgreSQL with a connection pool and parameterized SQL (`$1`, `$2`, ...).',
  '08-mongoose-schema-model-validation':
    'Define a Mongoose schema with validation and export a model.',
  '09-sql-vs-nosql-design-review':
    'Model SQL vs NoSQL trade-offs and return structured design recommendations.',
  '10-transaction-acid-n-plus-one-fix':
    'Use database transactions and fix an N+1 query pattern with batched or joined queries.',
  '11-jwt-refresh-token-auth':
    'Implement JWT sign/verify flows with access and refresh token handling.',
  '12-bcrypt-session-cookie-security':
    'Hash passwords with bcrypt and configure secure session/cookie options.',
  '13-oauth-validation-sanitization':
    'Validate and sanitize input (Joi/Zod) and include OAuth2-style flow patterns.',
  '14-rate-limiting-ddos-protection':
    'Protect routes with rate-limiting middleware to reduce abuse and DDoS risk.',
  '15-openapi-contract-documentation':
    'Document API contracts with OpenAPI/Swagger artifacts and route metadata.',
  '16-jest-unit-integration-tests':
    'Write Jest unit or integration tests with `describe` and `it` blocks.',
  '17-coverage-mocking-versioned-api-tests':
    'Test versioned HTTP routes with Supertest, mocks, and coverage-oriented cases.',
  '18-static-files-template-engines':
    'Serve static files with `express.static` and configure a template view engine.',
  '19-https-tls-api-hardening':
    'Create an HTTPS server with TLS hardening using `https.createServer`.',
  '20-health-readiness-endpoints':
    'Expose `/health` or `/ready` endpoints that report service status.',
  '21-pagination-sorting-filter-contract':
    'Implement pagination, sorting, and filtering from `req.query` in list responses.',
  '01-express-ts-migration-workflow':
    'Migrate Express workflow to TypeScript with `ts-node` and `nodemon` scripts in `package.json`.',
  '02-interfaces-types-unions':
    'Use interfaces, type aliases, enums, tuples, and unions in a typed solver function.',
  '03-generics-guards-utility-types':
    'Write generics, a type guard, and utility types (`Partial`, `Pick`, etc.) in TypeScript.',
  '04-tsconfig-node-setup':
    'Demonstrate Node-oriented `tsconfig` `compilerOptions` in a typed challenge solution.',
  '05-typed-express-request-response':
    'Type Express handlers with `Request`, `Response`, and `NextFunction`.',
  '06-path-mapping-custom-types':
    'Use path alias imports (`@/...`) and custom type definitions in TypeScript.',
  '07-typed-primitives-functions':
    'Add explicit TypeScript annotations to primitives, arrays, objects, and function signatures.',
  '08-environment-schema-validation':
    'Validate `process.env` with a schema (Zod/Joi) and fail fast on invalid config.',
  '01-nest-modules-controllers-services':
    'Define a Nest module, controller, and injectable service wired together.',
  '02-dependency-injection-providers':
    'Implement Nest providers and constructor-based dependency injection.',
  '03-middleware-guards-interceptors-pipes':
    'Implement Nest guards and pipes in the request pipeline.',
  '04-exception-filter-error-handling':
    'Map exceptions to HTTP responses with a Nest exception filter.',
  '05-custom-decorators-metadata-reflection':
    'Create custom decorators and read metadata with reflection.',
  '06-typeorm-prisma-repository-pattern':
    'Implement repository-pattern data access with TypeORM or Prisma.',
  '07-validation-config-logging':
    'Validate DTOs with `class-validator` and integrate config/logging in Nest.',
  '08-passport-local-jwt-strategies':
    'Implement Passport local and JWT strategies with `AuthGuard`.',
  '09-rbac-guards-route-protection':
    'Enforce RBAC with role metadata and route guards.',
  '10-refresh-token-api-key-auth':
    'Handle refresh token rotation and API key authentication with JWT utilities.',
  '11-microservices-architecture-patterns':
    'Organize Nest modules for microservice boundaries and communication.',
  '12-rabbitmq-redis-event-driven-flow':
    'Model event-driven flows with message queues or event patterns.',
  '13-grpc-rest-interservice-bridge':
    'Bridge REST and gRPC inter-service communication in Nest handlers.',
  '14-unit-e2e-mocking-strategy':
    'Write Nest unit and E2E tests with Jest, Supertest, and mocks.',
  '15-coverage-reporting-tdd-cycle':
    'Structure tests for coverage reporting and a TDD red/green cycle.',
  '16-service-discovery-basics':
    'Represent service discovery or registry patterns for dynamic endpoints.',
  '17-request-id-logging-interceptor':
    'Propagate request/correlation IDs through an interceptor and structured logs.'
};

export const CHALLENGE_TASK_STEPS = {
  '01-es6-syntax-foundations': [
    '**Implement the solver** — Open `src/challenges/01-es6-syntax-foundations/index.js` and implement `solve_01_es6_syntax_foundations`.',
    'Use `const`/`let`, array destructuring, an arrow function, and spread/rest to process a list of numbers.',
    'Return a meaningful result object (for example original values and a transformed array).',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '02-template-literal-string-lab': [
    '**Implement the solver** — Open `src/challenges/02-template-literal-string-lab/index.js` and implement `solve_02_template_literal_string_lab`.',
    'Build formatted strings with template literals (labels, summaries, or multi-line messages) instead of concatenation.',
    'Return the formatted string output from your exported function.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '03-array-methods-data-pipeline': [
    '**Implement the solver** — Open `src/challenges/03-array-methods-data-pipeline/index.js` and implement `solve_03_array_methods_data_pipeline`.',
    'Chain `.map()`, `.filter()`, and `.reduce()` to transform and aggregate a dataset.',
    'Return the final pipeline result from the exported function.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '04-oop-inheritance-refactor': [
    '**Implement the solver** — Open `src/challenges/04-oop-inheritance-refactor/index.js` and implement `solve_04_oop_inheritance_refactor`.',
    'Define a base class and a subclass with `class` and `extends`, overriding or extending behavior.',
    'Use the class hierarchy inside your exported function to demonstrate inheritance.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '05-module-system-conversion': [
    '**Implement the solver** — Open `src/challenges/05-module-system-conversion/index.js` and implement `solve_05_module_system_conversion`.',
    'Use ES module `import` and `export` syntax (not CommonJS `require`/`module.exports`).',
    'Export `solve_05_module_system_conversion` as the main entry function.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '06-callback-hell-rescue': [
    '**Implement the solver** — Open `src/challenges/06-callback-hell-rescue/index.js` and implement `solve_06_callback_hell_rescue`.',
    'Coordinate async steps using callback functions (nested or sequential callback flow).',
    'Propagate errors through the callback chain where appropriate.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '07-promises-chain-rejection-handling': [
    '**Implement the solver** — Open `src/challenges/07-promises-chain-rejection-handling/index.js` and implement `solve_07_promises_chain_rejection_handling`.',
    'Use `Promise` chaining (`.then`) for sequential async work.',
    'Handle rejections with `.catch()` so failures are recovered or reported.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '08-async-await-event-loop-diagnostics': [
    '**Implement the solver** — Open `src/challenges/08-async-await-event-loop-diagnostics/index.js` and implement `solve_08_async_await_event_loop_diagnostics`.',
    'Use `async`/`await`, `try/catch`, and `setTimeout` to model event-loop scheduling.',
    'Return diagnostics that show execution order (sync vs microtask vs macrotask).',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '01-runtime-event-loop-visualizer': [
    '**Implement the solver** — Open `src/challenges/01-runtime-event-loop-visualizer/index.js` and implement `solve_01_runtime_event_loop_visualizer`.',
    'Combine `setTimeout` and Promise usage to illustrate event-loop phase ordering.',
    'Return or log an ordered list of execution steps from your exported function.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '02-fs-stream-buffer-operations': [
    '**Implement the solver** — Open `src/challenges/02-fs-stream-buffer-operations/index.js` and implement `solve_02_fs_stream_buffer_operations`.',
    'Import Node `fs` and use streams (`createReadStream`, `createWriteStream`, or `pipeline`) for file I/O.',
    'Perform a real stream-based read, write, or transform operation in your solution.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '03-path-os-cross-platform-cli': [
    '**Implement the solver** — Open `src/challenges/03-path-os-cross-platform-cli/index.js` and implement `solve_03_path_os_cross_platform_cli`.',
    'Import and use `path` and `os` to build cross-platform path helpers or system metadata.',
    'Return normalized paths or platform info from the exported function.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '04-process-worker-lifecycle': [
    '**Implement the solver** — Open `src/challenges/04-process-worker-lifecycle/index.js` and implement `solve_04_process_worker_lifecycle`.',
    'Read `process.env` or `process.argv` and use child-process APIs (`spawn`, `fork`, or `execFile`).',
    'Demonstrate process lifecycle control (start, signal, or exit handling) in your code.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '05-package-json-governance': [
    '**Implement the solver** — Open `src/challenges/05-package-json-governance/index.js` and implement `solve_05_package_json_governance`.',
    'Represent or validate `package.json` structure: dependencies, devDependencies, and npm `scripts`.',
    'Show how script automation is defined or consumed in your implementation.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '06-semver-lockfile-policy': [
    '**Implement the solver** — Open `src/challenges/06-semver-lockfile-policy/index.js` and implement `solve_06_semver_lockfile_policy`.',
    'Implement semver comparison or lockfile policy logic (version ranges, pinning, or upgrade rules).',
    'Return a clear result from the exported function (for example allowed versions or policy outcome).',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '07-dotenv-script-automation': [
    '**Implement the solver** — Open `src/challenges/07-dotenv-script-automation/index.js` and implement `solve_07_dotenv_script_automation`.',
    'Call `dotenv.config()` and read configuration values from `process.env`.',
    'Wire env-driven settings into the object or behavior returned by your exported function.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '08-native-http-routing-core': [
    '**Implement the solver** — Open `src/challenges/08-native-http-routing-core/index.js` and implement `solve_08_native_http_routing_core`.',
    'Create an HTTP server with `http.createServer` and implement basic path-based routing.',
    'Return a server factory, router map, or handler from the exported function.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '09-query-headers-status-contract': [
    '**Implement the solver** — Open `src/challenges/09-query-headers-status-contract/index.js` and implement `solve_09_query_headers_status_contract`.',
    'Parse URLs with the `URL` class, read query parameters, and set response headers and status codes.',
    'Return or demonstrate the query/header/status contract from the exported function.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '10-stream-based-transfer-service': [
    '**Implement the solver** — Open `src/challenges/10-stream-based-transfer-service/index.js` and implement `solve_10_stream_based_transfer_service`.',
    'Use stream pipelines to transfer or copy data without loading entire files into memory.',
    'Export a transfer service API (function or factory) from the scoped file.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '11-operational-vs-programmer-errors': [
    '**Implement the solver** — Open `src/challenges/11-operational-vs-programmer-errors/index.js` and implement `solve_11_operational_vs_programmer_errors`.',
    'Classify errors as operational vs programmer and handle each type differently.',
    'Use `try/catch` for recoverable operational failures in your exported function.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '12-debug-and-log-observability': [
    '**Implement the solver** — Open `src/challenges/12-debug-and-log-observability/index.js` and implement `solve_12_debug_and_log_observability`.',
    'Use structured logging (`console.info`/`warn`/`error` or a logger object) for observability.',
    'Integrate logging into the flow returned or demonstrated by your exported function.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '13-environment-specific-configuration': [
    '**Implement the solver** — Open `src/challenges/13-environment-specific-configuration/index.js` and implement `solve_13_environment_specific_configuration`.',
    'Load env config with `dotenv.config()` and branch behavior using `process.env`.',
    'Return environment-specific settings (development vs production) from the exported function.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '14-utility-libraries-and-package-publishing': [
    '**Implement the solver** — Open `src/challenges/14-utility-libraries-and-package-publishing/index.js` and implement `solve_14_utility_libraries_and_package_publishing`.',
    'Demonstrate utility library usage (for example lodash/dayjs patterns) or package publishing conventions.',
    'Export a reusable helper or module surface from the scoped file.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '15-graceful-shutdown-signal-handling': [
    '**Implement the solver** — Open `src/challenges/15-graceful-shutdown-signal-handling/index.js` and implement `solve_15_graceful_shutdown_signal_handling`.',
    'Register `SIGINT` and/or `SIGTERM` handlers with `process.on`.',
    'Implement graceful shutdown (for example `server.close()` and cleanup) in your solution.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '01-express-app-bootstrap': [
    '**Implement the solver** — Open `src/challenges/01-express-app-bootstrap/index.js` and implement `solve_01_express_app_bootstrap`.',
    'Create an Express application with `express()` and basic app configuration.',
    'Export the app or a factory from `solve_01_express_app_bootstrap`.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '02-routing-params-query-handlers': [
    '**Implement the solver** — Open `src/challenges/02-routing-params-query-handlers/index.js` and implement `solve_02_routing_params_query_handlers`.',
    'Define routes with `express.Router()` using route params (`:id`) and query string handlers.',
    'Read `req.params` and `req.query` inside route handlers.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '03-middleware-request-lifecycle': [
    '**Implement the solver** — Open `src/challenges/03-middleware-request-lifecycle/index.js` and implement `solve_03_middleware_request_lifecycle`.',
    'Write custom middleware that calls `next()` to continue the request lifecycle.',
    'Chain middleware before route handlers in your Express app setup.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '04-rest-resource-design': [
    '**Implement the solver** — Open `src/challenges/04-rest-resource-design/index.js` and implement `solve_04_rest_resource_design`.',
    'Design RESTful resource routes (collection + item) with `express.Router()`.',
    'Map HTTP verbs to resource operations in a consistent URL structure.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '05-http-method-status-formatting': [
    '**Implement the solver** — Open `src/challenges/05-http-method-status-formatting/index.js` and implement `solve_05_http_method_status_formatting`.',
    'Handle GET/POST/PUT/PATCH/DELETE with appropriate `res.status(...)` codes.',
    'Return consistently formatted JSON responses from route handlers.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '06-versioning-cors-content-negotiation': [
    '**Implement the solver** — Open `src/challenges/06-versioning-cors-content-negotiation/index.js` and implement `solve_06_versioning_cors_content_negotiation`.',
    'Apply CORS middleware or headers and support API versioning (path or header based).',
    'Respect `Accept` headers or content negotiation where applicable.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '07-postgres-pool-parameterized-queries': [
    '**Implement the solver** — Open `src/challenges/07-postgres-pool-parameterized-queries/index.js` and implement `solve_07_postgres_pool_parameterized_queries`.',
    'Use a connection pool and parameterized queries (`$1`, `$2`, ...) — never string-concatenate SQL.',
    'Export query helpers or repository functions from the scoped file.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '08-mongoose-schema-model-validation': [
    '**Implement the solver** — Open `src/challenges/08-mongoose-schema-model-validation/index.js` and implement `solve_08_mongoose_schema_model_validation`.',
    'Define a Mongoose schema with validation rules and export a model.',
    'Use `new Schema(...)` or `mongoose.model(...)` in your implementation.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '09-sql-vs-nosql-design-review': [
    '**Implement the solver** — Open `src/challenges/09-sql-vs-nosql-design-review/index.js` and implement `solve_09_sql_vs_nosql_design_review`.',
    'Model a data design decision framework comparing SQL vs NoSQL trade-offs.',
    'Return structured criteria or recommendations from the exported function.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '10-transaction-acid-n-plus-one-fix': [
    '**Implement the solver** — Open `src/challenges/10-transaction-acid-n-plus-one-fix/index.js` and implement `solve_10_transaction_acid_n_plus_one_fix`.',
    'Wrap multi-step database work in a transaction (`BEGIN`/`COMMIT`/`ROLLBACK` or a transaction API).',
    'Address an N+1 query pattern with a batched or joined query strategy.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '11-jwt-refresh-token-auth': [
    '**Implement the solver** — Open `src/challenges/11-jwt-refresh-token-auth/index.js` and implement `solve_11_jwt_refresh_token_auth`.',
    'Sign and verify JWTs with `jwt.sign` and `jwt.verify`.',
    'Model access and refresh token issuance or rotation in your auth flow.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '12-bcrypt-session-cookie-security': [
    '**Implement the solver** — Open `src/challenges/12-bcrypt-session-cookie-security/index.js` and implement `solve_12_bcrypt_session_cookie_security`.',
    'Hash and compare passwords with `bcrypt.hash` and `bcrypt.compare`.',
    'Configure secure session or cookie options in your auth helper.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '13-oauth-validation-sanitization': [
    '**Implement the solver** — Open `src/challenges/13-oauth-validation-sanitization/index.js` and implement `solve_13_oauth_validation_sanitization`.',
    'Validate and sanitize input with Joi, Zod, or an equivalent validation layer.',
    'Include OAuth2-style flow stubs or callback handling patterns in your solution.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '14-rate-limiting-ddos-protection': [
    '**Implement the solver** — Open `src/challenges/14-rate-limiting-ddos-protection/index.js` and implement `solve_14_rate_limiting_ddos_protection`.',
    'Apply rate-limiting middleware (`rateLimit(...)`) to protect routes.',
    'Export middleware or app setup that enforces request limits.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '15-openapi-contract-documentation': [
    '**Implement the solver** — Open `src/challenges/15-openapi-contract-documentation/index.js` and implement `solve_15_openapi_contract_documentation`.',
    'Include OpenAPI/Swagger contract artifacts or setup in your solution.',
    'Document at least one route with request/response schema metadata.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '16-jest-unit-integration-tests': [
    '**Implement the solver** — Open `src/challenges/16-jest-unit-integration-tests/index.js` and implement `solve_16_jest_unit_integration_tests`.',
    'Write Jest tests using `describe` and `it` blocks for unit or integration coverage.',
    'Export test suites or tested modules from the scoped file.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '17-coverage-mocking-versioned-api-tests': [
    '**Implement the solver** — Open `src/challenges/17-coverage-mocking-versioned-api-tests/index.js` and implement `solve_17_coverage_mocking_versioned_api_tests`.',
    'Use Supertest (`request(app).get/post/...)`) for HTTP route assertions.',
    'Mock dependencies and cover versioned API routes in your tests.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '18-static-files-template-engines': [
    '**Implement the solver** — Open `src/challenges/18-static-files-template-engines/index.js` and implement `solve_18_static_files_template_engines`.',
    'Serve static assets with `express.static(...)` and configure a view engine (`app.set("view engine", ...)`).',
    'Export an Express app that serves static files and renders templates.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '19-https-tls-api-hardening': [
    '**Implement the solver** — Open `src/challenges/19-https-tls-api-hardening/index.js` and implement `solve_19_https_tls_api_hardening`.',
    'Create an HTTPS server with `https.createServer` or import from `node:https`.',
    'Apply TLS-related hardening options in your server setup.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '20-health-readiness-endpoints': [
    '**Implement the solver** — Open `src/challenges/20-health-readiness-endpoints/index.js` and implement `solve_20_health_readiness_endpoints`.',
    'Expose GET `/health` or `/ready` (or `/readiness`) endpoints on your Express app.',
    'Return appropriate status codes reflecting service health.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '21-pagination-sorting-filter-contract': [
    '**Implement the solver** — Open `src/challenges/21-pagination-sorting-filter-contract/index.js` and implement `solve_21_pagination_sorting_filter_contract`.',
    'Read `page`, `limit`, `sort`, and `filter` values from `req.query`.',
    'Apply pagination, sorting, and filtering to list responses in a consistent contract.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '01-express-ts-migration-workflow': [
    '**Implement the solver** — Open `src/challenges/01-express-ts-migration-workflow/index.ts` and implement `solve_01_express_ts_migration_workflow`.',
    'Update `package.json` in the project root with `ts-node` and `nodemon` dev workflow scripts.',
    'Export typed Express migration helpers from the TypeScript entry file.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '02-interfaces-types-unions': [
    '**Implement the solver** — Open `src/challenges/02-interfaces-types-unions/index.ts` and implement `solve_02_interfaces_types_unions`.',
    'Define `interface`, `type` alias, `enum`, and tuple types in your solution.',
    'Use union or intersection types where appropriate in the exported function.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '03-generics-guards-utility-types': [
    '**Implement the solver** — Open `src/challenges/03-generics-guards-utility-types/index.ts` and implement `solve_03_generics_guards_utility_types`.',
    'Write generic functions or types with type parameters (`<T>`).',
    'Implement a type guard (`value is SomeType`) and use utility types (`Partial`, `Pick`, etc.).',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '04-tsconfig-node-setup': [
    '**Implement the solver** — Open `src/challenges/04-tsconfig-node-setup/index.ts` and implement `solve_04_tsconfig_node_setup`.',
    'Demonstrate `compilerOptions`-based TypeScript configuration for a Node project.',
    'Export configuration helpers or typed entry logic from the scoped file.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '05-typed-express-request-response': [
    '**Implement the solver** — Open `src/challenges/05-typed-express-request-response/index.ts` and implement `solve_05_typed_express_request_response`.',
    'Import and use typed Express types (`Request`, `Response`, `NextFunction`).',
    'Type route handler parameters and return values explicitly.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '06-path-mapping-custom-types': [
    '**Implement the solver** — Open `src/challenges/06-path-mapping-custom-types/index.ts` and implement `solve_06_path_mapping_custom_types`.',
    'Use a path alias import (for example `from "@/...`) in your TypeScript code.',
    'Define custom type definitions for external or shared modules.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '07-typed-primitives-functions': [
    '**Implement the solver** — Open `src/challenges/07-typed-primitives-functions/index.ts` and implement `solve_07_typed_primitives_functions`.',
    'Add explicit TypeScript type annotations to primitives, arrays, objects, and function signatures.',
    'Export the typed function with a clear return type.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '08-environment-schema-validation': [
    '**Implement the solver** — Open `src/challenges/08-environment-schema-validation/index.ts` and implement `solve_08_environment_schema_validation`.',
    'Validate `process.env` against a Zod, Joi, or equivalent schema at startup.',
    'Fail fast with clear errors when required env vars are missing or invalid.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '01-nest-modules-controllers-services': [
    '**Implement the solver** — Open `src/challenges/01-nest-modules-controllers-services/index.ts` and implement `solve_01_nest_modules_controllers_services`.',
    'Define a Nest module (`@Module`), controller (`@Controller`), and injectable service (`@Injectable`).',
    'Wire providers and controllers together in the module metadata.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '02-dependency-injection-providers': [
    '**Implement the solver** — Open `src/challenges/02-dependency-injection-providers/index.ts` and implement `solve_02_dependency_injection_providers`.',
    'Create injectable providers and inject them into controllers or services via constructor DI.',
    'Use `@Injectable()` on classes that participate in Nest DI.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '03-middleware-guards-interceptors-pipes': [
    '**Implement the solver** — Open `src/challenges/03-middleware-guards-interceptors-pipes/index.ts` and implement `solve_03_middleware_guards_interceptors_pipes`.',
    'Implement a guard (`@UseGuards` or `CanActivate`) and a pipe (`PipeTransform` or `@UsePipes`).',
    'Show how guards and pipes participate in the request pipeline.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '04-exception-filter-error-handling': [
    '**Implement the solver** — Open `src/challenges/04-exception-filter-error-handling/index.ts` and implement `solve_04_exception_filter_error_handling`.',
    'Implement an exception filter with `@Catch` or `ExceptionFilter`.',
    'Map thrown exceptions to consistent HTTP error responses.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '05-custom-decorators-metadata-reflection': [
    '**Implement the solver** — Open `src/challenges/05-custom-decorators-metadata-reflection/index.ts` and implement `solve_05_custom_decorators_metadata_reflection`.',
    'Create a custom decorator using `SetMetadata`, `createParamDecorator`, or `Reflector`.',
    'Read metadata in a guard, interceptor, or handler.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '06-typeorm-prisma-repository-pattern': [
    '**Implement the solver** — Open `src/challenges/06-typeorm-prisma-repository-pattern/index.ts` and implement `solve_06_typeorm_prisma_repository_pattern`.',
    'Implement repository-style data access (Repository class, `PrismaService`, or equivalent).',
    'Keep database logic behind a repository boundary, not in controllers.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '07-validation-config-logging': [
    '**Implement the solver** — Open `src/challenges/07-validation-config-logging/index.ts` and implement `solve_07_validation_config_logging`.',
    'Use `class-validator` decorators on DTOs for input validation.',
    'Integrate `@nestjs/config` or structured logging in your module setup.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '08-passport-local-jwt-strategies': [
    '**Implement the solver** — Open `src/challenges/08-passport-local-jwt-strategies/index.ts` and implement `solve_08_passport_local_jwt_strategies`.',
    'Implement Passport strategies (`PassportStrategy`) for local and JWT auth.',
    'Apply `AuthGuard` to protect routes in your Nest setup.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '09-rbac-guards-route-protection': [
    '**Implement the solver** — Open `src/challenges/09-rbac-guards-route-protection/index.ts` and implement `solve_09_rbac_guards_route_protection`.',
    'Define role metadata with `@Roles` or `SetMetadata("roles", ...)`.',
    'Protect routes with guards that enforce role-based access control.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '10-refresh-token-api-key-auth': [
    '**Implement the solver** — Open `src/challenges/10-refresh-token-api-key-auth/index.ts` and implement `solve_10_refresh_token_api_key_auth`.',
    'Use `jwt.sign` and `jwt.verify` for access and refresh token flows.',
    'Support API key authentication alongside or within the JWT auth model.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '11-microservices-architecture-patterns': [
    '**Implement the solver** — Open `src/challenges/11-microservices-architecture-patterns/index.ts` and implement `solve_11_microservices_architecture_patterns`.',
    'Organize Nest modules to reflect microservice boundaries and communication patterns.',
    'Export module definitions that separate service concerns.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '12-rabbitmq-redis-event-driven-flow': [
    '**Implement the solver** — Open `src/challenges/12-rabbitmq-redis-event-driven-flow/index.ts` and implement `solve_12_rabbitmq_redis_event_driven_flow`.',
    'Implement event-driven producer/consumer flow with `@EventPattern` or `emit(...)`.',
    'Model message queue or pub/sub integration in your Nest handlers.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '13-grpc-rest-interservice-bridge': [
    '**Implement the solver** — Open `src/challenges/13-grpc-rest-interservice-bridge/index.ts` and implement `solve_13_grpc_rest_interservice_bridge`.',
    'Define gRPC handlers (`@GrpcMethod`) or `ClientGrpc` client integration points.',
    'Bridge REST and gRPC communication between services in your code.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '14-unit-e2e-mocking-strategy': [
    '**Implement the solver** — Open `src/challenges/14-unit-e2e-mocking-strategy/index.ts` and implement `solve_14_unit_e2e_mocking_strategy`.',
    'Write Jest unit tests with `describe`/`it` and E2E tests with Supertest.',
    'Mock Nest dependencies in unit tests and assert HTTP routes in E2E tests.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '15-coverage-reporting-tdd-cycle': [
    '**Implement the solver** — Open `src/challenges/15-coverage-reporting-tdd-cycle/index.ts` and implement `solve_15_coverage_reporting_tdd_cycle`.',
    'Structure Jest test suites that support coverage reporting goals.',
    'Demonstrate a TDD-style red/green cycle in test and implementation code.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '16-service-discovery-basics': [
    '**Implement the solver** — Open `src/challenges/16-service-discovery-basics/index.ts` and implement `solve_16_service_discovery_basics`.',
    'Represent service registry or discovery integration (Consul, etcd, or abstract registry).',
    'Export helpers that resolve service endpoints dynamically.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ],
  '17-request-id-logging-interceptor': [
    '**Implement the solver** — Open `src/challenges/17-request-id-logging-interceptor/index.ts` and implement `solve_17_request_id_logging_interceptor`.',
    'Propagate a request/correlation ID via an interceptor or middleware.',
    'Include the request ID in structured log output for each request.',
    '**Clean up** — Remove all `TODO` and `throw new Error(\'Not implemented\')` placeholders before review.'
  ]
};
