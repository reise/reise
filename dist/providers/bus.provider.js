"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bus_model_1 = require("../models/bus.model");
const bus_db_model_1 = require("../models/db/bus-db.model");
const db_constants_1 = require("../models/db/db-constants");
var BusProvider;
(function (BusProvider) {
    function getBuses() {
        return new Promise((resolve, reject) => {
            bus_db_model_1.BusCollection.find({}, db_constants_1.DbSchema.Projections.Bus.GetAll)
                .then((response) => {
                resolve(response.reduce((currList, item) => {
                    currList.push(bus_model_1.Bus.translate(item));
                    return currList;
                }, []));
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    BusProvider.getBuses = getBuses;
    function getBus(id) {
        return new Promise((resolve, reject) => {
            bus_db_model_1.BusCollection.findById(id)
                .then((response) => {
                resolve(bus_model_1.Bus.translate(response));
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    BusProvider.getBus = getBus;
    function getBusByName(name) {
        return new Promise((resolve, reject) => {
            bus_db_model_1.BusCollection.findOne({ name: name })
                .then((response) => {
                resolve(bus_model_1.Bus.translate(response));
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    BusProvider.getBusByName = getBusByName;
    function createBus(bus) {
        return new Promise((resolve, reject) => {
            bus_db_model_1.BusCollection.create(bus)
                .then((response) => {
                resolve(bus_model_1.Bus.translate(response));
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    BusProvider.createBus = createBus;
    function updateBus(bus) {
        return new Promise((resolve, reject) => {
            bus_db_model_1.BusCollection.findByIdAndUpdate(bus.id, bus, { new: true })
                .then((response) => {
                resolve(bus_model_1.Bus.translate(response));
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    BusProvider.updateBus = updateBus;
    function deleteBus(id) {
        return new Promise((resolve, reject) => {
            bus_db_model_1.BusCollection.findByIdAndRemove(id)
                .then((response) => {
                resolve(true);
            })
                .catch((error) => {
                reject(false);
            });
        });
    }
    BusProvider.deleteBus = deleteBus;
})(BusProvider = exports.BusProvider || (exports.BusProvider = {}));
//# sourceMappingURL=bus.provider.js.map