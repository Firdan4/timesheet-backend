import { Router } from "express";
import { createProject, getAllProject } from "../controller/projectControler";

const router = Router();

router.get("/", getAllProject);
router.post("/", createProject);

export default router;
