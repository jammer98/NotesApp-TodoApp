import { RegisterUser,LoginUser,getallusers } from "../Controllers/user.controller.js";
import express from "express";

const userrouter = express.Router();
userrouter.post("/register", RegisterUser);
userrouter.post("/login", LoginUser);
userrouter.get("/",getallusers);
// userrouter.get("/allideas",getallideas);
// userrouter.post("/addnewideas",addnewideas);
// userrouter.get("/getuser/:id",getuser);


export default userrouter;