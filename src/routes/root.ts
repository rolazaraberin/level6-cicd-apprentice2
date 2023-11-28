import { Request, Response } from "express";

const root = { get };
export default root;

function get(_request: Request, response: Response) {
  response.sendFile("index.html", { root: "public" });
}
