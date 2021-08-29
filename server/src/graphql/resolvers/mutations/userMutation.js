import jwt from 'jsonwebtoken';

const userMutations = {

  register: async (_, { username, password }, { User }) => {
    const newUser = new User({
      username,
      password: await User.encryptPassword(password)
    });
    return await newUser.save();
  },
  
  login: async (_, { username, password }, { User }) => {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('Invalid User');
    }
    const pswMatch = await User.comparePassword(password, user.password);
    if (!pswMatch) {
      throw new Error('Invalid Password');
    }
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.SECRET,
      { expiresIn: "1h" }
    );
    return { token, user }
  }
};
export default userMutations;