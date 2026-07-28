import { Router } from "express";
import {
  allMembersInHousehold,
  createHousehold,
  joinHousehold,
  yourHousehold,
} from "../controllers/households.controller.js";

const router = Router();

router.route("").post(createHousehold);
router.route("/join").post(joinHousehold);
router.route("/me").get(yourHousehold);
router.route("/:id/members").get(allMembersInHousehold);

export default router;
