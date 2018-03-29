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
            res.json(apiResponse);
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = error;
            res.json(apiResponse);
        });
    }
    TempleFacade.getTemples = getTemples;
    function getTempleBookings(req, res, next) {
        let apiResponse = new response_model_1.Response();
        temple_provider_1.TempleProvider.getTempleBookings()
            .then((response) => {
            apiResponse.data = response;
            res.json(apiResponse);
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = error;
            res.json(apiResponse);
        });
    }
    TempleFacade.getTempleBookings = getTempleBookings;
    function bookTemple(req, res, next) {
        let apiResponse = new response_model_1.Response();
        temple_provider_1.TempleProvider.bookTemple(req.body)
            .then((response) => {
            apiResponse.data = response;
            res.json(apiResponse);
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = error;
            res.json(apiResponse);
        });
    }
    TempleFacade.bookTemple = bookTemple;
})(TempleFacade = exports.TempleFacade || (exports.TempleFacade = {}));
//# sourceMappingURL=temple.facade.js.map