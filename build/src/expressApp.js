"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); //FOR TYPEORM
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const endpoints_1 = __importDefault(require("./routes/endpoints"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const hostname = "http://localhost";
const port = process.env.PORT || 8000;
const isServerless = process.env.isServerless;
app.use((0, cors_1.default)({ origin: "*" }));
app.use(express_1.default.static("public"));
app.use(express_1.default.json()); //REQUIRED TO ACCEPT REQUESTS WITH JSON BODY
app.use(endpoints_1.default.root, router_1.default);
if (isServerless !== "true") {
    console.log("Starting server...");
    app.listen(port, handleListen);
}
exports.default = app;
function handleListen() {
    console.log(`Listening on ${hostname}:${port}`);
}
