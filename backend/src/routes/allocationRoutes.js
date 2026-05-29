import express from "express";

import {
  calculateAllocation,
  getAllocations,
  getLatestAllocation
}
from "../controllers/allocationController.js";

const router =
express.Router();

router.post(
  "/calculate",
  calculateAllocation
);

router.get(
  "/",
  getAllocations
);

router.get(
  "/latest",
  getLatestAllocation
);

export default router;