import express, { Request, Response } from "express";
import  AuthController from "../../controllers/auth.controller";
const router = express.Router();

router.post("/auth/login/email", async (req: Request, res: Response) => {
    console.log("Received login request:", req.query);
    const { email, password } = req.body;
    const requestLogin =  await AuthController.loginWithEmailIdPassword(email as string, password as string);
    res.status(requestLogin.code).send({
        message: requestLogin.message,
        data: requestLogin.data,
        success: requestLogin.success
})});

export default router;
