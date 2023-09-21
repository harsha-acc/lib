import { Request,Response } from "express"
const userLogin = (req:Request,res:Response)=>{
    res.send("User Login called")
}

export {userLogin}