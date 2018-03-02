import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import * as connectMongo from 'connect-mongo';
import * as mongoose from "mongoose";
import { registerApiRoutes } from './api-routes';

class App {

    public express: express.Application;
    private MongoStore = connectMongo(session);

    constructor() {
        this.express = express();
        this.middleware();
        registerApiRoutes(this.express);
        // this.connectDatabase();
    }

    // Configure Express middleware.
    private middleware(): void {

        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use('/', express.static(path.join(__dirname, "./public/")));

        this.express.use(session({
            secret: "mygroceryboy",
            resave: false,
            saveUninitialized: true
        }));
    }

    private connectDatabase() {
    }
}

export default new App().express;