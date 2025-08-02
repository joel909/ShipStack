import express, { Request, Response } from "express";
import  AuthController from "../../controllers/auth.controller";
const router = express.Router();
import CookiesController from "../../controllers/cookies.controller";

router.post("/auth/login/email", async (req: Request, res: Response) => {
    console.log("Received login request:", req.query);
    const { email, password } = req.body;
    const requestLogin =  await AuthController.loginWithEmailIdPassword(email as string, password as string);
    const SessionData = requestLogin.data.session;
    // const refreshToken = requestLogin.data.session.refresh_token;
    // const accessToken = requestLogin.data.session.access_token;
    CookiesController.setAuthCookie(req, res, JSON.stringify(SessionData));
    res.status(requestLogin.code).send({
        message: requestLogin.message,
        data: requestLogin.data,
        success: requestLogin.success
    })});

export default router;
