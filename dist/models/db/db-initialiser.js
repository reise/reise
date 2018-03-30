"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function connect(url = "mongodb://manoj:12345@mycluster0-shard-00-00.mongodb.net:27017,mycluster0-shard-00-01.mongodb.net:27017,mycluster0-shard-00-02.mongodb.net:27017/admin?ssl=true&replicaSet=Mycluster0-shard-0&authSource=admin") {
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
