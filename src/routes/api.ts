import { getUsers, addUser, updateUser, deleteUser } from "../controllers/api";
import { Request, Response } from "express";

const api = { get, post, put, delete: _delete };
export default api;

async function get(_request: Request, response: Response) {
  const users = await getUsers();
  response.send(users);
}

async function post(request: Request, response: Response) {
  const { user } = request.body;
  const result = await addUser(user);
  response.send(result);
}

async function put(request: Request, response: Response) {
  const { user } = request.body;
  const result = await updateUser(user);
  response.send(result);
}

async function _delete(request: Request, response: Response) {
  const { user } = request.body;
  const result = await deleteUser(user);
  response.send(result);
}
