import endpoints from "./endpoints";
import dotenv from "dotenv";
dotenv.config();

export const hostUrl = process.env.host;

export const fullUrl = {
  host: hostUrl,
  root: hostUrl + endpoints.root,
  api: hostUrl + endpoints.api,
  test: hostUrl + endpoints.test,
};
