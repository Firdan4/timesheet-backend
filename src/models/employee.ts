import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db";

class Employee extends Model {
  public id!: number;
  public name!: string;
  public rate!: number;
  static getOne: () => Promise<Employee | null>;
}

Employee.init(
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
    rate: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Employee",
  }
);

Employee.getOne = async () => {
  const data = await Employee.findOne();

  return data;
};

export default Employee;
