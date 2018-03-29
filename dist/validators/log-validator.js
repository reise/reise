"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_model_1 = require("../models/response.model");
const validation_messages_1 = require("./validation.messages");
var LogValidator;
(function (LogValidator) {
    function validateSaveLog(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.body) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.user.required);
            res.json(response);
            return;
        }
        if (!req.body.url) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.log.url.required);
        }
        if (!req.body.request) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.log.request.required);
        }
        response.status ? next() : res.json(response);
        return;
    }
    LogValidator.validateSaveLog = validateSaveLog;
})(LogValidator = exports.LogValidator || (exports.LogValidator = {}));
//# sourceMappingURL=log-validator.js.map