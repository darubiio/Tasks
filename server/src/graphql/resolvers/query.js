import { Task, List } from '../../database/model/model.js';

const Query = {
    tareasAll: async () => {
        return await Task.find().populate('List');
    },
    listasAll: async () => {
        return await List.find().populate('Task');
    },
}

export default Query;