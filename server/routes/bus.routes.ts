import { Router, Response, Request, NextFunction } from "express";
import { BusValidator } from "../validators/bus.validators";
import { UserValidator } from "../validators/user-validator";
import { BusFacade } from "../facade/bus.facade";
import { LogsFacade } from "../facade/logs.facade";

function redirect(req: Request, res: Response, next: NextFunction) {
    res.redirect('/api/buses/all');
}

let router: Router = Router();

router.get('/', redirect);

router.get('/all', [
    UserValidator.validateUser,
    BusFacade.getBuses,
    LogsFacade.dumpLog
]);

router.get('/:id', [
    UserValidator.validateUser,
    BusValidator.validateGetBusByName,
    BusFacade.getBus,
    LogsFacade.dumpLog
]);

router.get('/name/:name', [
    UserValidator.validateUser,
    BusValidator.validateGetBusByName,
    BusFacade.getBusByName,
    LogsFacade.dumpLog
]);

router.put('/create', [
    UserValidator.validateUser,
    UserValidator.validateAdmin,
    BusValidator.validateCreateBus,
    BusFacade.createBus,
    LogsFacade.dumpLog
]);

router.post('/update', [
    UserValidator.validateUser,
    UserValidator.validateAdmin,
    BusValidator.validateUpdateBus,
    BusFacade.updateBus,
    LogsFacade.dumpLog
]);

router.delete('/:id', [
    UserValidator.validateUser,
    UserValidator.validateAdmin,
    BusValidator.validateGetBus,
    BusFacade.deleteBus,
    LogsFacade.dumpLog
]);

export let busRoutes: Router = router;