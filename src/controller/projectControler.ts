import { RequestHandler } from "express";
import Project from "../models/project";
import createError from "http-errors";

export const getAllProject: RequestHandler = async (req, res, next) => {
  try {
    const data = await Project.findAll();

    res.status(200).send({
      message: "Get data success",
      data,
    });
  } catch (error: any) {
    res.status(error.status || 500).send({
      message: error.message || "Internal Error",
    });
  }
};

export const createProject: RequestHandler = async (req, res, next) => {
  try {
    const existingData = await Project.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (existingData) {
      throw createError(400, "the project name is already in use!");
    }

    await Project.create(req.body);

    res.status(200).send({
      message: "Create project success!",
    });
  } catch (error: any) {
    res.status(error.status || 500).send({
      message: error.message || "Internal Error!",
    });
  }
};
