import express from "express";
import root from "./root";
import test from "./test";
import api from "./api";
import enpoints from "./endpoints";

//ROUTING - http://expressjs.com/en/guide/routing.html

const router = express.Router();
router.get(enpoints.root, root.get);

// router.get(enpoints.api, api.get);

// router.get(enpoints.test, test.get);
// router.post(enpoints.test, test.post);
// router.put(enpoints.test, test.put);
// router.delete(enpoints.test, test.delete);

export default router;
