import express, { Response,Request } from "express";
import ping from "./ping.route";
import signup from "./auth/signup.route";
import login from "./auth/login.route";

const router = express.Router();


router.use(ping);

//signup route
router.use(signup);

//login route
router.use(login);

export default router;