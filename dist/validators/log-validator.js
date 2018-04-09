"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_model_1 = require("../models/response.model");
const validation_messages_1 = require("./validation.messages");
var LogValidator;
(function (LogValidator) {
    function validateGetLog(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.params) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Log.required);
            res.json(response);
            return;
        }
        if (!req.params.id) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Log.id.required);
        }
        response.status ? next() : res.json(response);
        return;
    }
    LogValidator.validateGetLog = validateGetLog;
    function validateGetSessionLogs(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.params) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Log.required);
            res.json(response);
            return;
        }
        if (!req.params.sessionId) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Log.sessionId.required);
        }
        response.status ? next() : res.json(response);
        return;
    }
    LogValidator.validateGetSessionLogs = validateGetSessionLogs;
    function validateSaveLog(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.body) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.required);
            res.json(response);
            return;
        }
        if (!req.body.url) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Log.url.required);
        }
        if (!req.body.request) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Log.request.required);
        }
        response.status ? next() : res.json(response);
        return;
    }
    LogValidator.validateSaveLog = validateSaveLog;
})(LogValidator = exports.LogValidator || (exports.LogValidator = {}));
//# sourceMappingURL=log-validator.js.map