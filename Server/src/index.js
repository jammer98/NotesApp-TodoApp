import dotenv from "dotenv";
import app from './app.js';

dotenv.config({
    path: './env'
})

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
// we will use postgress as our data base
// as we have to connect to database first before starting the server
