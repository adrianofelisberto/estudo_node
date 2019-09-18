import { config } from 'dotenv-safe';
import { Server } from './server/server';
import { creditCardRoutes } from './routes/credit-card.routes';

config();

const server = new Server();
server.bootstrap([
    creditCardRoutes
])
.then(server => {
    console.log(`Server running`)
})
.catch(error => {
    console.log(error)
    process.exit(1);
})
