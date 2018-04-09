"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_model_1 = require("../models/response.model");
const validation_messages_1 = require("./validation.messages");
var TempleValidator;
(function (TempleValidator) {
    function validateGetTemple(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.params) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Temple.required);
            res.json(response);
            return;
        }
        if (!req.params.id) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Temple.id);
        }
        response.status ? next() : res.json(response);
        return;
    }
    TempleValidator.validateGetTemple = validateGetTemple;
    function validateCreateTemple(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.body) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Temple.required);
            res.json(response);
            return;
        }
        if (!req.body.name) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Temple.name);
        }
        response.status ? next() : res.json(response);
        return;
    }
    TempleValidator.validateCreateTemple = validateCreateTemple;
    function validateUpdateTemple(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.body) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Temple.required);
            res.json(response);
            return;
        }
        if (!req.body.id) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Temple.id);
        }
        if (!req.body.name) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Temple.name);
        }
        response.status ? next() : res.json(response);
        return;
    }
    TempleValidator.validateUpdateTemple = validateUpdateTemple;
})(TempleValidator = exports.TempleValidator || (exports.TempleValidator = {}));
//# sourceMappingURL=temple.validators.js.map