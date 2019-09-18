import * as mongoose from 'mongoose';
import { Router } from './model.routes';

export abstract class GenericRouter<T extends mongoose.Document> extends Router {

    constructor(protected model: mongoose.Model<T>) {
        super();
        this.path = `/${model.collection.name}`;
    }

}
