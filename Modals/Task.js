import mongoose from "mongoose";

let taskSchema = new mongoose.Schema({
    task: String,
    comppleted: { type: Boolean, default: false },
}, { timestamps: true })

let Task = mongoose.model('Tasks', taskSchema);

export default Task;