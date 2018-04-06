import { Router, Response, Request } from "express";
import { NextFunction } from "express-serve-static-core";
import { BookingValidator } from "../validators/booking.validators";
import { BookingFacade } from "../facade/booking.facade";

let router: Router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => res.redirect('/api/bookings/all'));

router.get('/all', BookingFacade.getBookings);

router.get('/:id', BookingValidator.validateGetBooking, BookingFacade.getBooking);

router.put('/create', BookingValidator.validateCreateBooking, BookingFacade.createBooking);

router.post('/update', BookingValidator.validateUpdateBooking, BookingFacade.updateBooking);

router.delete('/:id', BookingValidator.validateGetBooking, BookingFacade.deleteBooking);

export let bookingRoutes: Router = router;