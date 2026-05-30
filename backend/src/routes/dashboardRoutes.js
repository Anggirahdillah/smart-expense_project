import express from "express";
import { getDashboard,
    getLatestAllocation
 } from "../controllers/dashboardController.js";
 import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get(
  "/",
  protect,
  getDashboard
);

router.get(
  "/latest",
  protect,
  getLatestAllocation
);
export default router;