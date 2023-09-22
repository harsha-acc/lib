"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const catalogSchema = new mongoose_1.default.Schema({
    cID: {
        type: String,
        unique: true,
        required: true
    },
    bID: {
        type: String,
        unique: true,
        required: true
    },
    uID: {
        type: String,
        unique: true,
        required: true
    },
    sDate: {
        type: Date,
        required: true
    },
    rDate: {
        type: Date,
        required: true
    },
    arDate: {
        type: Date
    }
});
const Catalog = mongoose_1.default.model("Catalog", catalogSchema);
exports.Catalog = Catalog;
