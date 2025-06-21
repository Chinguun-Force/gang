import { Router } from "express";
import { createUser, getUser, getUserWithInfo ,getNewUsers , getMentors} from "../controller/user";

const userRouter = Router();
userRouter
    .get("/", getUser)
    .get("/with-info", getUserWithInfo)
    .post("/", createUser)
    .get("/mentor", getMentors)
    .get("/new-user", getNewUsers);

export { userRouter }