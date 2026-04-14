import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiRespone } from "../utils/ApiResponse.js";
import pool from "../Config/connectDB.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const RegisterUser = asyncHandler(async(req,res)=>{
    const {username , email , password_hash } = req.body;

    if(!email || !password_hash || !username){
        throw new ApiError(400,"All fields are required");
    }

    const saltRounds = 10;
    const password = await bcrypt.hash(password_hash, saltRounds);

    const response = await pool.query("INSERT INTO users (username,email,password_hash) VALUES ($1,$2,$3) RETURNING users_id,username,email,created_at",[username,email,password]);
    res.status(201).json(new ApiRespone(201,"User registered successfully",response.rows[0]));
})

const LoginUser = asyncHandler(async(req,res)=>{
    const { username , password } = req.body;

    if(!username || !password){
        throw new ApiError(400,"username and password is required");
    }

    const response = await pool.query("SELECT * FROM users WHERE username = $1",[username]);

    if(response.rows.length === 0){
        throw new ApiError(404,"User not found");
    }

    const user = response.rows[0];

    const isPasswordMatch = await bcrypt.compare(password, user.password_hash);

    if(!isPasswordMatch){
        throw new ApiError(401,"Invalid password");
    }

    const token = jwt.sign({ userId: user.users_id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json(new ApiRespone(200,"User logged in successfully",{ token }));
})



const getallusers = asyncHandler(async(req,res)=>{
    
    const results = await pool.query("SELECT * FROM users");

    res.status(200).json(new ApiRespone(200,"All users fetched successfully",results.rows));
    
})

export { RegisterUser , LoginUser , getallusers }