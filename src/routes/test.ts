import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const test = { get, post, put, delete: _delete };
export default test;

function get(request: Request, response: Response) {
  const message = JSON.stringify(request);
  response.send("GET: " + message);
}

function post(request: Request, response: Response) {
  const message = JSON.stringify(request);
  response.send("POST: " + message);
}

function put(request: Request, response: Response) {
  const message = JSON.stringify(request);
  response.send("PUT: " + message);
}

function _delete(request: Request, response: Response) {
  const message = JSON.stringify(request);
  response.send("DELETE: " + message);
}
