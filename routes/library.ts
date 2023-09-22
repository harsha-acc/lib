import { Router } from "express";
import { libraryLogin, librarySignUp } from "../controllers/library";

const libraryRouter: Router = Router();
libraryRouter.post("/login", libraryLogin);
libraryRouter.post("/signup", librarySignUp);

export { libraryRouter }
