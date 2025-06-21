import { Request, Response } from "express";
import Requests from "../schema/request";

export const getRequest = async (_req: Request, res: Response) => {
    try {
        const requests = await Requests.find();
        res.status(200).json({ success: true, requests })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createRequest = async (req: Request, res: Response)     => {
    try {
        const requests = await Requests.create(req.body);
        res.status(200).json({ success: true, requests });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}