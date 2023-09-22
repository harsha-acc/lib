import mongoose from "mongoose";

const catalogSchema = new mongoose.Schema({
    cID:{
        type: String,
        unique: true,
        required: true
    },
    bID:{
        type: String,
        unique: true,
        required: true
    },
    uID:{
        type: String,
        unique: true,
        required: true
    },
    sDate:{
        type: Date,
        required: true
    },
    rDate:{
        type: Date,
        required: true
    },
    arDate:{
        type: Date
    }
});

const Catalog = mongoose.model("Catalog", catalogSchema);
export { Catalog }
