import express, { Application } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { userRouter } from './routes/user'
import { libraryRouter } from './routes/library'
import { bookRouter } from './routes/book'
import { catalogRouter } from './routes/catalog'

const app: Application = express()

app.use(express.json())
app.use(cors())

const PORT: any = process.env.PORT

const CONNECTION_URL: any = process.env.CONNECTION_URL

mongoose.connect(CONNECTION_URL).then(() => {
    console.log('DB Connected')
}).catch((err) => {
    console.log(err)
})


app.use("/api/v1/user", userRouter);
app.use("/api/v1/library", libraryRouter);
app.use("/api/v1/book",bookRouter);
app.use("/api/v1/catalog", catalogRouter);

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})