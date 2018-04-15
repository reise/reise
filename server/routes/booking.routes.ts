import { Router, Response, Request, NextFunction } from "express";
import { BookingValidator } from "../validators/booking.validators";
import { UserValidator } from "../validators/user-validator";
import { BookingFacade } from "../facade/booking.facade";
import { LogsFacade } from "../facade/logs.facade";
import { UserFacade } from "../facade/user.facade";

function redirect(req: Request, res: Response, next: NextFunction) {
    res.redirect('/api/bookings/all');
}

let router: Router = Router();

router.get('/', redirect);

router.get('/all', [
    UserValidator.validateUser,
    UserValidator.validateAdmin,
    BookingFacade.getBookings,
    LogsFacade.dumpLog
]);

router.get('/:id', [
    UserValidator.validateUser,
    UserValidator.validateAdmin,
    BookingValidator.validateGetBooking,
    BookingFacade.getBooking,
    LogsFacade.dumpLog
]);

router.put('/create', [
    UserValidator.validateUser,
    BookingValidator.validateCreateBooking,
    BookingFacade.createBooking,
    UserFacade.sendEmailVerification,
    LogsFacade.dumpLog
]);

router.post('/update', [
    UserValidator.validateUser,
    UserValidator.validateAdmin,
    BookingValidator.validateUpdateBooking,
    BookingFacade.updateBooking,
    LogsFacade.dumpLog
]);

router.delete('/:id', [
    UserValidator.validateUser,
    UserValidator.validateAdmin,
    BookingValidator.validateGetBooking,
    BookingFacade.deleteBooking,
    LogsFacade.dumpLog
]);

export let bookingRoutes: Router = router;