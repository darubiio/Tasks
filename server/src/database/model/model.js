import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const listSchema = new Schema ({
    name: String,
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: "tasks"
    }],
});

const taskSchema = new Schema ({
    name: String,
    state: { type: Boolean, default: false },
    important: { type: Boolean, default: false },
    myDay: { type: Boolean, default: false },
    date: { type: Date, default: new Date()},
    dueDate: Date,
    note: { type: String, default: "" },
    steps: [{
        name: { type: String, require: false },
        state: { type: Boolean, require: false }
    }],
    list: { type: Schema.Types.ObjectId, ref: "lists" }
});

export const Task = mongoose.model('tasks', taskSchema);
export const List = mongoose.model('lists', listSchema);

export default { Task, List };