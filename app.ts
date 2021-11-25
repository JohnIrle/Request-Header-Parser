import express from "express";
import routes from "./routes/index";

const app = express();

app.use("/", routes);

export { app };
