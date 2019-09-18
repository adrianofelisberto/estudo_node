import * as express from 'express';
import { GenericRouter } from './generic.routes';
import { CreditCard } from '../model/credit-card.model';

class CreditCardRoutes extends GenericRouter<CreditCard> {
    
    constructor() {
        super(CreditCard);
    }

    applyroutes(app: express.Application) {
        app.post(this.path, this.jsonParser, this.save);
        app.get(this.path, this.findAll);
    }

}

export const creditCardRoutes = new CreditCardRoutes();
