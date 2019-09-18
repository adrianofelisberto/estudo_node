import * as mongoose from 'mongoose';
import * as express from 'express';
import { Router } from './model.routes';
import { HttpStatusEnum } from '../util/http-status.enum';

export abstract class GenericRouter<T extends mongoose.Document> extends Router {

    constructor(protected model: mongoose.Model<T>) {
        super();
        this.path = `/${model.collection.name}`;
    }

    save = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        let document = new this.model(req.body);
        document.save()
            .then(response => {
                if (response) {
                    res.json(response)
                }
            })
            .catch(next)
    }

    findAll = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        this.model.find()
            .then(response => {
                res.status(HttpStatusEnum.SUCESSO).json(response);
            })
            .catch(next)
    }

}
