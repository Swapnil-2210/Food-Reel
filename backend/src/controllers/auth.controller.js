import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function registerUser(req, res) {
  const { fullname, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(400).json({ message: "Radhe Radhe: User already exists!" });
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
    res.status(400).json({
      message: "Radhe Radhe: Invalid credentials !",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    res.status(400).json({
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
    user:{
      _id: user._id,
      email: user.email,
      fullname: user.fullname
    }
  })
}


export async function logoutUser(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "Radhe Radhe: User logged out successfully. ✅"
  })

}
