import { Request, Response } from "express"
import { Library } from '../models/library'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';


const SALT_ROUNDS: number = 10

const libraryLogin = (req: Request, res: Response)=>{
    res.send("Library Login called")
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


export { libraryLogin, librarySignUp }
