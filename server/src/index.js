import { server } from './server.js';
import './database/database.js';
const port = process.env.PORT || 4000;

server
  .listen({ port })
  .then(info => console.log(`> 🚀 Server Started ${info.url}`));