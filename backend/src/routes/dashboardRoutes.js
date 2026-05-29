import express from "express";
import { getDashboard,
    getLatestAllocation
 } from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/", getDashboard );

router.get(
  "/latest",
  getLatestAllocation
);
export default router;