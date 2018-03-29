"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_model_1 = require("../models/response.model");
const validation_messages_1 = require("./validation.messages");
var UserValidator;
(function (UserValidator) {
    function validateLogin(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.body) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.user.required);
            res.json(response);
            return;
        }
        if (!req.body.username && !req.body.email) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.user.username.required);
        }
        if (!req.body.password) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.user.password.required);
        }
        response.status ? next() : res.json(response);
        return;
    }
    UserValidator.validateLogin = validateLogin;
    function validateRegister(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.body) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.user.required);
            res.json(response);
            return;
        }
        if (!req.body.username) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.user.username.required);
        }
        if (!req.body.name) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.user.name.required);
        }
        if (!req.body.password) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.user.password.required);
        }
        if (req.body.username.length < 5) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.user.username.minLength);
        }
        if (req.body.password.length < 6) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.user.password.minLength);
        }
        let regex = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
        if (!regex.test(req.body.email)) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.user.email.invalid);
        }
        response.status ? next() : res.json(response);
        return;
    }
    UserValidator.validateRegister = validateRegister;
    function validateLoggedInUser(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.session) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.user.userNotFound);
        }
        response.status ? next() : res.json(response);
        return;
    }
    UserValidator.validateLoggedInUser = validateLoggedInUser;
})(UserValidator = exports.UserValidator || (exports.UserValidator = {}));
//# sourceMappingURL=user-validator.js.map