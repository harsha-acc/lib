"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libraryRouter = void 0;
const express_1 = require("express");
const library_1 = require("../controllers/library");
const libraryRouter = (0, express_1.Router)();
exports.libraryRouter = libraryRouter;
libraryRouter.post("/login", library_1.libraryLogin);
libraryRouter.post("/signup", library_1.librarySignUp);
