import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors({
    origin: '*'
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', require('./Routes/user.routes'));


export default app;