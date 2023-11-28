"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const databaseName = process.env.databaseName;
if (!databaseName)
    throw new Error("KNEXFILE: choose a database configuration");
const knexConfig = getConfig(databaseName);
exports.default = knexConfig;
function getConfig(databaseName) {
    const configurations = {
        mysql: {
            client: "mysql",
            connection: {
                user: process.env.user,
                password: process.env.password,
                database: process.env.database,
                multipleStatements: true,
            },
            migrations: {
                directory: "./src/models/migrations",
            },
            seeds: {
                directory: "./src/models/seeds",
            },
            useNullAsDefault: true,
        },
        sqlite: {
            client: "better-sqlite3",
            connection: {
                filename: "./src/models/database.sqlite",
            },
            migrations: {
                directory: "./src/models/migrations",
            },
            seeds: {
                directory: "./src/models/seeds",
            },
            useNullAsDefault: true,
        },
        elephantsql: {
            client: "pg",
            connection: {
                connectionString: process.env.connectionString,
                ssl: { rejectUnauthorized: false },
            },
            migrations: {
                directory: "./src/models/migrations",
            },
            seeds: {
                directory: "./src/models/seeds",
            },
            useNullAsDefault: true,
            pool: { min: 0, max: 1 },
        },
        cockroachdb: {
            client: "cockroachdb",
            connectionString: process.env.connectionString,
            connection: {
                connectionString: process.env.connectionString,
                ssl: { rejectUnauthorized: false },
            },
            migrations: {
                directory: "./src/models/migrations",
            },
            seeds: {
                directory: "./src/models/seeds",
            },
            useNullAsDefault: true,
            pool: { min: 0, max: 5 },
        },
    };
    return configurations[databaseName];
}
