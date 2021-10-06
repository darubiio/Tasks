const taskMutations = {

    createTask: async (_, { name }, { Task, currentUser }) => {
        const newTarea = new Task({ name, by: currentUser.id });
        return await newTarea.save();
    },

    addToList: async (_, { _idT, _idL }, { Task, List }) => {
        const tinl = await Task.findByIdAndUpdate(_idT, { "list": _idL });
        tinl.save();
        return await List.findByIdAndUpdate(_idL, { $push: { tasks: _idT}});
    },

    createTaskInList: async (_, {_idL, name}, { Task, List, currentUser }) => {
        const newTarea = new Task({name, "list": _idL, by: currentUser.id});
        await newTarea.save();
        return await List.findByIdAndUpdate(_idL, { $push: { "tasks": newTarea._id } }, { new: true });
    },

    changeListTask: async (_, {idL, idNewL, idT}, { Task, List }) => {
        const pullFl = await List.findByIdAndUpdate(idL, { $pull: { tasks: idT}});
        await Task.findByIdAndUpdate(idT, {"list": idNewL});
        pullFl.save();
        return await List.findByIdAndUpdate(idNewL, { $push: { tasks: idT}});
    },

    updateTaskName: async (_, {_id, name}, { Task }) => {
        return Task.findByIdAndUpdate(_id, { name }, { new: true });
    },
    
    deleteTask: async (_, { _id }, { Task }) => {
        return await Task.findByIdAndDelete(_id);
    },

    updateTaskState: async (_, { _id, state }, { Task }) => {
        return await Task.findByIdAndUpdate(_id, { state }, { new: true });
    },

    updateTaskStateImportant: async (_, { _id, important }, { Task }) => {
        return await Task.findByIdAndUpdate(_id, { important }, { new: true });
    },

    updateTaskStateMyDay: async (_, { _id, myDay }, { Task }) => {
        return await Task.findByIdAndUpdate(_id, { myDay }, { new: true });
    },

    updateNote: async (_, { _id, note }, { Task }) => {
        return Task.findByIdAndUpdate(_id, {note}, {new: true});
    },
    
    updateDueDate: async (_, { _id, dueDate }, { Task }) => {
        return Task.findByIdAndUpdate(_id, { dueDate }, { new: true });
    }
}
export default taskMutations;