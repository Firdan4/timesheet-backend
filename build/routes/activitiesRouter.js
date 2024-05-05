"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activitieController_1 = require("../controller/activitieController");
const router = (0, express_1.Router)();
router.use("/", activitieController_1.getAllActivities);
exports.default = router;
