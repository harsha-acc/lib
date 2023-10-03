import { Request, Response } from "express"
import { Catalog } from "../models/catalog"
import { User } from "../models/user"
import { v4 as uuidv4 } from 'uuid'
import { auth } from "../service/auth"

const catalogCreate = (req: Request, res: Response) => {
    const newCatalog = new Catalog(req.body)
    newCatalog.cID = "CAT" + uuidv4();

    newCatalog.save().then(async() => {

        const user = await User.findOne({ uID : req.body.uID })
        user?.uCatalog.push(newCatalog.cID);
        auth(user?.uToken as string);
        user?.save().then(() => {
            res.json({ message: "Catalog Created Successfully"})
        }).catch((err) => res.json({ message: err }))

    }).catch((err) => res.json({ message: err }))
}

const catalogDelete = async (req: Request, res: Response) => {
    const catalogID = req.params.cID;

    try {
        const deletedCatalog = await Catalog.deleteOne({cID:catalogID});
        if (deletedCatalog.deletedCount === 1){
            res.json({message: "Catalog deleted Successfully",deletedCatalog});
        } else {
            res.status(404).json({message:"Catalog not found"});
        }
    }catch(error) {
        res.status(500).json({message: "Internal server error",error})
    }
}

const catalogRead = async(req:Request,res:Response) => {
    try
    {   const uID = req.body.uID;
        const userObj:any = User.findOne({uID:uID});
        auth(userObj.uToken as string);
        console.log(userObj);
        const catArr = []
        const user:any = userObj;
        const uCatArr = user.uCatalog;
        for(let i=0;i<uCatArr.length;i++)
        {
            catArr.push(Catalog.findOne({cID:uCatArr[i]}));
        }
        res.json(catArr);
    }
    catch(err){
        res.status(400).json({message:"Internal error",err});
    }
}

const catalogUpdate =async (req:Request,res:Response) => {
    try
    {   const cID = req.body.cID;
        const rDate = req.body.rDate;
        const catalog:any = Catalog.findOneAndUpdate({cID:cID},{$set:{arDate:rDate}});
        await catalog!.save();
        res.json({message:"Catalog Updation Succesful"});
    }
    catch(err){
        res.status(400).json({message:"Internal error",err});
    }
}


export { catalogCreate, catalogDelete, catalogRead,catalogUpdate }
