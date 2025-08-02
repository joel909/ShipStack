import express, { Request, Response } from "express";
import router from "./routes/router";
import cors from 'cors';
import serverRouter from "./routes/server.routes";
import dotenv from 'dotenv';
import {errorHandlerMiddleware} from "./middleware/error.handler.middleware";
import cookieParser from 'cookie-parser';


const app = express();

console.log("Environment:", process.env.ENVIRONMENT,"Origins:", process.env.ORIGINs);

if(process.env.ENVIRONMENT === "development") {
    app.use(cors())
    console.log("CORS enabled for development environment");
}
else{
    app.use(cors({
        origin: process.env.ORIGINs, // 👈 exact origin
        credentials: true 
    })); // Enable CORSfor everything
    console.log("CORS enabled for production environment with origin:", process.env.ORIGINs);
}


app.use(express.json());// Enable JSON parsing for incoming requests
app.use(cookieParser());// enable cookie parsing

//middleware to handle errors


//all routers are here 
app.use("/api/v1",router);
//Server APIS
app.use("/api/server", serverRouter);

app.use(errorHandlerMiddleware);

export default app;