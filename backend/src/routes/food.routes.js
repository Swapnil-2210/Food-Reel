import express from "express";
import { authFoodPartnerMiddleware, authUserMiddlleware } from "../middlewares/auth.middleware.js";
import { createFood, getFoodItems, getFoodItemsByUserId } from "../controllers/food.controller.js";
import multer from "multer";

const foodRouter = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
});
// protected routes
foodRouter.post(
  "/",
  authFoodPartnerMiddleware,
  upload.single("video"),
  createFood
);

foodRouter.get("/", authUserMiddlleware, getFoodItems)

foodRouter.get("/userSpecific", authFoodPartnerMiddleware, getFoodItemsByUserId);
export default foodRouter;
