import { Router } from "express";
import { expiring, stats } from "../controllers/dashboard.controller.js";

const router = Router();

router.route("/stats").get(stats);
router.route("/expiring").get(expiring);

export default router;
