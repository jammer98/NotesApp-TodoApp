import mongoose from "mongoose";

const UserSchema =  new mongoose.Schema(
    {
        username :{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true,
        },
        fullname:{
            type:String,
            required:true,
            lowercase:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true,
        },
        password:{
            type:String,
            required:[true,"Password is required"],
        }

}
,{timestamps:true})

export const User = new mongoose.model("User",UserSchema)