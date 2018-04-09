"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_model_1 = require("../models/response.model");
const bus_provider_1 = require("../providers/bus.provider");
var BusFacade;
(function (BusFacade) {
    function getBuses(req, res, next) {
        let apiResponse = new response_model_1.Response();
        bus_provider_1.BusProvider.getBuses()
            .then((response) => {
            apiResponse.data = response;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        });
    }
    BusFacade.getBuses = getBuses;
    function getBus(req, res, next) {
        let apiResponse = new response_model_1.Response();
        bus_provider_1.BusProvider.getBus(req.params.id)
            .then((response) => {
            apiResponse.data = response;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        });
    }
    BusFacade.getBus = getBus;
    function getBusByName(req, res, next) {
        let apiResponse = new response_model_1.Response();
        bus_provider_1.BusProvider.getBusByName(req.params.name)
            .then((response) => {
            apiResponse.data = response;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        });
    }
    BusFacade.getBusByName = getBusByName;
    function createBus(req, res, next) {
        let apiResponse = new response_model_1.Response();
        bus_provider_1.BusProvider.createBus(req.body)
            .then((response) => {
            apiResponse.data = response;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        });
    }
    BusFacade.createBus = createBus;
    function updateBus(req, res, next) {
        let apiResponse = new response_model_1.Response();
        bus_provider_1.BusProvider.updateBus(req.body)
            .then((response) => {
            apiResponse.data = response;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        });
    }
    BusFacade.updateBus = updateBus;
    function deleteBus(req, res, next) {
        let apiResponse = new response_model_1.Response();
        bus_provider_1.BusProvider.deleteBus(req.query.id)
            .then((response) => {
            apiResponse.data = response;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        });
    }
    BusFacade.deleteBus = deleteBus;
})(BusFacade = exports.BusFacade || (exports.BusFacade = {}));
//# sourceMappingURL=bus.facade.js.map