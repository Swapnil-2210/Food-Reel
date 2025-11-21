// create server
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import foodRouter from "./routes/food.routes.js";

const app = express();
app.use(cookieParser());
app.use(express.json());

// server runing test response
app.get("/", (req, res) => {
  res.send("Radhe Radhe: I am live....");
});

app.use("/api/auth", authRouter);
app.use("/api/food", foodRouter);

export default app;
