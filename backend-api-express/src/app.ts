import express, { Request, Response } from "express";
import router from "./routes/router";

const app = express();


app.use(router);

export default app;