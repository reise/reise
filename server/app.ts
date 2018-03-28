import * as express from 'express';
import * as mongoose from "mongoose";
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as crypto from "crypto";
import * as uuid from "node-uuid";
import * as fs from 'fs';
import * as path from 'path';
import * as connectMongo from 'connect-mongo';
import { registerApiRoutes } from './api-routes';
import { MongoStoreFactory } from 'connect-mongo';
import { connect } from "./models/db/db-initialiser";

let application: express.Application;
let mongoStore: MongoStoreFactory;

(() => {
    application = express();
    middleware();
    mongoStore = connectMongo(session);
    registerRequestHandlers();
    registerApiRoutes(application);
    connectDatabase();
})();

function middleware(): void {
    application.use(bodyParser.json());
    application.use(bodyParser.urlencoded({ extended: false }));
    application.use('/', express.static(path.join(__dirname, "./public/")));
    application.use(session({
        secret: "reise app",
        resave: false,
        saveUninitialized: true,
        genid: (req: express.Request) => {
            return crypto.createHash('sha256').update(uuid.v1()).update(crypto.randomBytes(256)).digest("hex");
        }
    }));
}

function registerRequestHandlers() {
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