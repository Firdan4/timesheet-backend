import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load variabel lingkungan dari .env
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE ?? "default_database",
  process.env.DB_USER ?? "default_user",
  process.env.DB_PASSWORD ?? "default_password",
  {
    host: process.env.DB_HOST ?? "localhost",
    dialect: "mysql",
  }
);

export default sequelize;
