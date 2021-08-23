import { Task } from '../../../database/model/model.js'

const stepsMutations = {

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
export default stepsMutations;