import { Router } from "express";

import activities from "./activitiesRouter";
import project from "./projectRouter";
import employee from "./employeeRouter";

const router = Router();

router.use("/activities", activities);
router.use("/project", project);
router.use("/employee", employee);

export default router;
