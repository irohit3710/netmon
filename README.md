# Project Title: Network Monitor

=> Description:

Network Monitor is a TypeScript and Node.js based backend application designed as the foundation for monitoring the health and availability of network services and application infrastructure.

The application provides a RESTful API architecture with service health monitoring, MongoDB database integration, environment based configuration, and controlled server lifecycle management. The project is structured to support the addition of monitoring services, authentication, network metrics, alerts, and infrastructure monitoring capabilities.

=> Functionality:

Health Monitoring:

The application provides a dedicated health check endpoint that verifies whether the Network Monitor API is running and returns the current server status along with a timestamp.

REST API:

The backend is built using Express.js and provides a structured REST API architecture that can be extended with additional monitoring and management endpoints.

Database Connectivity:

MongoDB is integrated using Mongoose to provide persistent data storage for monitoring related information and future network monitoring records.

Environment Configuration:

Environment variables are used to configure application settings such as the server port and MongoDB connection details, allowing the application to run across different environments.

Server Lifecycle Management:

The application manages server startup and shutdown processes and gracefully closes the HTTP server and MongoDB connection when termination signals are received.

Modular Architecture:

The project follows a modular structure with separate configuration, routing, server, and application initialization components, making the backend easier to maintain and extend.

=> Implementation:

The Network Monitor is implemented using TypeScript, Node.js, Express.js, and MongoDB.

Express.js:

Express.js is used to create the HTTP server and implement RESTful API endpoints.

TypeScript:

TypeScript provides static typing and structured development for the backend application.

MongoDB:

MongoDB is used as the database layer for storing monitoring and application related data.

Mongoose:

Mongoose provides the MongoDB connection and object modeling layer for interacting with the database.

Health Check API:

A health endpoint is implemented to verify API availability and return the current server status.

Graceful Shutdown:

The application handles SIGINT and SIGTERM signals to safely close the running HTTP server and database connection before terminating.

=> Project Structure:

netmon-api/
│
├── src/
│   ├── config/
│   │   ├── env.ts
│   │   └── mongo.ts
│   │
│   ├── router/
│   │   ├── Auth/
│   │   │   └── index.router.ts
│   │   └── version.router.ts
│   │
│   ├── index.ts
│   ├── server.ts
│   └── serverHandler.ts
│
├── .env.example
├── package.json
├── package-lock.json
└── tsconfig.json

=> API Endpoint:

Health Check:

GET /health

The endpoint returns the current API status and server timestamp.

Example response:

{
    "success": true,
    "message": "Netmon API is running",
    "timestamp": "2026-10-05T15:00:00.000Z"
}

=> Technologies Used:

TypeScript

Node.js

Express.js

MongoDB

Mongoose

REST API

dotenv

npm

=> Requirements:

Node.js

npm

MongoDB

TypeScript

=> Installation:

Clone the repository and navigate to the API directory.

npm install

Create an environment configuration file using the provided example.

cp .env.example .env

Configure the MongoDB connection and server settings in the .env file.

=> Development:

Start the development server using:

npm run dev

The application uses TSX watch mode to automatically restart the server when source files are modified.

=> Build:

Create a production build using:

npm run build

The compiled application is generated in the dist directory.

=> Production:

Start the compiled application using:

npm start

=> Future Improvements:

Network device monitoring can be added to periodically check device availability and connectivity.

CPU, memory, bandwidth, latency, and packet loss metrics can be collected and stored for analysis.

Real time monitoring dashboards can be added to visualize infrastructure health.

Alert and notification systems can be implemented for detecting service failures and abnormal network conditions.

Authentication and authorization can be expanded to support secure monitoring access.

Scheduled monitoring jobs can be introduced for continuous health checks.

Historical monitoring data can be analyzed to identify performance trends and potential infrastructure issues.

=> Learning Outcomes:

The project demonstrates the development of a modular backend using TypeScript and Express.js.

It provides practical experience with REST API development, MongoDB connectivity, environment based configuration, server lifecycle management, and scalable backend architecture.

The project also establishes a foundation for developing a complete network monitoring platform capable of collecting infrastructure health metrics and detecting service availability issues.
