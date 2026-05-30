import express from "express";

import {
  calculateAllocation,
  getAllocations,
  getLatestAllocation
}
from "../controllers/allocationController.js";
import protect from "../middleware/authMiddleware.js";

const router =
express.Router();

router.post(
  "/calculate",
  protect,
  calculateAllocation
);

router.get(
  "/",
  protect,
  getAllocations
);

router.get(
  "/latest",
  protect,
  getLatestAllocation
);

export default router;