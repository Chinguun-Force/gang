import { Router } from "express";
import { createUser, getUser, getUserByHobby, getUserWithInfo } from "../controller/user";

const userRouter = Router();
userRouter
    .get("/", getUser)
    .get("/with-info", getUserWithInfo)
    .get("/by-hobby", getUserByHobby)
    .post("/", createUser)

export { userRouter }