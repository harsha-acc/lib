import mongoose from "mongoose";

const librarySchema = new mongoose.Schema({
    lEmail:{
        type: String,
        unique: true,
        required: true
    },
    lPassword:{
        type: String,
        required: true
    },
    lName:{
        type: String,
        required: true
    },
    lID:{
        type: String,
        unique: true,
        required: true
    }
});

const Library = mongoose.model("Library", librarySchema);
export { Library }
