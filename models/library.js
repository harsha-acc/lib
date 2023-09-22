"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const librarySchema = new mongoose_1.default.Schema({
    lEmail: {
        type: String,
        unique: true,
        required: true
    },
    lPassword: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    lID: {
        type: String,
        unique: true,
        required: true
    },
    lToken: {
        type: String,
    }
});
const Library = mongoose_1.default.model("Library", librarySchema);
exports.Library = Library;
