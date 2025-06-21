"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_1 = require("../controller/user");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter
    .get("/", user_1.getUser)
    .post("/", user_1.createUser);
//# sourceMappingURL=user.js.map