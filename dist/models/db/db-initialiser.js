"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function connect(url = "mongodb+srv://manoj:12345@cluster0.mongodb.net/test") {
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
