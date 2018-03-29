"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_model_1 = require("../models/response.model");
const validation_messages_1 = require("./validation.messages");
var TempleValidator;
(function (TempleValidator) {
    function validateTempleBooking(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.body) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.user.required);
            res.json(response);
            return;
        }
        if (!req.body.templeId) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.temple.templeId.required);
        }
        if (!req.body.userId) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.temple.userId.required);
        }
        if (!req.body.templeName) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.temple.templeName.required);
        }
        if (!req.body.userName) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.temple.userName.required);
        }
        response.status ? next() : res.json(response);
        return;
    }
    TempleValidator.validateTempleBooking = validateTempleBooking;
})(TempleValidator = exports.TempleValidator || (exports.TempleValidator = {}));
//# sourceMappingURL=temple.validators.js.map