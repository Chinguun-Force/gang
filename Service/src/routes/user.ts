import { Router } from "express";
import { createUser, getUser , getNewUsers , getMentors } from "../controller/user";

const userRouter = Router();
userRouter
    .get("/", getUser)
    .post("/", createUser)
    .get("/mentor", getMentors)
    .get("/new-user", getNewUsers);

export { userRouter }