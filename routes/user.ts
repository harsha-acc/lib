import { Router } from "express";
import { userLogin } from "../controller/user";

const userRouter = Router();
userRouter.post("/login",userLogin);

export {userRouter}