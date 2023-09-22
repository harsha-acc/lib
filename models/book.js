"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    bID: {
        type: String,
        unique: true,
        required: true
    },
    bName: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    bCount: {
        type: Number,
        default: 0,
    },
    lID: {
        type: String,
        required: true
    }
});
const Book = mongoose_1.default.model("Book", bookSchema);
exports.Book = Book;
