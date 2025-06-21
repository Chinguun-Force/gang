import { Request, Response } from "express"
import User from "../schema/user"
import mongoose from "mongoose"

export const getUserWithInfo = async (_req: Request, res: Response) => {
    try {
        const userWithInfo = await User.aggregate([
            {
                $lookup: {
                    from: "hobbies",         // Collection name
                    localField: "hobby",    // From Department
                    foreignField: "_id",       // From JobTitle
                    as: "hobbyInfo"
                }
            },
            {
                $lookup: {
                    from: "departments",             // Collection name (lowercase plural of User model)
                    localField: "department",     // From Department
                    foreignField: "_id",       // From User
                    as: "departmentInfo"
                }
            },
        ])
        res.status(200).json({ success: true, userWithInfo })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getUserByHobby = async (req: Request, res: Response) => {
    try {
        const users = await User.aggregate([
            {
                $match: { hobby: new mongoose.Types.ObjectId("6855348fa6d991f95ae963d4") }
            },
            {
                $lookup: {
                    from: "hobbies",            // collection name
                    localField: "hobby",
                    foreignField: "_id",
                    as: "hobbyInfo"
                }
            },
            {
                $lookup: {
                    from: "departments",             // Collection name (lowercase plural of User model)
                    localField: "department",     // From Department
                    foreignField: "_id",       // From User
                    as: "departmentInfo"
                }
            },
        ]);
        res.status(200).json({ success: true, users })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

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