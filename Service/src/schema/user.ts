import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    role: {
        type: String,
        enum: ["mentor", "new"],
        required: true
    },
    hobby: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
})

const User = mongoose.model("User", userSchema);
export default User;