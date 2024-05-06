import { Router } from "express";

import activities from "./activitiesRouter";
import project from "./projectRouter";

const router = Router();

router.use("/activities", activities);
router.use("/project", project);

export default router;
