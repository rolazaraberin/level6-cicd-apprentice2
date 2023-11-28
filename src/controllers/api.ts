import { typeorm } from "../models/database";
import { User } from "../models/entities/User";

const users = typeorm.getRepository(User);

export async function getUsers() {
  const allUsers = await users.find();
  return allUsers;
}

export async function addUser(user: User) {
  const result = await users.insert(user);
  return result;
}

export async function updateUser(user: User) {
  const matchingUser = { id: user.id };
  const result = await users.update(matchingUser, user);
  return result;
}

export async function deleteUser(user: User) {
  const result = await users.remove(user);
  return result;
}
