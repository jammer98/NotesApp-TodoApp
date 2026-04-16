import { RegisterUser,LoginUser,getallusers, getuserbyId } from "../Controllers/user.controller.js";
import { authMiddleware } from "../Middlewares/auth.middleware.js";
import express from "express";

const userrouter = express.Router();
userrouter.post("/register", RegisterUser);
userrouter.post("/login", LoginUser);
userrouter.get("/",getallusers);
userrouter.get("/:id",getuserbyId);
// userrouter.get("/allideas",getallideas);
// userrouter.post("/addnewideas",addnewideas);



export default userrouter;