import { Router } from "express";
import { getUser } from "../controllers/userController.js";
import { verifyUser } from "../middleware/verifyUser.js";

const userRouter = Router();

userRouter.get("/me", verifyUser, getUser); 

export default userRouter;
