"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catalog = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const catalogSchema = new mongoose_1.default.Schema({
    cID: {
        type: String,
        unique: true,
        require: true
    },
    bID: {
        type: String,
        unique: true,
        require: true
    },
    uID: {
        type: String,
        unique: true,
        require: true
    },
    sDate: {
        type: Date,
        require: true
    },
    rDate: {
        type: Date,
        require: true
    },
    arDate: {
        type: Date,
        require: true
    }
});
const catalog = mongoose_1.default.model("Catalog", catalogSchema);
exports.catalog = catalog;
