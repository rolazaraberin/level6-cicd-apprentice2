"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../controllers/api");
const api = { get, post, put, delete: _delete };
exports.default = api;
async function get(_request, response) {
    const users = await (0, api_1.getUsers)();
    response.send(users);
}
async function post(request, response) {
    const { user } = request.body;
    const result = await (0, api_1.addUser)(user);
    response.send(result);
}
async function put(request, response) {
    const { user } = request.body;
    const result = await (0, api_1.updateUser)(user);
    response.send(result);
}
async function _delete(request, response) {
    const { user } = request.body;
    const result = await (0, api_1.deleteUser)(user);
    response.send(result);
}
