"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const better_sqlite3_1 = __importDefault(require("better-sqlite3"));
const mysql_1 = __importDefault(require("mysql"));
const knex_1 = __importDefault(require("knex"));
const fs_1 = __importDefault(require("fs"));
class Database {
    constructor(knex, mysql, sqlite, typeorm, sql) {
        this.knex = knex;
        this.mysql = mysql;
        this.sqlite = sqlite;
        this.typeorm = typeorm;
        this.sql = sql;
    }
    configureKnex(knexfileConfig) {
        if (!knexfileConfig)
            throw new Error("ERROR: knexfile is required");
        const knex = (0, knex_1.default)(knexfileConfig);
        this.knex = knex;
    }
    configureMysql(mysqlConfig) {
        const mysql = mysql_1.default.createConnection({
            host: mysqlConfig.host,
            user: mysqlConfig.user,
            password: mysqlConfig.password,
        });
        this.mysql = mysql;
    }
    configureTypeorm(appDataSource) {
        if (!appDataSource)
            throw new Error("ERROR: AppDataSource is required");
        this.typeorm = appDataSource;
        this.typeorm.initialize();
        this.typeorm.initialized = async function () {
            if (this.typeorm.isInitialized)
                return;
            else
                return await this.typeorm.initialize();
        }.bind(this);
    }
    configureSqlite(cwd, filename) {
        debugger;
        if (!cwd)
            throw new Error("ERROR: current working directory is required");
        if (!filename)
            throw new Error("ERROR: filename is required");
        this.sqlite = new better_sqlite3_1.default(cwd + "/" + filename);
        this.sqlite.cwd = cwd;
    }
    configureSqlKnex() {
        if (!this.knex)
            throw new Error("ERROR: knex must be configured");
        this.sql = this.sqlKnex.bind(this);
    }
    configureSqlMysql() {
        debugger;
        if (!this.typeorm)
            throw new Error("ERROR: mysql must be configured");
        this.sql = this.sqlMysql.bind(this);
    }
    configureSqlTypeorm() {
        if (!this.typeorm)
            throw new Error("ERROR: typeorm must be configured");
        this.sql = this.sqlTypeorm.bind(this);
        // this.sql.initialize = this.typeorm.initialize.bind(this.typeorm);
        this.sql.initialized = async function () {
            if (this.typeorm.isInitialized)
                return;
            else
                await this.typeorm.initialize();
        }.bind(this);
    }
    async sqlKnex(sqlCommand, parameters) {
        const results = await this.knex.raw(sqlCommand, parameters);
        return results[0];
    }
    async sqlTypeorm(sqlCommand, parameters) {
        const results = await this.typeorm.query(sqlCommand, parameters);
        return results;
    }
    async sqlSqlite(sqlCommand, label = "") {
        debugger;
        const results = this.sqlite.prepare(sqlCommand).all();
        console.log(label, "\n", results, "\n");
        return results;
    }
    async sqlSqliteFile(filename, cwd = this.sqlite.cwd) {
        debugger;
        if (!cwd)
            throw new Error("ERROR: sqlite is not configured");
        const SQLcommands = fs_1.default.readFileSync(cwd + "/" + filename);
        this.sqlite.exec(SQLcommands.toString());
    }
    async sqlMysql(sqlCommand, parameters) {
        debugger;
        return this.mysql.raw(sqlCommand, parameters);
    }
}
exports.default = Database;
