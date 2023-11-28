import { Handler } from "@netlify/functions";
import expressApp from "../src/expressApp";
import serverless from "serverless-http";

export const handler = serverless(expressApp) as Handler;
