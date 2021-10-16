const Query = {
    tasks: async (_, __, { Task, currentUser }) => {
        return await Task.find({ by: currentUser.id, list: null }).populate('list');
    },
    task: async (_, { _id }, { Task }) => {
        return await Task.findById(_id).populate('list');
     },
    
    lists: async (_, __, { List, currentUser }) => {
        return await List.find({ by: currentUser.id }).populate('tasks');
    },
    list: async (_, { _id }, { List }) => {
        return await List.findById(_id).populate('tasks');
     },
    
    currentUser: async (_, __, { currentUser, User }) => {
        if (!currentUser) {
            throw new Error('Not Authenticated')
        }
        return User.findById(currentUser.id);
    },
    tasksImportants: async (_, __, { Task, currentUser }) => {
        return await Task.find({ by: currentUser.id, important: true }).populate('list');
    },
    tasksCompleted: async (_, __, { Task, currentUser }) => {
        return await Task.find({ by: currentUser.id, state: true }).populate('list');
    },
    tasksMyDay: async (_, __, { Task, currentUser }) => {
        return await Task.find({ by: currentUser.id, myDay: true }).populate('list');
    }
}
export default Query;