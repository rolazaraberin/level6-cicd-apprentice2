"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const test = { get, post, put, delete: _delete };
exports.default = test;
function get(request, response) {
    const message = JSON.stringify(request);
    response.send("GET: " + message);
}
function post(request, response) {
    const message = JSON.stringify(request);
    response.send("POST: " + message);
}
function put(request, response) {
    const message = JSON.stringify(request);
    response.send("PUT: " + message);
}
function _delete(request, response) {
    const message = JSON.stringify(request);
    response.send("DELETE: " + message);
}
