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
            ref: "Description"
        },
        date : {
            type: Date,
            required: true
        },
        status : {
            type: String,
            enum: ["pending", "confirmed", "rejected"],
            default: "pending"
        }
    })

    const Requests = mongoose.model("Requests", requestsSchema);
    export default Requests;