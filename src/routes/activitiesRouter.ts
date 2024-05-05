import { Router } from "express";
import {
  createActivities,
  getAllActivities,
} from "../controller/activitieController";

const router = Router();

router.get("/", getAllActivities);
router.post("/", createActivities);

export default router;
