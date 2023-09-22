"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.librarySignUp = exports.libraryLogin = void 0;
const library_1 = require("../models/library");
const bcrypt_1 = __importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = require("../service/auth");
dotenv_1.default.config();
const SALT_ROUNDS = 10;
const libraryLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send("All inputs are requred");
        }
        const library = yield library_1.Library.findOne({ lEmail: email });
        if (library && (yield (bcrypt_1.default.compare(password, library.lPassword)))) {
            console.log("Login successful");
            const token = jsonwebtoken_1.default.sign({ user_id: library.lID, email }, process.env.TOKEN_KEY, {
                expiresIn: "1h",
            });
            library.lToken = token;
            yield library.save();
            (0, auth_1.auth)(library.lToken);
            res.status(200).json(library);
        }
        res.status(400).send("Invalid credentials");
    }
    catch (err) {
        res.send(err);
    }
});
exports.libraryLogin = libraryLogin;
const librarySignUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body.lPassword = yield bcrypt_1.default.hash(req.body.lPassword, SALT_ROUNDS);
    req.body.lID = 'LIB' + (0, uuid_1.v4)();
    console.log(req.body);
    const newLibrary = new library_1.Library(req.body);
    newLibrary.save().then(() => {
        res.json({ message: "Created successfully" });
    }).catch((err) => {
        res.json({ message: err });
    });
});
exports.librarySignUp = librarySignUp;
