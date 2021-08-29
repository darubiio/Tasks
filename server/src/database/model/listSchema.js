import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: "tasks"
    }],
    by: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
});


export default mongoose.model('lists', listSchema);