import mongoose from "mongoose";

const catalogSchema = new mongoose.Schema({
    cID:{
        type:String,
        unique:true,
        require:true
    },
    bID:{
        type:String,
        unique:true,
        require:true
    },
    uID:{
        type:String,
        unique:true,
        require:true
    },
    sDate:{
        type:Date,
        require:true
    },
    rDate:{
        type:Date,
        require:true
    },
    arDate:{
        type:Date,
        require:true
    }
});

const catalog = mongoose.model("Catalog",catalogSchema);
export {catalog}