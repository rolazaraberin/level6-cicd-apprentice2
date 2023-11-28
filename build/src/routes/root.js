"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const root = { get };
exports.default = root;
function get(_request, response) {
    response.sendFile("index.html", { root: "public" });
}
