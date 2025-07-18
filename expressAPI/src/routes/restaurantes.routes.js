import { Router } from "express";
import RestaurantesController from "../controllers/restaurantesController.js";

const router = Router();

// GET /restaurantes
router.get("/", RestaurantesController.getAll);

// GET /restaurantes/:id
router.get("/:id", RestaurantesController.getById);

// POST /restaurantes
router.post("/", RestaurantesController.create);

// PUT /restaurantes/:id
router.put("/:id", RestaurantesController.update);

// DELETE /restaurantes/:id
router.delete("/:id", RestaurantesController.delete);

export default router;
