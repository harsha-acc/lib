import { Router } from "express";
import { libraryAll, libraryLogin, librarySignUp } from "../controllers/library";

const libraryRouter: Router = Router();
libraryRouter.post("/login", libraryLogin);
libraryRouter.post("/signup", librarySignUp);
libraryRouter.get('/all', libraryAll)

export { libraryRouter }
