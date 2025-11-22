import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import foodPartnerModel from "../models/foodpartner.model.js";

export async function registerUser(req, res) {
  const { fullname, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res
      .status(400)
      .json({ message: "Radhe Radhe: User already exists!" });
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  const user = await userModel.create({
    fullname,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.FOOD_REEL_JWt_SECRET
  );

  res.cookie("token", token);
  res.status(201).json({
    message: "Radhe Radhe: User registered successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullname: user.fullname,
    },
  });
}

export async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Radhe Radhe: Invalid credentials !",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Radhe Radhe: Invalid credentials !",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.FOOD_REEL_JWt_SECRET
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "Radhe Radhe: User logged in successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullname: user.fullname,
    },
  });
}

export async function logoutUser(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "Radhe Radhe: User logged out successfully. ✅",
  });
}

export async function registerFoodPartner(req, res) {
  const { restaurantName, ownerName, phone, email, password, location } =
    req.body;

  const isFoodPartnerAlreadyExists = await foodPartnerModel.findOne({ email });

  if (isFoodPartnerAlreadyExists) {
    return res.status(400).json({
      message: "Radhe Radhe: User already present with this credentials",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const foodpartner = await foodPartnerModel.create({
    restaurantName,
    ownerName,
    phone,
    email,
    password: hashedPassword,
    location,
  });

  const token = jwt.sign(
    {
      id: foodpartner._id,
    },
    process.env.FOOD_REEL_JWt_SECRET
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "Radhe Radhe: Food partner registered successfully.✅",
    foodpartner: {
      _id: foodpartner._id,
      restaurantName: foodpartner.restaurantName,
      ownerName: foodpartner.ownerName,
      phone: foodpartner.phone,
      email: foodpartner.email,
      location: foodpartner.location,
    },
  });
}

export async function loginFoodPartner(req, res) {
  const { email, password } = req.body;

  const foodPartner = await foodPartnerModel.findOne({
    email,
  });

  if (!foodPartner) {
    return res.status(400).json({
      message: "Radhe Radhe: Invalid credentials!",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, foodPartner.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Radhe Radhe: Invalid credentials.",
    });
  }

  const token = jwt.sign(
    {
      id: foodPartner._id,
    },
    process.env.FOOD_REEL_JWt_SECRET
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "Radhe Radhe: Food partner logged in successfully. ✅",
    foodpartner: {
      restaurantName: foodPartner.restaurantName,
      ownerName: foodPartner.ownerName,
      location: foodPartner.location,
      phone: foodPartner.phone,
      email: foodPartner.email,
    },
  });
}

export async function logoutFoodPartner(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "Radhe Radhe: Food partner logged out successfully. ✅",
  });
}
