import { Router, Response, Request, NextFunction } from "express";
import { TempleValidator } from "../validators/temple.validators";
import { UserValidator } from "../validators/user-validator";
import { TempleFacade } from "../facade/temple.facade";
import { LogsFacade } from "../facade/logs.facade";

function redirect(req: Request, res: Response, next: NextFunction) {
    res.redirect('/api/temples/all');
}

let router: Router = Router();

router.get('/', redirect);

router.get('/all', [
    UserValidator.validateUser,
    TempleFacade.getTemples,
    LogsFacade.dumpLog
]);

router.get('/:id', [
    UserValidator.validateUser,
    TempleValidator.validateGetTemple,
    TempleFacade.getTemple,
    LogsFacade.dumpLog
]);

router.put('/create', [
    UserValidator.validateUser,
    UserValidator.validateAdmin,
    TempleValidator.validateCreateTemple,
    TempleFacade.createTemple,
    LogsFacade.dumpLog
]);

router.post('/update', [
    UserValidator.validateUser,
    UserValidator.validateAdmin,
    TempleValidator.validateUpdateTemple,
    TempleFacade.updateTemple,
    LogsFacade.dumpLog
]);

router.delete('/:id', [
    UserValidator.validateUser,
    UserValidator.validateAdmin,
    TempleValidator.validateGetTemple,
    TempleFacade.deleteTemple,
    LogsFacade.dumpLog
]);

export let templesRoutes: Router = router;