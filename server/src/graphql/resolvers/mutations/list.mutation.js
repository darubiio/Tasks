import { Task, List } from '../../../database/model/model.js'

const listMutations = {

    createList: async (_, { name }) => {
        const newList = new List({ name });
        return await newList.save();
    },
    updateListName: async (_, { _id, name }) => {
        return await List.findByIdAndUpdate(_id, { name }, { new: true });
    },

    deleteList: async (_, { _id }) => {
        await Task.deleteMany({ "list": _id });
        return await List.findByIdAndDelete(_id);
    }
}

export default listMutations;