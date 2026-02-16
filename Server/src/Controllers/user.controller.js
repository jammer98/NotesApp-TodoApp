import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiRespone } from "../utils/ApiResponse.js";
import pool from "../Database/connectDB.js";

const RegsiterUser = asyncHandler(async(req,res)=>{
    const { username , email , password } = req.body;

    if(!email || !password || !username){
        throw new ApiError(400,"All fields are required");
    }

    // save this in the database 
})

const LoginUser = asyncHandler(async(req,res)=>{
    const { username , password } = req.body;

    if(!username || !password){
        throw new ApiError(400,"username and password is required");
    }

    // database check with the username and the hashed password
})

const getallusers = asyncHandler(async(req,res)=>{
    // get all users from the database and send it to the client
    const results = await pool.query("SELECT * FROM users");

    res.status(200).json(new ApiRespone(200,"All users fetched successfully",results.rows));
    
})

export { RegsiterUser , LoginUser , getallusers }