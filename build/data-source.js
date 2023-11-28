"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("./src/models/entities/User");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ override: true }); //OVERRIDE CONFLICTING VARIABLE NAMES
const databaseName = process.env.databaseName;
const AppDataSource = getDataSource(databaseName);
exports.default = AppDataSource;
function getDataSource(dataSourceName) {
    const { username, password, database } = process.env;
    const dataSources = {
        cockroachdb: new typeorm_1.DataSource({
            type: "cockroachdb",
            url: process.env.url,
            ssl: true,
            //ssl: { rejectUnauthorized: false }, //FOR INSECURE CONNECTIONS ONLY
            synchronize: true,
            logging: false,
            entities: [],
            migrations: [],
            subscribers: [],
        }),
        mysql: new typeorm_1.DataSource({
            username,
            password,
            database,
            type: "mysql",
            host: "localhost",
            // username: process.env.username,
            // password: process.env.password,
            // database: process.env.database,
            synchronize: true,
            logging: false,
            entities: [User_1.User],
            migrations: [],
            subscribers: [],
        }),
        elephantsql: new typeorm_1.DataSource({
            type: "postgres",
            url: process.env.url,
            synchronize: true,
            logging: false,
            entities: [],
            migrations: [],
            subscribers: [],
        }),
    };
    const dataSource = dataSources[dataSourceName];
    return dataSource;
}
