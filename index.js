"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_1 = require("./service/auth");
const user_1 = require("./routes/user");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 4000;
const CONNECTION_URL = "mongodb+srv://lib:lib@cluster0.mlryi7x.mongodb.net/";
mongoose_1.default.connect(CONNECTION_URL).then(() => {
    console.log('DB Connected');
}).catch((err) => {
    console.log(err);
});
// app.use()
app.use("/api/v1/user", user_1.userRouter);
console.log((0, auth_1.auth)("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTAwMDAwMDAwMSIsImVtYWlsIjoiaGFyc2hhNzdAZ21haWwuY29tIiwiaWF0IjoxNjk1MzYxNDczLCJleHAiOjE2OTUzNjE1MzN9.zEYHTelGdmbmjmFu4olHADY7UqAsZWJ0GC2QSVORWgc"));
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
