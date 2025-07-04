import express, { Request, Response } from "express";

const router = express.Router();

router.get("/ping", (req: Request, res: Response) => {
    res.send({status: "running"}),200;
})
export default router;