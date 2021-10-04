const Query = {
    tasks: async (_, __, { Task, currentUser }) => {
        return await Task.find({ by: currentUser.id, list: null }).populate('list');
    },
    task: async () => {},
    lists: async (_, __, { List, currentUser }) => {
        return await List.find({ by: currentUser.id }).populate('tasks');
    },
    list: async () => {},
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
        return await Task.find({ by: currentUser.id, completed: true }).populate('list');
    },
    tasksMyDay: async (_, __, { Task, currentUser }) => {
        return await Task.find({ by: currentUser.id, myDay: true }).populate('list');
    }
}
export default Query;