"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.addUser = exports.getUsers = void 0;
const database_1 = require("../models/database");
const User_1 = require("../models/entities/User");
const users = database_1.typeorm.getRepository(User_1.User);
async function getUsers() {
    const allUsers = await users.find();
    return allUsers;
}
exports.getUsers = getUsers;
async function addUser(user) {
    const result = await users.insert(user);
    return result;
}
exports.addUser = addUser;
async function updateUser(user) {
    const matchingUser = { id: user.id };
    const result = await users.update(matchingUser, user);
    return result;
}
exports.updateUser = updateUser;
async function deleteUser(user) {
    const result = await users.remove(user);
    return result;
}
exports.deleteUser = deleteUser;
