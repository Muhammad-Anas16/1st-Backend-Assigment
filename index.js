import express from 'express'
import morgan from 'morgan';
import userRoutes from './Routers/users.js'
import 'dotenv/config'
import mongoose from 'mongoose';
import taskRouter from './Routers/task.js';

const app = express();
const PORT = 4000;

app.use(morgan('tiny'))
app.use(express.json())

mongoose.connect(process.env.MongoDB_URL).then(() => {
    console.log('mongodb connected!')
}).catch((err) => {
    console.error('error in mongodb connection!:', err)
})

app.get('/', (req, res) => {
    req.status(200).send("Server is Running")
})

app.use("/user", userRoutes) // Middleware
app.use("/task", taskRouter)

app.listen(PORT, () => console.log("Server is Runing on PORT : " + PORT))