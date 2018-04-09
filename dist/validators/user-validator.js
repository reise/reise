"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_model_1 = require("../models/response.model");
const validation_messages_1 = require("./validation.messages");
var UserValidator;
(function (UserValidator) {
    function validateLogin(req, res, next) {
        let response = new response_model_1.Response();
        if (req.session && req.session.user && req.session.user.id) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.alreadyLoggedIn.required);
            res.json(response);
            return;
        }
        if (!req.body) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.required);
            res.json(response);
            return;
        }
        if (!req.body.username && !req.body.email) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.username.required);
        }
        if (!req.body.password) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.password.required);
        }
        response.status ? next() : res.json(response);
        return;
    }
    UserValidator.validateLogin = validateLogin;
    function validateRegister(req, res, next) {
        let response = new response_model_1.Response();
        if (req.session && req.session.user && req.session.user.id) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.alreadyLoggedIn.required);
            res.json(response);
            return;
        }
        if (!req.body) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.required);
            res.json(response);
            return;
        }
        if (!req.body.username) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.username.required);
        }
        if (!req.body.name) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.name.required);
        }
        if (!req.body.password) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.password.required);
        }
        if (req.body.username.length < 5) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.username.minLength);
        }
        if (req.body.password.length < 6) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.password.minLength);
        }
        let regex = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
        if (!regex.test(req.body.email)) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.email.invalid);
        }
        if (!req.body.city) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.city.required);
        }
        response.status ? next() : res.json(response);
        return;
    }
    UserValidator.validateRegister = validateRegister;
    function validateUser(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.session || !req.session.user || !req.session.user.id) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.userNotFound.required);
        }
        response.status ? next() : res.json(response);
        return;
    }
    UserValidator.validateUser = validateUser;
    function validateAdmin(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.session || !req.session.user || !req.session.user.isAdmin) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.isAdmin.required);
        }
        response.status ? next() : res.json(response);
        return;
    }
    UserValidator.validateAdmin = validateAdmin;
})(UserValidator = exports.UserValidator || (exports.UserValidator = {}));
//# sourceMappingURL=user-validator.js.map