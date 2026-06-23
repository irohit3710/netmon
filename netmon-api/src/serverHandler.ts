import type { Server } from "node:http";

import app from "./server";
import { env } from "./config/env";
import { connectMongo, disconnectMongo } from "./config/mongo";

let server: Server | null = null;

const shutdown = async (signal: NodeJS.Signals): Promise<void> => {
  console.log(`${signal} received. Shutting down server...`);

  if (server) {
    await new Promise<void>((resolve, reject) => {
      server?.close((error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve();
      });
    });
  }

  await disconnectMongo();
  process.exit(0);
};

export const startServer = async (): Promise<void> => {
  await connectMongo();

  server = app.listen(env.port, () => {
    console.log(`Server is running on port ${env.port}`);
  });

  process.on("SIGINT", () => {
    void shutdown("SIGINT");
  });

  process.on("SIGTERM", () => {
    void shutdown("SIGTERM");
  });
};
