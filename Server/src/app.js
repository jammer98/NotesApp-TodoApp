import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors({
    origin: '*'
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


import userrouter from './Routes/user.routes.js';

app.use("/api/v1/users",userrouter);


export default app;