import jwt from "jsonwebtoken";
import foodPartnerModel from "../models/foodpartner.model.js";
import userModel from "../models/user.model.js";

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


export async function authUserMiddlleware(req, res, next) {
  
  const token = req.cookies.token;
  
  if(!token){
    return res.status(401).json({
      message: "Radhe Radhe: Please login first"
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.FOOD_REEL_JWt_SECRET);

    const user = await userModel.findById(decoded.id);

    req.user = user;

    next()
    
  } catch (error) {
    return res.status(401).json({
      message: "Radhe Radhe: Invalid token"
    })
  }
}