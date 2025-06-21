import { Request, Response } from "express"
import User from "../schema/user"

export const getUserWithInfo = async (_req: Request, res: Response) => {
    try {
        const userWithInfo = await User.aggregate([
            {
                $lookup: {
                    from: "hobbies",         
                    localField: "hobby",    
                    foreignField: "_id",      
                    as: "hobbyInfo"
                }
            },
            {
                $lookup: {
                    from: "departments",            
                    localField: "department",     
                    foreignField: "_id",      
                    as: "departmentInfo"
                }
            },
        ])
        res.status(200).json({ success: true, userWithInfo })
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

export const getNewUsers = async (req, res) => {
    try {
        const newUsers = await User.find({ role: "new" });
        res.status(200).json(newUsers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getMentors = async (req, res) => {
    try {
        const mentors = await User.find({ role: "mentor" });
        res.status(200).json(mentors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};