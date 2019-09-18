import * as express from 'express';
import { Router } from '../routes/model.routes';
import { enviroment } from '../env/enviroment';

export class Server {

    private app: express.Application = express();

    private initRoutes(routes: Router[]): Promise<any> {
        return new Promise((resolve, reject) => {

            try {

                for (let router of routes) {
                    router.applyroutes(this.app);
                }

                this.app.listen(enviroment.server.port, () => {
                    console.log(enviroment.server.port)
                    resolve(this.app);
                })

            } catch (error) {
                reject(error);
            }

        });
    }

    bootstrap(routes: Router[] = []): Promise<any> {
        return this.initRoutes(routes);
    }

}
