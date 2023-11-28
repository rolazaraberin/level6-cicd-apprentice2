"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullUrl = exports.hostUrl = void 0;
const endpoints_1 = __importDefault(require("./endpoints"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.hostUrl = process.env.host;
exports.fullUrl = {
    host: exports.hostUrl,
    root: exports.hostUrl + endpoints_1.default.root,
    api: exports.hostUrl + endpoints_1.default.api,
    test: exports.hostUrl + endpoints_1.default.test,
};
