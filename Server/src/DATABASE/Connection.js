import mongoose from 'mongoose';
import { DBName } from '../constants.js';

const connectToDatabase = async() =>{
    try {
        await mongoose.connect(`${process.env.DATABASE_URI}/${DBName}`)
    } catch (error) {
        console.log("DataBase connection Failed !!",error);
        process.exit(1);
    }
    
}

export { connectToDatabase }