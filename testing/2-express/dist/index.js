"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.post("/sum", (req, res) => {
    try {
        const a = req.body.a;
        const b = req.body.b;
        const result = a + b;
        if (a > 1000000 || b > 1000000) {
            res.status(422).json({
                message: "sorry we do not suppor tbig numbers rigth now"
            });
            return;
        }
        res.json({
            sum: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.app.post("/miltiply", (req, res) => {
    try {
        const a = req.body.a;
        const b = req.body.b;
        const result = a * b;
        res.json({
            multiplication: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
