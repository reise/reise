import { Request, Response, NextFunction } from "express";
import * as path from 'path';
import { Router } from "express";

let router = Router();

router.get('**', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile("index.html", { root: "./dist/public" });
});

export let indexRoute: Router = router;