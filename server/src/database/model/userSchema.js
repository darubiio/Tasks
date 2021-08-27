import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        require: true
    }
});

userSchema.statics.encryptPassword = async (psw) => {
    return await bcrypt.hash(psw, 10);
}

userSchema.statics.comparePassword = async (psw, recivedPsw) => {
    return await bcrypt.compare(psw, recivedPsw);
}

export default mongoose.model('users', userSchema);