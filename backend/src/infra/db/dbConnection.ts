import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "../../domain/entity/Product";
import { Member } from "../../domain/entity/Member";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "clnarch_stockmgm",
  synchronize: true,
  logging: false,
  entities: [Product, Member],
  migrations: [],
  subscribers: [],
});
