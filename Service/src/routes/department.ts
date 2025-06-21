import { Router } from "express";
import { createDepartment, getDepartment } from "../controller/department";

const departmentRouter = Router();
departmentRouter
    .get("/", getDepartment)
    .post("/", createDepartment)

export { departmentRouter };