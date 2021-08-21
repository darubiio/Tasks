import mongoose from 'mongoose';
import conf from './config.js';

mongoose.connect(`mongodb+srv://${conf.DB.USER}:${conf.DB.PASSWORD}@${conf.DB.HOST}/${conf.DB.NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(dbs => console.log(`> 💿 MongoDB Conected`))
  .catch(err => console.console.log(err))