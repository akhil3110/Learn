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
const globals_1 = require("@jest/globals");
const index_1 = require("../index");
const supertest_1 = __importDefault(require("supertest"));
(0, globals_1.describe)("test the sum endpoint", () => {
    (0, globals_1.it)("should return 3 when 1+2", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).post("/sum").send({
            a: 1,
            b: 2
        });
        (0, globals_1.expect)(res.body.sum).toBe(3);
        (0, globals_1.expect)(res.statusCode).toBe(200);
    }));
    (0, globals_1.it)("should return error number greater than 1000000", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).post("/sum").send({
            a: 10000000,
            b: 2
        });
        (0, globals_1.expect)(res.body.message).toBe("sorry we do not suppor tbig numbers rigth now");
        (0, globals_1.expect)(res.statusCode).toBe(422);
    }));
});
(0, globals_1.describe)("test the multiplication endpoint", () => {
    (0, globals_1.it)("should return 6 when 3*2", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).post("/miltiply").send({
            a: 3,
            b: 2
        });
        (0, globals_1.expect)(res.body.multiplication).toBe(6);
        (0, globals_1.expect)(res.statusCode).toBe(200);
    }));
});
