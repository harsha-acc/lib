import express, { Application, Request, Response } from 'express'
import mongoose from 'mongoose'

const app: Application = express()

const PORT: number = 4000

const CONNECTION_URL: string = "mongodb+srv://lib:lib@cluster0.mlryi7x.mongodb.net/"


mongoose.connect(CONNECTION_URL).then(() => {
    console.log('DB Connected')
}).catch((error) => {
    console.log(error)
})


app.get('/api/v1', (req: Request, res: Response) => {
    res.send("Hello Wo2ede221srld !!!")
})


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})
