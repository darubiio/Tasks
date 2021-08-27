const taskMutations = {

    createTask: async (_, { name }, { Task }) => {
        const newTarea = new Task({ name });
        return await newTarea.save();
    },

    addToList: async (_, { _idT, _idL }, { Task, List }) => {
        const tinl = await Task.findByIdAndUpdate(_idT, { "list": _idL });
        tinl.save();
        return await List.findByIdAndUpdate(_idL, { $push: { tasks: _idT}});
    },

    createTaskInList: async (_, {_idL, name}, { Task, List }) => {
        const newTarea = new Task({name, "list": _idL});
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

    updateTaskState: async (_, { _id, state, important, myDay }, { Task }) => {
        return await Task.findByIdAndUpdate(_id, { state, important, myDay }, { new: true });
    },

    updateNote: async (_, { _id, note }, { Task }) => {
        return Task.findByIdAndUpdate(_id, {note}, {new: true});
    },
    
    updateDueDate: async (_, { _id, dueDate }, { Task }) => {
        return Task.findByIdAndUpdate(_id, { dueDate }, { new: true });
    }
}
export default taskMutations;