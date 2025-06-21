import { Router } from "express";
import { createUser, getUser } from "../controller/user";

const userRouter = Router();
userRouter
    .get("/", getUser)
    .post("/", createUser)

export { userRouter }