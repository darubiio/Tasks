import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://darubio:openitsesame@clusterfree.p1k86.mongodb.net/todolist?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(db => console.log('> 💿 MongoDB Conected'))
  .catch(err => console.console.log(err))