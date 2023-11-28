"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sql = exports.typeorm = exports.knex = void 0;
const Database_1 = __importDefault(require("../utils/Database"));
const knexfile_1 = __importDefault(require("../../knexfile"));
const data_source_1 = __importDefault(require("../../data-source"));
const database = new Database_1.default();
database.configureKnex(knexfile_1.default);
database.configureTypeorm(data_source_1.default);
database.configureSqlTypeorm();
const { knex, typeorm, sql } = database;
exports.knex = knex;
exports.typeorm = typeorm;
exports.sql = sql;
