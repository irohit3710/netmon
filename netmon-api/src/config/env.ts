import dotenv from "dotenv";

dotenv.config();

const requiredVariables = ["MONGODB_URI"] as const;

for (const variable of requiredVariables) {
  if (!process.env[variable]) {
    throw new Error(`Missing required environment variable: ${variable}`);
  }
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: Number(process.env.PORT ?? 5000),
  mongodbUri: process.env.MONGODB_URI as string,
};
