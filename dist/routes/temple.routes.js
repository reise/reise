"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const temple_facade_1 = require("../facade/temple.facade");
const temple_validators_1 = require("../validators/temple.validators");
let router = express_1.Router();
router.get('/all', temple_facade_1.TempleFacade.getTemples);
router.get('/get-bookings', temple_facade_1.TempleFacade.getTempleBookings);
router.post('/book', temple_validators_1.TempleValidator.validateTempleBooking, temple_facade_1.TempleFacade.bookTemple);
exports.templesRoutes = router;
//# sourceMappingURL=temple.routes.js.map