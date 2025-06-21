import { Router } from "express";
import { createUser, getUser, getUserWithInfo } from "../controller/user";

const userRouter = Router();
userRouter
    .get("/", getUser)
    .get("/with-info", getUserWithInfo)
    .post("/", createUser)

export { userRouter }