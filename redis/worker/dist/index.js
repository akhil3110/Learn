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
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
function processSubmission(submission) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { problemId, userId, code, language } = JSON.parse(submission);
            console.log("problemId: ", problemId);
            console.log("userId: ", userId);
            console.log("code: ", code);
            console.log("language: ", language);
            yield new Promise(resolve => setTimeout(resolve, 5000));
            console.log(`Finished processing submission for problem ${problemId}`);
        }
        catch (error) {
            console.log("process submission error", error);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("redis client connected");
            while (1) {
                try {
                    const submission = yield client.brPop("submission", 0);
                    //@ts-ignore
                    yield processSubmission(submission === null || submission === void 0 ? void 0 : submission.element);
                }
                catch (error) {
                    console.log("Error proessing submission", error);
                }
            }
        }
        catch (error) {
            console.log("worker main function", error);
        }
    });
}
main();
