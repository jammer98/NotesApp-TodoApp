import dotenv from "dotenv";
import app from './app.js';
import { connectToDatabase } from './DATABASE/Connection.js';

dotenv.config({
    path: './env'
})


// we will use postgress as our data base
// as we have to connect to database first before starting the server
connectToDatabase()
    .then(() =>{
        app.on("error" ,(error)=>{
            console.log("Server Error",error);
            process.exit(1);
        })

        return app.listen(process.env.PORT || 5000, () =>{
            console.log(`Database is Connected !!`);
            console.log(`Server is running on the port :${process.env.PORT || 5000}`);
            console.log(`visit the Server here http://localhost:${process.env.PORT || 5000}`);
        })
    })
    .catch((err)=>{
        console.log("Database Connection Failed in indexjs",error);
        process.exit(1);
    })