import { Request, Response } from "express"
import User from "../schema/user"

export const getUser = async (_req: Request, res: Response) => {
    try {
        const user = await User.find();
        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json({ success: true, user })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}