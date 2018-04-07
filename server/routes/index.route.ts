import { Request, Response, NextFunction, Router } from "express";
import * as path from 'path';

let router = Router();

router.get('**', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile("index.html", { root: "./dist/public" });
});

export let indexRoute: Router = router;