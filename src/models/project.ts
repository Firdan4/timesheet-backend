import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db";

class Project extends Model {
  public id!: number;
  public name!: string;
}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Project",
    tableName: "Project",
  }
);

export default Project;
