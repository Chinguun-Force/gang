import mongoose from "mongoose";
const hobbySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

const Hobby = mongoose.model("Hobby", hobbySchema);
export default Hobby;