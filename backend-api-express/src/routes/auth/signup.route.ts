import express, { Request, Response } from "express";
import { signUpNewUser } from "../../controllers/auth.controller";
const router = express.Router();

router.post("/auth/signup", async (req: Request, res: Response) => {
    console.log("Received signup request:", req.query);
    const { email, password, name } = req.body;

    const requestUserCreation =  await signUpNewUser(email as string, password as string, name as string);
    res.status(requestUserCreation.code).send({
        message: requestUserCreation.message,
        data: requestUserCreation.data,
        success: requestUserCreation.success
})});

export default router;
