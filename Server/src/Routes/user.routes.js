import { RegsiterUser,LoginUser } from "../Controllers/user.controller";
import express from "express";

const userrouter = express.Router();
userrouter.post("/register", RegsiterUser);
userrouter.post("/login", LoginUser);

export default userrouter;