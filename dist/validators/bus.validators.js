"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_model_1 = require("../models/response.model");
const validation_messages_1 = require("./validation.messages");
var BusValidator;
(function (BusValidator) {
    function validateGetBus(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.params) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.required);
            res.json(response);
            return;
        }
        if (!req.params.id) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.id.required);
        }
        response.status ? next() : res.json(response);
        return;
    }
    BusValidator.validateGetBus = validateGetBus;
    function validateGetBusByName(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.params) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.required);
            res.json(response);
            return;
        }
        if (!req.params.name) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.name.required);
        }
        response.status ? next() : res.json(response);
        return;
    }
    BusValidator.validateGetBusByName = validateGetBusByName;
    function validateCreateBus(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.body) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.required);
            res.json(response);
            return;
        }
        if (!req.body.name) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.name.required);
        }
        if (!req.body.number) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.number.required);
        }
        if (!req.body.arrivalTime) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.arrivalTime.required);
        }
        if (!req.body.departureTime) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.departureTime.required);
        }
        if (!req.body.sourceStation) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.sourceStation.required);
        }
        if (!req.body.destinationStation) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.destinationStation.required);
        }
        if (!req.body.fare) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.fare.required);
        }
        if (!req.body.totalSeats) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.totalSeats.required);
        }
        response.status ? next() : res.json(response);
        return;
    }
    BusValidator.validateCreateBus = validateCreateBus;
    function validateUpdateBus(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.body) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.required);
            res.json(response);
            return;
        }
        if (!req.body.id) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.id.required);
        }
        if (!req.body.name) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.name.required);
        }
        if (!req.body.number) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.number.required);
        }
        if (!req.body.arrivalTime) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.arrivalTime.required);
        }
        if (!req.body.departureTime) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.departureTime.required);
        }
        if (!req.body.sourceStation) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.sourceStation.required);
        }
        if (!req.body.destinationStation) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.destinationStation.required);
        }
        if (!req.body.fare) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.fare.required);
        }
        if (!req.body.totalSeats) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Bus.totalSeats.required);
        }
        response.status ? next() : res.json(response);
        return;
    }
    BusValidator.validateUpdateBus = validateUpdateBus;
})(BusValidator = exports.BusValidator || (exports.BusValidator = {}));
//# sourceMappingURL=bus.validators.js.map