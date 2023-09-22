import { Request, Response } from "express"
import { User } from '../models/user'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import { auth } from "../service/auth";
import {v4 as uuidv4} from "uuid";

dotenv.config();
const SALT_ROUNDS: number = 10;

const userLogin = async(req:Request,res:Response)=>{
    try{
        const {email,password} = req.body;
        if(!(email && password)){
            res.status(400).send("All inputs are requred");
        }
        const user = await User.findOne({uEmail: email});
        if(user && await (bcrypt.compare(password,user.uPassword))){
            console.log("Login successful");
            const token = jwt.sign(
                { user_id: user.uID, email },
                ((process.env.TOKEN_KEY as unknown) as any),
                {
                  expiresIn: "1h",
                });
                user.uToken = token;
                await user.save();
                auth(user.uToken);
                res.status(200).json(user);
        }
        res.status(400).send("Invalid credentials");
    }
    catch (err){
        res.send(err);
    }
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
