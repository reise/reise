"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booking_validators_1 = require("../validators/booking.validators");
const user_validator_1 = require("../validators/user-validator");
const booking_facade_1 = require("../facade/booking.facade");
const logs_facade_1 = require("../facade/logs.facade");
function redirect(req, res, next) {
    res.redirect('/api/bookings/all');
}
let router = express_1.Router();
router.get('/', redirect);
router.get('/all', [
    user_validator_1.UserValidator.validateUser,
    user_validator_1.UserValidator.validateAdmin,
    booking_facade_1.BookingFacade.getBookings,
    logs_facade_1.LogsFacade.dumpLog
]);
router.get('/:id', [
    user_validator_1.UserValidator.validateUser,
    user_validator_1.UserValidator.validateAdmin,
    booking_validators_1.BookingValidator.validateGetBooking,
    booking_facade_1.BookingFacade.getBooking,
    logs_facade_1.LogsFacade.dumpLog
]);
router.put('/create', [
    user_validator_1.UserValidator.validateUser,
    booking_validators_1.BookingValidator.validateCreateBooking,
    booking_facade_1.BookingFacade.createBooking,
    logs_facade_1.LogsFacade.dumpLog
]);
router.post('/update', [
    user_validator_1.UserValidator.validateUser,
    user_validator_1.UserValidator.validateAdmin,
    booking_validators_1.BookingValidator.validateUpdateBooking,
    booking_facade_1.BookingFacade.updateBooking,
    logs_facade_1.LogsFacade.dumpLog
]);
router.delete('/:id', [
    user_validator_1.UserValidator.validateUser,
    user_validator_1.UserValidator.validateAdmin,
    booking_validators_1.BookingValidator.validateGetBooking,
    booking_facade_1.BookingFacade.deleteBooking,
    logs_facade_1.LogsFacade.dumpLog
]);
exports.bookingRoutes = router;
//# sourceMappingURL=booking.routes.js.map