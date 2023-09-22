import { Router } from "express";
import { catalogCreate, catalogDelete } from "../controllers/catalog";

const catalogRouter: Router = Router();
catalogRouter.post("/create", catalogCreate);
catalogRouter.delete("/:cID", catalogDelete);

export { catalogRouter }
