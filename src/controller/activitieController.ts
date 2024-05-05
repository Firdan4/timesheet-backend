import { RequestHandler } from "express";

export const getAllActivities: RequestHandler = async (req, res, next) => {
  res.status(200).send({
    message: "API berjalan heru",
  });
};
