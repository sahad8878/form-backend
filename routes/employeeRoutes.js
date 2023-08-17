import express from "express";
import { postEmployeeDetails } from "../controllers/employeeController.js";
const router = express.Router();

router.post("/postEmployeeDetails", postEmployeeDetails);

export default router;
