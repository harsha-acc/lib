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
    var books = await Book.find({category:req.body.category})
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

const updateBook = async(req:Request, res:Response)=>{
    const bookID = req.body.bid;
    const bookCount = req.body.bCount;
    try{
        const bookObj = await Book.findOneAndUpdate({bID:bookID},{$set:{bCount:bookCount}});
        console.log(bookObj);
        await bookObj!.save();
        res.json({message:"Updation successful"});
    }
    catch(err){
        res.status(400).json({message:"Error",err});
    }
}

export {createBook, readBook, deleteBook,updateBook}