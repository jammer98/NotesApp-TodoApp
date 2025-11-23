import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiRespone } from "../utils/ApiResponse";


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

export { RegsiterUser , LoginUser }