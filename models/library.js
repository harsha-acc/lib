"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.library = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const librarySchema = new mongoose_1.default.Schema({
    libEmail: {
        type: String,
        unique: true,
        require: true
    },
    libPswd: {
        type: String,
        require: true
    },
    lName: {
        type: String,
        require: true
    },
    libID: {
        type: String,
        unique: true,
        require: true
    }
});
const library = mongoose_1.default.model("Library", librarySchema);
exports.library = library;
