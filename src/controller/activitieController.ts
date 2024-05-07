import { RequestHandler } from "express";
import Activity from "../models/activity";
import createError from "http-errors";
import { Op } from "sequelize";
import { activitieSchema } from "../schema/activities";

export const getAllActivities: RequestHandler = async (req, res, next) => {
  try {
    const { search } = req.query;

    let condition = {
      [Op.or]: [
        {
          activitieName: { [Op.like]: `%${search}%` }, // perubahan disini
        },
        {
          projectName: { [Op.like]: `%${search}%` }, // perubahan disini
        },
      ],
    };

    const data = await Activity.findAll({
      where: condition,
    });

    res.status(200).send({
      message: "Success get data",
      data,
    });
  } catch (error: any) {
    res.status(error.status || 500).send({
      message: error.message || "Internal Error!",
    });
  }
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

export const deleteActivities: RequestHandler = async (req, res, next) => {
  try {
    const dataActivitie = await Activity.findByPk(req.params.id);

    if (!dataActivitie) {
      throw createError(404, "Data not found!");
    }

    await dataActivitie.destroy();

    res.status(200).send({
      message: "Delete data success!",
    });
  } catch (error: any) {
    res.status(error.status || 500).send({
      message: error.message || "Internal Error!",
    });
  }
};

export const getActivitiesById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Activity.findOne({
      where: {
        id,
      },
    });

    console.log(data);
    if (!data) {
      throw createError(404, "Data not Found!");
    }

    res.status(200).send({
      message: "Get data success",
      data,
    });
  } catch (error: any) {
    res.status(error.status).send({
      message: error.message || "Internal Error",
    });
  }
};

export const updateActivities: RequestHandler = async (req, res, next) => {
  try {
    const { params, body } = req;

    const validationField = activitieSchema.safeParse(body);

    if (!validationField.success) {
      throw createError(400, "The data cannot be empty!");
    }

    await Activity.update(validationField.data, {
      where: {
        id: params.id,
      },
    });

    res.status(200).send({
      message: "Update data is successfuly!",
    });
  } catch (error: any) {
    res.status(error.status || 500).send({
      message: error.message || "Internal Error",
    });
  }
};
