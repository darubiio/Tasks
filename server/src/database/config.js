import dotenv from 'dotenv';
dotenv.config()

export default {
  DB: {
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
    HOST: process.env.MONGODB_HOST,
    NAME: process.env.MONGODB_NAME,
  }
}