import dotenv from "dotenv";
dotenv.config();

const databaseName = process.env.databaseName;
if (!databaseName) throw new Error("KNEXFILE: choose a database configuration");
const knexConfig = getConfig(databaseName);
export default knexConfig;

function getConfig(databaseName: string) {
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
        connectionString: process.env.connectionString, //CONNECT TO ELEPHANTSQL.COM
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
      connectionString: process.env.connectionString, //CONNECT TO COCKROACHDB
      connection: {
        connectionString: process.env.connectionString, //CONNECT TO COCKROACHDB
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
