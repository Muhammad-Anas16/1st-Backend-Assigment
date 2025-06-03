import express from 'express'
import morgan from 'morgan';
import userRoutes from './Routers/users.js'
import 'dotenv/config'
import mongoose from 'mongoose';

const task = [
    {
        id: 1,
        name: "abc"
    },
    {
        id: 2,
        name: "xyz"
    }
]

const app = express();
const PORT = 4000;

app.use(morgan('tiny'))
app.use(express.json())

app.get('/', (req, res) => {
    req.status(200).send("Server is Running") 
})

app.use("/user", userRoutes) // Middleware

app.listen(PORT, () => console.log("Server is Runing on PORT : " + PORT))