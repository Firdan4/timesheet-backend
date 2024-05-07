import { Router } from "express";
import { getEmployee, updateEmployee } from "../controller/employeeController";

const router = Router();

router.get("/", getEmployee);
router.patch("/byId/:id", updateEmployee);

export default router;
