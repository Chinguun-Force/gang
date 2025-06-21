import mongoose from "mongoose";
const requestSchema = new mongoose.Schema({
    from:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    to:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    description: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Description",
        required: true
    },
})

const Request = mongoose.model("Request", requestSchema);
export default Request;