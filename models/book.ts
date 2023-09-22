import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    bID:{
        type: String,
        unique: true,
        required: true
    },
    bName:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    bCount:{
        type: Number,
        default: 0,
    },
    lID:{
        type: String,
        required: true,
    }
})

const Book = mongoose.model("Book", bookSchema);
export { Book }
