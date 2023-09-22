import { Request, Response } from "express"
import { User } from '../models/user'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';

const SALT_ROUNDS: number = 10

const userLogin = (req: Request, res: Response)=>{
    res.send("User Login called")
}

const userSignUp = async (req: Request, res: Response) => {
    req.body.uPassword = await bcrypt.hash(req.body.uPassword, SALT_ROUNDS)
    req.body.uID = 'USER' + uuidv4()
    const newUser = new User(req.body)
    newUser.save().then(() => {
        res.json({ message: "Created successfully" })
    }).catch((err) => {
        res.json({ message: err })
    })
}


export { userLogin, userSignUp }
