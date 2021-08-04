import { server } from './server.js';
import './database/database.js';

server.listen().then(({ url }) => {
  console.log(`> 🚀 Server Started at ${url}`);
});