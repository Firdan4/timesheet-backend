import { RequestHandler } from "express";
import createError from "http-errors";
import Employee from "../models/employee";
import { employeeSchema } from "../schema/employee";

export const getEmployee: RequestHandler = async (req, res, next) => {
  try {
    const data = await Employee.getOne();

    res.status(200).send({
      message: "get employee successfuly!",
      data,
    });
  } catch (error: any) {
    res.status(error.status || 500).send({
      message: error.message || "Internal Error!",
    });
  }
};

export const updateEmployee: RequestHandler = async (req, res, next) => {
  try {
    const getDataEmployee = await Employee.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!getDataEmployee) {
      throw createError(404, "Employee not found!");
    }

    const validationField = employeeSchema.safeParse(req.body);

    if (!validationField.success) {
      throw createError(400, "The data cannot be empty!");
    }

    const isNumberString =
      !isNaN(parseInt(req.body.rate, 10)) && isFinite(req.body.rate);

    if (!isNumberString) {
      throw createError(400, "Input rate only number!");
    }

    await Employee.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).send({
      message: "Update Employee successfuly!",
    });
  } catch (error: any) {
    res.status(error.status).send({
      message: error.message || "Internal Error!",
    });
  }
};
