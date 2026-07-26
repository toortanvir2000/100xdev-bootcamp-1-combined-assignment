import { Router } from "express";
import {
  createItem,
  items,
  removeItem,
  updateItem,
  updateStatus,
} from "../controllers/items.controller.js";

const router = Router();

router.route("").get(items);
router.route("").post(createItem);
router.route("/:id").put(updateItem);
router.route("/:id").patch(updateStatus);
router.route("/:id").delete(removeItem);

export default router;
