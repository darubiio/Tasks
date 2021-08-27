import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    state: {
        type: Boolean,
        default: false
    },
    important: {
        type: Boolean,
        default: false
    },
    myDay: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: new Date()
    },
    dueDate: {
        type: Date,
        default: null
    },
    note: {
        type: String,
        default: ""
    },
    steps: [{
        name: {
            type: String,
            require: false
        },
        state: {
            type: Boolean,
            require: false
        }
    }],
    list: {
        type: Schema.Types.ObjectId,
        ref: "lists"
    },
    by: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
});

export default mongoose.model('tasks', taskSchema);