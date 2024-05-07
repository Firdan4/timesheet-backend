import { Router } from "express";
import {
  createActivities,
  deleteActivities,
  getActivitiesById,
  getAllActivities,
  updateActivities,
} from "../controller/activitieController";

const router = Router();

router.get("/", getAllActivities);
router.get("/byId/:id", getActivitiesById);
router.patch("/byId/:id", updateActivities);
router.post("/", createActivities);
router.delete("/delete/:id", deleteActivities);

export default router;
