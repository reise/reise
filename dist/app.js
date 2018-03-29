"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const logger = require("morgan");
const crypto = require("crypto");
const uuid = require("node-uuid");
const fs = require("fs");
const path = require("path");
const connectMongo = require("connect-mongo");
const api_routes_1 = require("./api-routes");
const db_initialiser_1 = require("./models/db/db-initialiser");
let application;
let mongoStore;
(() => {
    application = express();
    middleware();
    mongoStore = connectMongo(session);
    registerRequestHandlers();
    api_routes_1.registerApiRoutes(application);
    connectDatabase();
})();
function middleware() {
    application.use(bodyParser.json());
    application.use(bodyParser.urlencoded({ extended: false }));
    application.use('/', express.static(path.join(__dirname, "./public/")));
    application.use(session({
        secret: "reise app",
        resave: false,
        saveUninitialized: true,
        genid: (req) => {
            return crypto.createHash('sha256').update(uuid.v1()).update(crypto.randomBytes(256)).digest("hex");
        }
    }));
}
function registerRequestHandlers() {
    let logDirectory = path.join(__dirname, '../log');
    fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
    let accessLogStream = fs.createWriteStream(path.join(logDirectory, 'access.log'), {
        flags: 'a'
    });
    application.use(logger('combined', { stream: accessLogStream }));
}
function connectDatabase() {
    db_initialiser_1.connect()
        .then(() => console.log('database conncted!!'))
        .catch((error) => console.log(error));
}
exports.app = application;
//# sourceMappingURL=app.js.map