import express from "express";

import {
  calculateAllocation,
  getAllocations
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

export default router;