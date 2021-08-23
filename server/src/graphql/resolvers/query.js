import { Task, List } from '../../database/model/model.js';

const Query = {
    tasks: async () => {
        return await Task.find().populate('list');
    },
    lists: async () => {
        return await List.find().populate('tasks');
    },
}

export default Query;