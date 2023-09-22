import { Router } from "express";
import { createBook, deleteBook, readBook } from "../controllers/book";

const bookRouter: Router = Router();
bookRouter.post("/create",createBook);
bookRouter.delete("/:bID",deleteBook);
bookRouter.get('/all', readBook);
// bookRouter.post("/update",updateBook);

export {bookRouter}