import express, { Application } from 'express'
import mongoose from 'mongoose'
import { auth } from './service/auth'

import { userRouter } from './routes/user'

const app: Application = express()

app.use(express.json())

const PORT: number = 4000

const CONNECTION_URL: string = "mongodb+srv://lib:lib@cluster0.mlryi7x.mongodb.net/"

mongoose.connect(CONNECTION_URL).then(() => {
    console.log('DB Connected')
}).catch((err) => {
    console.log(err)
})


// app.use()
app.use("/api/v1/user",userRouter);

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})
