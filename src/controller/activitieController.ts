import { RequestHandler } from "express";
import Activity from "../models/activity";
import createError from "http-errors";

export const getAllActivities: RequestHandler = async (req, res, next) => {
  const data = await Activity.findAll();

  res.status(200).send({
    message: "API berjalan heru",
    data,
  });
};

export const createActivities: RequestHandler = async (req, res, next) => {
  try {
    const existingData = await Activity.findOne({
      where: {
        activitieName: req.body.activitieName,
        projectName: req.body.projectName,
      },
    });

    if (existingData) {
      throw createError(400, "Duplicet data project!");
    }

    await Activity.create(req.body);

    res.status(200).send({
      message: "Creating success!",
    });
  } catch (error: any) {
    res.status(error.status || 500).send({
      message: error.message || "Internal Error!",
    });
  }
};
