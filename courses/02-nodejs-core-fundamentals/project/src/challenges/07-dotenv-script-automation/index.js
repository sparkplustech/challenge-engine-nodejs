import dotenv from "dotenv";

export function solve_07_dotenv_script_automation() {
  dotenv.config();

  const config = {
    appName: process.env.APP_NAME,
    port: process.env.PORT,
    environment: process.env.NODE_ENV
  };

  return config;
}