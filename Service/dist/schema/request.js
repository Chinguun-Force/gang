"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const requestsSchema = new mongoose_1.default.Schema({
    from: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    to: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    description: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Description",
        required: true
    },
});
const Requests = mongoose_1.default.model("Requests", requestsSchema);
exports.default = Requests;
//# sourceMappingURL=request.js.map