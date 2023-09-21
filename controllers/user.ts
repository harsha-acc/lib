import { Request, Response } from "express"
import { User } from '../models/user'

const userLogin = (req:Request,res:Response)=>{
    res.send("User Login called")
}

const userSignUp = (req: Request, res: Response) => {
    const newUser = new User(req.body)
    newUser.save().then(() => {
        res.json({ message: "Created successfully" })
    }).catch((err) => {
        res.json({ message: err })
    })
}


export { userLogin, userSignUp }
