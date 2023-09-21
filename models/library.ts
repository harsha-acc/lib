import mongoose from "mongoose";

const librarySchema = new mongoose.Schema({
    libEmail:{
        type:String,
        unique:true,
        require:true
    },
    libPswd:{
        type:String,
        require:true
    },
    lName:{
        type:String,
        require:true
    },
    libID:{
        type:String,
        unique:true,
        require:true
    }
});

const library = mongoose.model("Library",librarySchema);
export {library}