"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bus_validators_1 = require("../validators/bus.validators");
const user_validator_1 = require("../validators/user-validator");
const bus_facade_1 = require("../facade/bus.facade");
const logs_facade_1 = require("../facade/logs.facade");
function redirect(req, res, next) {
    res.redirect('/api/buses/all');
}
let router = express_1.Router();
router.get('/', redirect);
router.get('/all', [
    user_validator_1.UserValidator.validateUser,
    bus_facade_1.BusFacade.getBuses,
    logs_facade_1.LogsFacade.dumpLog
]);
router.get('/:id', [
    user_validator_1.UserValidator.validateUser,
    bus_validators_1.BusValidator.validateGetBusByName,
    bus_facade_1.BusFacade.getBus,
    logs_facade_1.LogsFacade.dumpLog
]);
router.get('/name/:name', [
    user_validator_1.UserValidator.validateUser,
    bus_validators_1.BusValidator.validateGetBusByName,
    bus_facade_1.BusFacade.getBusByName,
    logs_facade_1.LogsFacade.dumpLog
]);
router.put('/create', [
    user_validator_1.UserValidator.validateUser,
    user_validator_1.UserValidator.validateAdmin,
    bus_validators_1.BusValidator.validateCreateBus,
    bus_facade_1.BusFacade.createBus,
    logs_facade_1.LogsFacade.dumpLog
]);
router.post('/update', [
    user_validator_1.UserValidator.validateUser,
    user_validator_1.UserValidator.validateAdmin,
    bus_validators_1.BusValidator.validateUpdateBus,
    bus_facade_1.BusFacade.updateBus,
    logs_facade_1.LogsFacade.dumpLog
]);
router.delete('/:id', [
    user_validator_1.UserValidator.validateUser,
    user_validator_1.UserValidator.validateAdmin,
    bus_validators_1.BusValidator.validateGetBus,
    bus_facade_1.BusFacade.deleteBus,
    logs_facade_1.LogsFacade.dumpLog
]);
exports.busRoutes = router;
//# sourceMappingURL=bus.routes.js.map