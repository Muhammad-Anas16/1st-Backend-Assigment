import express from 'express';
const taskRouter = express.router();
import Task from '../Modals/Task.js';
import HelperFunc from '../HelperFunc/Helper';

taskRouter.post("/", async (req, res) => {
    let { task } = req.body;
    let newTask = new Task({ task })
    newTask = await newTask.save()
    HelperFunc(res, 201, false, newTask, "Task added to MongoDB Successfully")
})

taskRouter.get("/", async (req, res) => {
    let tasks = Task.find()
    HelperFunc(res, 200, false, tasks, "Task fetched Successfully")
})

export default taskRouter;