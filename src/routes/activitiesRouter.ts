import { Router } from "express";
import { getAllActivities } from "../controller/activitieController";

const router = Router();

router.use("/", getAllActivities);

export default router;
