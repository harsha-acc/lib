import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    bID:{
        type:String,
        unique:true,
        require:true
    },
    bName:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    bCount:{
        type:Number,
        default:0,
    },
    lID:{
        type:String,
        unique:true,
        require:true
    }
})

const Book = mongoose.model("Book",bookSchema);
export {Book}
