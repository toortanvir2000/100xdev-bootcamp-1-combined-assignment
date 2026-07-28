import express from "express";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();
app.use(express.json());

// routes
import authenticationRouter from "./routes/authentication.routes.js";
import householdRouter from "./routes/households.routes.js";
import itemsRouter from "./routes/items.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";

// routes declaration
app.use("/api/auth", authenticationRouter);
app.use("/api/households", householdRouter);
app.use("/api/items", itemsRouter);
app.use("/api/dashboard", dashboardRouter);

app.use(errorHandler);

export default app;
