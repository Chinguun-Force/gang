import { Request, Response } from "express"
import Department from "../schema/department"

export const getDepartment = async (_req: Request, res: Response) => {
    try {
        const department = await Department.find().populate("Description");
        res.status(200).json({ success: true, department });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createDepartment = async (req: Request, res: Response) => {
    try {
        const department = await Department.create(req.body);
        res.status(200).json({ success: true, department });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}