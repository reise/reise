import { Router } from "express";
import { TempleFacade } from "../facade/temple.facade";

let router: Router = Router();

router.get('/all', TempleFacade.getTemples);

router.post('/book', () => {

});

export let templesRoutes: Router = router;