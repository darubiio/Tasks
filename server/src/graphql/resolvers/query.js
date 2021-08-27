const Query = {
    tasks: async (_, __, { Task }) => {
        return await Task.find().populate('list');
    },
    lists: async (_, __, { List }) => {
        return await List.find().populate('tasks');
    },
    currentUser: async (_, __, { user, User }) => {
        if (!user) {
            throw new Error('Not Authenticated')
        }
        return User.findById(user.id);
    }
}
export default Query;