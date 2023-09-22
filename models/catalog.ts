import mongoose from "mongoose";

const catalogSchema = new mongoose.Schema({
    cID:{
        type: String,
        unique: true,
        required: true
    },
    bID:{
        type: String,
        required: true
    },
    uID:{
        type: String,
        required: true
    },
    sDate:{
        type: String,
        required: true
    },
    rDate:{
        type: String,
        required: true
    },
    arDate:{
        type: String
    }
});

const Catalog = mongoose.model("Catalog", catalogSchema);
export { Catalog }
