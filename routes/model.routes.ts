import * as bodyParser from 'body-parser';
import * as express from 'express';

export abstract class Router {

    abstract applyroutes(app: express.Application);
    protected jsonParser = bodyParser.json();
    protected path: string;

}
