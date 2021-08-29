const stepsMutations = {

    addStep: async (_, { _idT, name, state }, { Task }) => {
        return await Task.findByIdAndUpdate(_idT, { $push: { "steps": { name, state }}}, { new: true });
    },

    deleteStep: async (_, { _idT, _idS }, { Task }) => {
        return await Task.findByIdAndUpdate(_idT, { $pull: {"steps": { "_id": _idS}}});
    },

    updateStepName: async (_, { _idT, _idS, name }, { Task }) => {
        return await Task.findOneAndUpdate({_id:_idT, "steps._id":_idS}, { $set: {"steps.$.name": name}});
    },

    updateStepState: async (_, { _idT, _idS, state }, { Task }) => {
        return await Task.findOneAndUpdate({_id:_idT, "steps._id":_idS}, { $set: {"steps.$.state": state}});
    }
}
export default stepsMutations;