import { Router } from "express";
import { catalogCreate, catalogDelete, catalogRead } from "../controllers/catalog";

const catalogRouter: Router = Router();
catalogRouter.post("/create", catalogCreate);
catalogRouter.delete("/:cID", catalogDelete);
catalogRouter.get("/read",catalogRead);;

export { catalogRouter }
