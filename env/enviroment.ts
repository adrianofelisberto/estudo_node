import { config } from 'dotenv-safe';
import { resolve } from 'dns';

config();

export const enviroment = {
    server: {
        port: process.env.PORT_SERVER || 3000
    }
}