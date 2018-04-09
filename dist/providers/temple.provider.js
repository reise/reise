"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const temple_db_model_1 = require("../models/db/temple-db.model");
const temple_model_1 = require("../models/temple.model");
const db_constants_1 = require("../models/db/db-constants");
var TempleProvider;
(function (TempleProvider) {
    function getTemples() {
        return new Promise((resolve, reject) => {
            // return resolve(temples);
            temple_db_model_1.TemplesCollection.find({}, db_constants_1.DbSchema.Projections.Temple.GetAll)
                .sort({ name: 'asc' })
                .then((response) => {
                resolve(response.reduce((currList, item) => {
                    currList.push(temple_model_1.Temple.translate(item));
                    return currList;
                }, []));
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    TempleProvider.getTemples = getTemples;
    function getTemple(id) {
        return new Promise((resolve, reject) => {
            temple_db_model_1.TemplesCollection.findById(id)
                .then((response) => {
                resolve(temple_model_1.Temple.translate(response));
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    TempleProvider.getTemple = getTemple;
    function createTemple(temple) {
        return new Promise((resolve, reject) => {
            temple_db_model_1.TemplesCollection.create(temple)
                .then((response) => {
                resolve(temple_model_1.Temple.translate(response));
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    TempleProvider.createTemple = createTemple;
    function updateTemple(temple) {
        return new Promise((resolve, reject) => {
            temple_db_model_1.TemplesCollection.findByIdAndUpdate(temple.id, temple, { new: true })
                .then((response) => {
                resolve(temple_model_1.Temple.translate(response));
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    TempleProvider.updateTemple = updateTemple;
    function deleteTemple(id) {
        return new Promise((resolve, reject) => {
            temple_db_model_1.TemplesCollection.findByIdAndRemove(id)
                .then((response) => {
                resolve(true);
            })
                .catch((error) => {
                reject(false);
            });
        });
    }
    TempleProvider.deleteTemple = deleteTemple;
})(TempleProvider = exports.TempleProvider || (exports.TempleProvider = {}));
//# sourceMappingURL=temple.provider.js.map