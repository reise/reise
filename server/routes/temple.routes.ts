import { Router, Response, Request } from "express";
import { TempleFacade } from "../facade/temple.facade";
import { TempleValidator } from "../validators/temple.validators";
import { NextFunction } from "express-serve-static-core";
import { LogsFacade } from "../facade/logs.facade";

let router: Router = Router();

router.get('/', redirect);

router.get('/all', TempleFacade.getTemples, LogsFacade.dumpLog);

router.get('/:id', TempleValidator.validateGetTemple, TempleFacade.getTemple, LogsFacade.dumpLog);

router.put('/create', TempleValidator.validateCreateTemple, TempleFacade.createTemple, LogsFacade.dumpLog);

router.post('/update', TempleValidator.validateUpdateTemple, TempleFacade.updateTemple, LogsFacade.dumpLog);

router.delete('/:id', TempleValidator.validateGetTemple, TempleFacade.deleteTemple, LogsFacade.dumpLog);

function redirect(req: Request, res: Response, next: NextFunction)  {
    res.redirect('/api/temples/all');
}

export let templesRoutes: Router = router;