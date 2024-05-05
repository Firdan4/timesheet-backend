import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db";

class Activity extends Model {
  public id!: number;
  public activitieName!: string;
  public projectName!: string;
  public dateStart!: Date;
  public dateEnd!: Date;
  public timeStart!: string;
  public timeEnd!: string;
}

Activity.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    activitieName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateStart: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dateEnd: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    timeStart: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    timeEnd: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Activity",
  }
);

export default Activity;
