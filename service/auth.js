"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const auth = (token) => {
    try {
        if (!token) {
            return ({ success: false, message: "Error!Token was not provided." });
        }
        const decodedToken = jsonwebtoken_1.default.verify(token, process.env.TOKEN_KEY);
        return decodedToken;
    }
    catch (error) {
        return "Authorization Failed";
    }
};
exports.auth = auth;
