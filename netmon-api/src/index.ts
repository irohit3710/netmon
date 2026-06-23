import { startServer } from "./serverHandler";

const bootstrap = async (): Promise<void> => {
  try {
    await startServer();
  } catch (error) {
    console.error("Failed to start Netmon API", error);
    process.exit(1);
  }
};

void bootstrap();
