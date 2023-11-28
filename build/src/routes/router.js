"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const root_1 = __importDefault(require("./root"));
const endpoints_1 = __importDefault(require("./endpoints"));
//ROUTING - http://expressjs.com/en/guide/routing.html
const router = express_1.default.Router();
router.get(endpoints_1.default.root, root_1.default.get);
// router.get(enpoints.api, api.get);
// router.get(enpoints.test, test.get);
// router.post(enpoints.test, test.post);
// router.put(enpoints.test, test.put);
// router.delete(enpoints.test, test.delete);
exports.default = router;
