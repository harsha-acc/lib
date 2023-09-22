import { Router } from "express";
import { createBook, deleteBook, readBook } from "../controllers/book";
import { Book } from "../models/book";

const bookRouter: Router = Router();
bookRouter.post("/create",createBook);
bookRouter.delete("/:bID",deleteBook);
bookRouter.get('/all', readBook);

export {bookRouter}