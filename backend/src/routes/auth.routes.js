import express from "express";
import {
  loginFoodPartner,
  loginUser,
  logoutFoodPartner,
  logoutUser,
  registerFoodPartner,
  registerUser,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

// user auth APIs
authRouter.post("/user/register", registerUser);
authRouter.post("/user/login", loginUser);
authRouter.get("/user/logout", logoutUser);

// food partner auth APIs

authRouter.post("/food-partner/register", registerFoodPartner);
authRouter.post("/food-partner/login", loginFoodPartner);
authRouter.get("/food-partner/logout", logoutFoodPartner);

export default authRouter;
