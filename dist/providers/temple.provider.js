"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const temple_booking_db_model_1 = require("../models/db/temple-booking-db.model");
const temples_json_1 = require("./temples.json");
var TempleProvider;
(function (TempleProvider) {
    function getTemples() {
        return new Promise((resolve, reject) => {
            return resolve(temples_json_1.temples);
            // TemplesCollection.find({}).then((response: Array<Document>) => {
            //     // resolve(response);
            // })
            //     .catch((error: any) => {
            //         reject(error);
            //     })
        });
    }
    TempleProvider.getTemples = getTemples;
    function getTempleBookings() {
        return new Promise((resolve, reject) => {
            temple_booking_db_model_1.TemplesBookingCollection.find({})
                .then((response) => {
                if (!response) {
                    return resolve([]);
                }
                resolve(response.reduce((currList, item) => {
                    currList.push({
                        id: item._id,
                        templeId: item["templeId"],
                        userId: item["userId"],
                        templeName: item["templeName"],
                        userName: item["userName"],
                        price: item["price"]
                    });
                    return currList;
                }, []));
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    TempleProvider.getTempleBookings = getTempleBookings;
    function bookTemple(booking) {
        return new Promise((resolve, reject) => {
            temple_booking_db_model_1.TemplesBookingCollection.create(booking)
                .then((response) => {
                return resolve({
                    id: response._id,
                    templeId: response["templeId"],
                    userId: response["userId"],
                    templeName: response["templeName"],
                    userName: response["userName"],
                    price: response["price"]
                });
            })
                .catch((error) => {
                return reject(false);
            });
        });
    }
    TempleProvider.bookTemple = bookTemple;
})(TempleProvider = exports.TempleProvider || (exports.TempleProvider = {}));
//# sourceMappingURL=temple.provider.js.map