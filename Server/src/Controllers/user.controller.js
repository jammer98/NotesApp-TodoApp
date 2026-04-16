import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import pool from "../Config/connectDB.js";
import bcrypt from "bcrypt";
import { generateToken, generateRefreshToken } from "../utils/genrateToken.js";


const RegisterUser = asyncHandler(async(req,res)=>{
    const {username , email , password } = req.body;

    if(!email || !password || !username){
        throw new ApiError(400,"All fields are required");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const response = await pool.query("INSERT INTO users (username,email,password_hash) VALUES ($1,$2,$3) RETURNING *",[username,email,hashedPassword]);
    res.status(201).json(new ApiResponse(201,"User registered successfully",response.rows[0]));
})

const LoginUser = asyncHandler(async(req,res)=>{
    const { username , password } = req.body;


    if(!username || !password){
        throw new ApiError(400,"username and password is required");
    }

    const response = await pool.query("SELECT * FROM users WHERE username = $1",[username]);

    if(response.rows[0].length === 0){
        throw new ApiError(404,"User not found");
    }

    const user = response.rows[0];

    const isPasswordMatch = await bcrypt.compare(password, user.password_hash);

    if(!isPasswordMatch){
        throw new ApiError(401,"Invalid credentials");
    }

    const accesstoken = generateToken(user);
    const refreshToken = generateRefreshToken(user);

 await pool.query(
    "UPDATE users SET refresh_token=$1 WHERE users_id=$2",
    [refreshToken, user.users_id]
  );

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure:false, // Set to true in production
  });

    res.status(200).json(new ApiResponse(200,"User logged in successfully",{ accesstoken }));
})

const getallusers = asyncHandler(async(req,res)=>{
    
    const results = await pool.query("SELECT * FROM USERS");

    res.status(200).json(new ApiResponse(200,"All users fetched successfully",results.rows));
    
})

const getuserbyId = asyncHandler(async(req,res)=>{
    const { id } = req.params;

    

    const response = await pool.query("SELECT * FROM users WHERE users_id = $1",[id]);
    res.status(200).json(new ApiResponse(200,"User fetched successfully",response.rows[0]));
})


export { RegisterUser , LoginUser , getallusers , getuserbyId }