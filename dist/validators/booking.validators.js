"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_model_1 = require("../models/response.model");
const validation_messages_1 = require("./validation.messages");
var BookingValidator;
(function (BookingValidator) {
    function validateGetBooking(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.params) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Booking.required);
            res.json(response);
            return;
        }
        if (!req.params.id) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Booking.id.required);
        }
        response.status ? next() : res.json(response);
        return;
    }
    BookingValidator.validateGetBooking = validateGetBooking;
    function validateCreateBooking(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.body) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.required);
            res.json(response);
            return;
        }
        if (!req.body.templeId) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Booking.templeId.required);
        }
        if (!req.body.busId) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Booking.busId.required);
        }
        if (!req.body.userId) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Booking.userId.required);
        }
        if (!req.body.journeyDate) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Booking.journeyDate.required);
        }
        if (req.body.journeyDate && !Date.parse(req.body.journeyDate)) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Booking.journeyDate.invalid);
        }
        if (!parseInt(req.body.passengerCount)) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Booking.passengerCount.required);
        }
        response.status ? next() : res.json(response);
        return;
    }
    BookingValidator.validateCreateBooking = validateCreateBooking;
    function validateUpdateBooking(req, res, next) {
        let response = new response_model_1.Response();
        if (!req.body) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.User.required);
            res.json(response);
            return;
        }
        if (!req.body.id) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Booking.id.required);
        }
        if (!req.body.templeId) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Booking.templeId.required);
        }
        if (!req.body.userId) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Booking.userId.required);
        }
        if (!req.body.templeName) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Booking.templeName.required);
        }
        if (!req.body.userName) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Booking.userName.required);
        }
        if (!parseInt(req.body.price)) {
            response.status = false;
            response.messages.push(validation_messages_1.Validations.Booking.price.required);
        }
        response.status ? next() : res.json(response);
        return;
    }
    BookingValidator.validateUpdateBooking = validateUpdateBooking;
})(BookingValidator = exports.BookingValidator || (exports.BookingValidator = {}));
//# sourceMappingURL=booking.validators.js.map