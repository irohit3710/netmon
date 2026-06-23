import mongoose from "mongoose";

import { env } from "./env";

export const connectMongo = async (): Promise<void> => {
  await mongoose.connect(env.mongodbUri);
  console.log("MongoDB connected successfully");
};

export const disconnectMongo = async (): Promise<void> => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
    console.log("MongoDB connection closed");
  }
};
