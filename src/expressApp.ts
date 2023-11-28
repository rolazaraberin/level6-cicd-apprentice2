import "reflect-metadata"; //FOR TYPEORM
import express from "express";
import router from "./routes/router";
import endpoints from "./routes/endpoints";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const hostname = "http://localhost";
const port = process.env.PORT || 8000;
const isServerless = process.env.isServerless;

app.use(cors({ origin: "*" }));
app.use(express.static("public"));
app.use(express.json()); //REQUIRED TO ACCEPT REQUESTS WITH JSON BODY
app.use(endpoints.root, router);

if (isServerless !== "true") {
  console.log("Starting server...");
  app.listen(port, handleListen);
}

export default app;

function handleListen() {
  console.log(`Listening on ${hostname}:${port}`);
}
