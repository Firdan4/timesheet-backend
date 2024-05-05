import { Router } from "express";

import activities from "./activitiesRouter";

const router = Router();

router.use("/activities", activities);

export default router;
