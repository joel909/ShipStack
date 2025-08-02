import express, { Response,Request } from "express";
import serverlogin from "./serverRoutes/server.login.route";

const serverRouter = express.Router();

//route for server login which then returns a session and API key  in success response
serverRouter.use(serverlogin);



export default serverRouter;