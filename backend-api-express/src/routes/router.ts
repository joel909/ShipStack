import express, { Response,Request } from "express";
import ping from "./ping.route";
import signup from "./auth/signup.route";

const router = express.Router();


router.use(ping);

//signup route
router.use(signup);

export default router;