import * as express from 'express';
import * as mongoose from "mongoose";
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as fs from 'fs';
import * as path from 'path';
import * as connectMongo from 'connect-mongo';
import { registerApiRoutes } from './api-routes';
import { MongoStoreFactory } from 'connect-mongo';
import { connect } from "./db/db-initialiser";

let application: express.Application;
let mongoStore: MongoStoreFactory;

(() => {
    application = express();
    mongoStore = connectMongo(session);
    middleware();
    initialiseLogger();
    registerApiRoutes(application);
    connectDatabase();
})();

function middleware(): void {
    application.use(bodyParser.json());
    application.use(bodyParser.urlencoded({ extended: false }));
    application.use('/', express.static(path.join(__dirname, "./public/")));
    application.use(session({
        secret: "reise",
        resave: false,
        saveUninitialized: true
    }));
}

function initialiseLogger() {
    let logDirectory: string = path.join(__dirname, '../log');
    fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
    let accessLogStream: fs.WriteStream = fs.createWriteStream(
        path.join(logDirectory, 'access.log'), {
            flags: 'a'
        });
    application.use(logger('combined', { stream: accessLogStream }))
}

function connectDatabase(): void {
    connect()
        .then(() => console.log('database conncted!!'))
        .catch((error: any) => console.log(error));
}

export const app: express.Application = application;