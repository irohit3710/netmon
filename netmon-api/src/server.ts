import express from "express";

const app = express();

app.use(express.json());

app.get("/health", (_request, response) => {
    response.status(200).json({
        success: true,
        message: "Netmon API is running",
        timestamp: new Date().toISOString(),
    });
});

export default app;
