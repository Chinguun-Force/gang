import { Router } from "express";
import { createRequest, getRequest } from "../controller/request";

const requestsRouter = Router();
requestsRouter
    .get("/", getRequest)
    .post("/", createRequest)

export { requestsRouter };