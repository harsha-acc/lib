"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    uID: {
        type: String,
        unique: true,
        required: true
    },
    uName: {
        type: String,
        required: true
    },
    uEmail: {
        type: String,
        unique: true,
        required: true
    },
    uPassword: {
        type: String,
        required: true
    },
    uCatalog: {
        type: [String]
    },
    uToken: {
        type: String
    }
});
const User = mongoose_1.default.model('User', userSchema);
exports.User = User;
