"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    department: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true
    },
    role: {
        type: String,
        enum: ["mentor", "new", "old"],
        required: true
    },
    hobby: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true
    },
});
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
//# sourceMappingURL=user.js.map