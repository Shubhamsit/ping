import { Router } from "express";
import { Login, LogOut, signUp } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", Login);
authRouter.get("/logout", LogOut);

export default authRouter;
