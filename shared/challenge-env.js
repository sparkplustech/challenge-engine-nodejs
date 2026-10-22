import { loadDotEnv } from './utils/env.js';

export const DEFAULT_CHALLENGE_ENV = Object.freeze({
  NODE_ENV: 'development',
  APP_ENV: 'development',
  APP_NAME: 'challenge-engine',
  PORT: '3000'
});

export function buildChallengeEnv(baseEnv = process.env) {
  const env = { ...baseEnv };
  delete env.NODE_TEST_CONTEXT;

  for (const [key, value] of Object.entries(DEFAULT_CHALLENGE_ENV)) {
    if (env[key] === undefined || env[key] === '') {
      env[key] = value;
    }
  }

  return env;
}

export function loadChallengeEnv(rootDir) {
  loadDotEnv(rootDir);
  return buildChallengeEnv(process.env);
}
