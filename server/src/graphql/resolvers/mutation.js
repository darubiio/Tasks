import { Task, List } from '../../database/model/model.js';

const Mutation = {

    // List Mutations

    createList: async (_, { name }) => {    
        const newList = new List({ name });
        return await newList.save();
    },
    updateListName: async (_, {_id, name}) => {
        return await List.findByIdAndUpdate(_id, { name }, { new: true });
    },

    updateListName: async (_, { _id }) => {
        await Task.deleteMany({ "list": _id });
        return await List.findByIdAndDelete(_id);
    },
    
    // Task Mutations

    createTask: async (_, { name }) => {
        const newTarea = new Tarea({ name });
        return await newTarea.save();
    },

    addToList: async (_, { _idT, _idL }) => {
        Task.findByIdAndUpdate(_idT, { "list": _idL });
        return await List.findByIdAndUpdate(_idL, { $push: { tasks: _idT}});
    },

    createTaskInList: async (_, {_idL, name}) => {
        const newTarea = new Tarea({name, "list": _idL});
        await newTarea.save();
        return await List.findByIdAndUpdate(_idL, { $push: { "tasks": newTarea._id } }, { new: true });
    },

    changeListTask: async (_, {idL, idNewL, idT}) => {
        const pullFl = await List.findByIdAndUpdate(idL, { $pull: { tasks: idT}});
        await Task.findByIdAndUpdate(idT, {"list": idNewL});
        pullFl.save();
        return await List.findByIdAndUpdate(idNewL, { $push: { tasks: idT}});
    },

    updateTaskName: async (_, {_id, name}) => {
        return Task.findByIdAndUpdate(_id, { name }, { new: true });
    },
    
    deleteTask: async (_, { _id }) => {
        return await Task.findByIdAndDelete(_id);
    },

    updateTaskState: async (_, {_id, state, important, myDay}) => {
        return await Task.findByIdAndUpdate(_id, { state, important, myDay }, { new: true });
    },

    updateNote: async (_, {_id, note}) => {
        return Task.findByIdAndUpdate(_id, {note}, {new: true});
    },
    
    updateDueDate: async (_id, dueDate) => {
        return Task.findByIdAndUpdate(_id, { dueDate }, { new: true });
    },
    
    // Steps Mutations

    addStep: async (_, { _id, name, state }) => {
        return await Task.findByIdAndUpdate(_id, { $push: { "steps": { name, state }}}, { new: true });
    },

    deleteStep: async (_, { _idT, _idS }) => {
        return await Task.findByIdAndUpdate(_idT, { $pull: {"steps": { "_id": _idS}}});
    },

    updateStepName: async (_, { _idT, _idS, name }) => {
        return await Tarea.findOneAndUpdate({_id:_idT, "steps._id":_idS}, { $set: {"steps.$.name": name}});
    },

    updateStepState: async (_, { _idT, _idS, state }) => {
        return await Tarea.findOneAndUpdate({_id:_idT, "steps._id":_idS}, { $set: {"steps.$.state": state}});
    }
}
export default Mutation;