"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJobTitle = exports.getJobTitle = void 0;
const jobTitle_1 = __importDefault(require("../schema/jobTitle"));
const getJobTitle = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobTitle = yield jobTitle_1.default.find();
        res.status(200).json({ success: true, jobTitle });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getJobTitle = getJobTitle;
const createJobTitle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobTitle = yield jobTitle_1.default.create(req.body);
        res.status(200).json({ success: true, jobTitle });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createJobTitle = createJobTitle;
//# sourceMappingURL=jobTitle.js.map