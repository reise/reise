"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function connect(url = "mongodb://manojc:1qazZAQ!QAZ@cluster0-shard-00-00-utnpu.mongodb.net:27017,cluster0-shard-00-01-utnpu.mongodb.net:27017,cluster0-shard-00-02-utnpu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin") {
    return new Promise((resolve, reject) => {
        mongoose_1.connect(url, ((err) => {
            if (err) {
                reject(err);
            }
            mongoose_1.connection.
                on('error', (err) => {
                console.log(err);
                return reject(err);
            }).
                once('open', function () {
                return resolve();
            });
        }));
    });
}
exports.connect = connect;
//# sourceMappingURL=db-initialiser.js.map