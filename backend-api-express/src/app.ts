import express, { Request, Response } from "express";
import router from "./routes/router";
import cors from 'cors';
import {errorHandlerMiddleware} from "./middleware/error.handler.middleware";


const app = express();

app.use(cors()); // Enable CORSfor everything

app.use(express.json());// Enable JSON parsing for incoming requests

//middleware to handle errors


//all routers are here 
app.use("/api/v1",router);

app.use(errorHandlerMiddleware);

export default app;