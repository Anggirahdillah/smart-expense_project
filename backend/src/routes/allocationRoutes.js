import express from "express";

import {
 calculateAllocation
}
from "../controllers/allocationController.js";

const router =
express.Router();

router.post(
 "/calculate",
 calculateAllocation
);

export default router;