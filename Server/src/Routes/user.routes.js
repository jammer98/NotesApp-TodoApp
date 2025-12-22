import { RegsiterUser,LoginUser } from "../Controllers/user.controller";
import express from "express";

const userrouter = express.Router();
userrouter.post("/register", RegsiterUser);
userrouter.post("/login", LoginUser);
userrouter.get("/allideas",getallideas);
userrouter.post("/addnewideas",addnewideas);
userrouter.get("/getuser/:id",getuser);


export default userrouter;