import mongoose from "mongoose";
const requestsSchema = new mongoose.Schema({
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

const Requests = mongoose.model("Requests", requestsSchema);
export default Requests;