import { DataSource } from "typeorm";
import { User } from "./src/models/entities/User";
import dotenv from "dotenv";
dotenv.config({ override: true }); //OVERRIDE CONFLICTING VARIABLE NAMES

const databaseName = process.env.databaseName as string;
const AppDataSource = getDataSource(databaseName) as DataSource;

export default AppDataSource;

function getDataSource(dataSourceName: string) {
  const { username, password, database } = process.env;
  const dataSources: any = {
    cockroachdb: new DataSource({
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
    mysql: new DataSource({
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
      entities: [User],
      migrations: [],
      subscribers: [],
    }),
    elephantsql: new DataSource({
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
