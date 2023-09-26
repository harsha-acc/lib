import { Request, Response } from "express"
import { Library } from '../models/library'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import { Book } from "../models/book";


dotenv.config();
const SALT_ROUNDS: any = process.env.SALT_ROUNDS

const libraryLogin = async (req: Request, res: Response)=>{
    try{
        const {email,password} = req.body;
        const library = await Library.findOne({lEmail: email});
        if(library && await (bcrypt.compare(password,library.lPassword))){
            console.log("Login successful");
            const token = jwt.sign(
                { user_id: library.lID, email },
                ((process.env.TOKEN_KEY as unknown) as any),
                {
                  expiresIn: "1h",
                });
                library.lToken = token;
                await library.save();
                res.status(200).json(library);
        }
        else res.status(400).send("Invalid credentials");
    }
    catch (err){
        res.send(err);
    }
}

const librarySignUp = async (req: Request, res: Response) => {
    req.body.lPassword = await bcrypt.hash(req.body.lPassword, SALT_ROUNDS)
    req.body.lID = 'LIB' + uuidv4()
    const newLibrary = new Library(req.body)
    newLibrary.save().then(() => {
        res.json({ message: "Created successfully" })
    }).catch((err) => {
        res.json({ message: err })
    })
}

const libraryAll = (req: Request, res: Response) => {
    Library.find({}).then((libraries) => {
        res.json(libraries)
    }).catch((err) => {
        res.json(err)
    })
}

const viewBooks = (req:Request,res:Response) => {
    const lID = req.body.id;
    const books = Book.find({lID:lID});
    res.json(books);
}

export { libraryLogin, librarySignUp, libraryAll, viewBooks}
