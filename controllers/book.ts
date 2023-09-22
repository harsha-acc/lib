import { Request, Response } from "express"
import { Book } from "../models/book"
import { v4 as uuidv4 } from 'uuid';

const createBook = async (req: Request, res: Response) => {
    req.body.bID = 'BOOK' + uuidv4();
    const newBook= new Book(req.body)
    console.log(newBook);
    newBook.save().then(() => {
        res.json({ message: "Book Created successfully" })
    }).catch((err) => {
        res.json({ message: err })
    })
}

const readBook =  async(req: Request,res: Response)=>{
    console.log('hi')
    var books = await Book.find({})
    res.json(books)
}

const deleteBook = async (req: Request, res: Response) => {
    const bookID = req.params.bID;

    try {
        const deletedBook = await Book.deleteOne({bID:bookID});
        if (deletedBook.deletedCount === 1){
            res.json({message: "Book deleted Successfully",deletedBook});
        } else {
            res.status(404).json({message:"Book not found"});
        }
    }catch(error) {
        res.status(500).json({message: "Internal server error",error})
    }
}

export {createBook, readBook, deleteBook}