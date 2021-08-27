import mongoose from 'mongoose';
import { conf } from './config.js';

mongoose.connect(`mongodb+srv://${conf.MONGODB_USER}:${conf.MONGODB_PASSWORD}@${conf.MONGODB_HOST}/${conf.MONGODB_NAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
    
}).then(dbs => console.log(`> 💿 MongoDB Conected`))
  .catch(err => console.console.log(err))