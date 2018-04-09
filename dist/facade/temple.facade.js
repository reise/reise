"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_model_1 = require("../models/response.model");
const temple_provider_1 = require("../providers/temple.provider");
var TempleFacade;
(function (TempleFacade) {
    function getTemples(req, res, next) {
        let apiResponse = new response_model_1.Response();
        temple_provider_1.TempleProvider.getTemples()
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
    TempleFacade.getTemples = getTemples;
    function getTemple(req, res, next) {
        let apiResponse = new response_model_1.Response();
        temple_provider_1.TempleProvider.getTemple(req.params.id)
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
    TempleFacade.getTemple = getTemple;
    function createTemple(req, res, next) {
        let apiResponse = new response_model_1.Response();
        temple_provider_1.TempleProvider.createTemple(req.body)
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
    TempleFacade.createTemple = createTemple;
    function updateTemple(req, res, next) {
        let apiResponse = new response_model_1.Response();
        temple_provider_1.TempleProvider.updateTemple(req.body)
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
    TempleFacade.updateTemple = updateTemple;
    function deleteTemple(req, res, next) {
        let apiResponse = new response_model_1.Response();
        temple_provider_1.TempleProvider.deleteTemple(req.params.id)
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
    TempleFacade.deleteTemple = deleteTemple;
})(TempleFacade = exports.TempleFacade || (exports.TempleFacade = {}));
//# sourceMappingURL=temple.facade.js.map