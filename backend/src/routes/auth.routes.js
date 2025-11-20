import express from "express"
import { loginUser, logoutUser, registerUser } from "../controllers/auth.controller.js";


const authRouter = express.Router();

authRouter.post('/user/register',registerUser);
authRouter.post('/user/login',loginUser);
authRouter.get('/user/logout',logoutUser);



export default authRouter;