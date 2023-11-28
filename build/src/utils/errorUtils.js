"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAsyncError = void 0;
const httpCodes_1 = __importDefault(require("./httpCodes"));
async function handleAsyncError(asyncError) {
    const error = await asyncError;
    const message = error.message;
    let code = error.code;
    if (!code || code >= 600)
        code = httpCodes_1.default.error.serverError;
    return { error, code, message };
}
exports.handleAsyncError = handleAsyncError;
