const Query = {
    tasks: async (_, __, { Task, currentUser }) => {
        return await Task.find({ by: currentUser.id }).populate('list');
    },
    lists: async (_, __, { List, currentUser }) => {
        return await List.find({ by: currentUser.id }).populate('tasks');
    },
    currentUser: async (_, __, { currentUser, User }) => {
        if (!currentUser) {
            throw new Error('Not Authenticated')
        }
        return User.findById(currentUser.id);
    }
}
export default Query;