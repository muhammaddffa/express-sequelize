import express from "express";
import { userInfo } from "../controllers/UserController.js";
import { VerifyToken }from "../controllers/authController.js";


const router = express.Router();

router.get('/userinfo', VerifyToken, userInfo);

export default router;
