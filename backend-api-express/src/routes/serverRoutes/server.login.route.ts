import express, { Request, Response } from "express";
import ServerAuthController from "../../server-modules/auth.controller";
const serverRouter = express.Router();

serverRouter.post("/auth/login", async (req: Request, res: Response) => {
    console.log("Received login request:", req.query);
    const { email, password } = req.body;
    const requestServerLogin =  await ServerAuthController.ServerloginWithEmailIdPassword(email as string, password as string);
    console.log("Server login response:", requestServerLogin);
    res.status(requestServerLogin.code).send({
        message: requestServerLogin.message,
        data: requestServerLogin.data,
        success: requestServerLogin.success
    });
});

export default serverRouter;
