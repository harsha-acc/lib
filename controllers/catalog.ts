import { Request, Response } from "express"
import { Catalog } from "../models/catalog"
import { User } from "../models/user"
import { v4 as uuidv4 } from 'uuid'

const catalogCreate = (req: Request, res: Response) => {
    const newCatalog = new Catalog(req.body)
    newCatalog.cID = "CAT" + uuidv4();

    newCatalog.save().then(async() => {

        const user = await User.findOne({ uID : req.body.uID })
        user?.uCatalog.push(newCatalog.cID)
        user?.save().then(() => {
            res.json({ message: "Catalog Created Successfully"})
        }).catch((err) => res.json({ message: err }))

    }).catch((err) => res.json({ message: err }))
}


export { catalogCreate }
