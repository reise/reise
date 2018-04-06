import { Router, Response, Request } from "express";
import { TempleFacade } from "../facade/temple.facade";
import { TempleValidator } from "../validators/temple.validators";
import { NextFunction } from "express-serve-static-core";

let router: Router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => res.redirect('/api/temples/all'));

router.get('/all', TempleFacade.getTemples);

router.get('/:id', TempleValidator.validateGetTemple, TempleFacade.getTemple);

router.put('/create', TempleValidator.validateCreateTemple, TempleFacade.createTemple);

router.post('/update', TempleValidator.validateUpdateTemple, TempleFacade.updateTemple);

router.delete('/:id', TempleValidator.validateGetTemple, TempleFacade.deleteTemple);

export let templesRoutes: Router = router;