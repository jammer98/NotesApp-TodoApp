import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema(
    {
        username:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"username",
            required:true
        },
        title:{
            type:String,
            required:true,
            tirm:true
        },
        content:{
            type:String,
            required:true,
        },
        colour:{
            type:String,
            default:"#ffffff"
        },
        isPinnned:{
            type:Boolean,
            default:false
        },
        createdAt:{
            type:Date,
            default:Date.now
        },
        updatedAt:{
            type:Date,
            default:Date.now
        }
    },
    {timestamps:true})

export const Note = new mongoose.model("Note",NotesSchema)