const listMutations = {

    createList: async (_, { name }, { List, currentUser }) => {
        const newList = new List({ name, by: currentUser.id });
        return await newList.save();
    },
    
    updateListName: async (_, { _id, name }, { List }) => {
        return await List.findByIdAndUpdate(_id, { name }, { new: true });
    },

    deleteList: async (_, { _id }, { Task, List }) => {
        await Task.deleteMany({ "list": _id });
        return await List.findByIdAndDelete(_id);
    }
}

export default listMutations;