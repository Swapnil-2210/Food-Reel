// create server
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import foodRouter from "./routes/food.routes.js";
import cors from "cors";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "http://192.168.1.102:5173",
    ].filter(Boolean), // removes undefined
    credentials: true,
  })
);




// server runing test response
app.get("/", (req, res) => {
  res.send("Radhe Radhe: I am live....");
});

app.use("/api/auth", authRouter);
app.use("/api/food", foodRouter);

export default app;
