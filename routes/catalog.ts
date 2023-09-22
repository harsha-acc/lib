import { Router } from "express";
import { catalogCreate } from "../controllers/catalog";

const catalogRouter: Router = Router();
catalogRouter.post("/create", catalogCreate);

export { catalogRouter }
