"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("./routes/user");
const library_1 = require("./routes/library");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 4000;
const CONNECTION_URL = "mongodb+srv://lib:lib@cluster0.mlryi7x.mongodb.net/";
mongoose_1.default.connect(CONNECTION_URL).then(() => {
    console.log('DB Connected');
}).catch((err) => {
    console.log(err);
});
app.use("/api/v1/user", user_1.userRouter);
app.use("/api/v1/library", library_1.libraryRouter);
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
