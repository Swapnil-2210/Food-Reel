import jwt from "jsonwebtoken";
import foodPartnerModel from "../models/foodpartner.model.js";

export async function authFoodPartnerMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Radhe Radhe: Unauthorized access / login again!!",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.FOOD_REEL_JWt_SECRET);

    const foodPartner = await foodPartnerModel.findById(decoded.id);

    req.foodPartner = foodPartner;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token!!",
    });
  }
}
