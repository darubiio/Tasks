import { Task, List } from '../../database/model/model.js';

const Query = {
    tasks: async () => {
        return await Task.find().populate('List');
    },
    lists: async () => {
        return await List.find().populate('Task');
    },
}

export default Query;