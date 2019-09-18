import { config } from 'dotenv-safe';
import { Server } from './server/server';

config();

const server = new Server();
server.bootstrap()
.then(server => {
    console.log(`Server running`)
})
.catch(error => {
    process.exit(1);
})
