"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_1 = require("../controllers/user");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.post("/login", user_1.userLogin);
userRouter.post("/signup", user_1.userSignUp);
