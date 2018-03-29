import { Router } from "express";
import { TempleFacade } from "../facade/temple.facade";
import { TempleValidator } from "../validators/temple.validators";

let router: Router = Router();

router.get('/all', TempleFacade.getTemples);

router.get('/get-bookings', TempleFacade.getTempleBookings);

router.post('/book', TempleValidator.validateTempleBooking, TempleFacade.bookTemple);

export let templesRoutes: Router = router;