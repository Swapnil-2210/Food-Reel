import express from"express";
import {authFoodPartnerMiddleware} from "../middlewares/auth.middleware.js"
import { createFood } from "../controllers/food.controller.js";
import multer from "multer";

const foodRouter = express.Router();
const upload = multer({
    storage: multer.memoryStorage(),
})
// protected routes
foodRouter.post('/', authFoodPartnerMiddleware, upload.single("video") ,createFood);




export default foodRouter;