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
exports.userSignUp = exports.userLogin = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SALT_ROUNDS = 10;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send("All inputs are requred");
        }
        const user = yield user_1.User.findOne({ uEmail: email });
        if (user && (yield (bcrypt_1.default.compare(password, user.uPassword)))) {
            console.log("Login successful");
            const token = jsonwebtoken_1.default.sign({ user_id: user.uID, email }, process.env.TOKEN_KEY, {
                expiresIn: "1m",
            });
            user.uToken = token;
            yield user.save();
            // auth(user.uToken);
            res.status(200).json(user);
        }
        res.status(400).send("Invalid credentials");
    }
    catch (err) {
        res.send(err);
    }
});
exports.userLogin = userLogin;
const userSignUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body.uPassword = yield bcrypt_1.default.hash(req.body.uPassword, SALT_ROUNDS);
    console.log(req.body);
    const newUser = new user_1.User(req.body);
    newUser.save().then(() => {
        res.json({ message: "Created successfully" });
    }).catch((err) => {
        res.json({ message: err });
    });
});
exports.userSignUp = userSignUp;
