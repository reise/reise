import { Request, Response, NextFunction } from "express";
import * as path from 'path';
import * as express from "express";

let router = express.Router();

router.get('/inline.bundle.js', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile("inline.bundle.js", { root: "./dist/public" });
});

router.get('/polyfills.bundle.js', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile("polyfills.bundle.js", { root: "./dist/public" });
});

router.get('/styles.bundle.js', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile("styles.bundle.js", { root: "./dist/public" });
});

router.get('/vendor.bundle.js', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile("vendor.bundle.js", { root: "./dist/public" });
});

router.get('/main.bundle.js', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile("main.bundle.js", { root: "./dist/public" });
});

router.get('**', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile("index.html", { root: "./dist/public" });
});

export let indexRoute: express.Router = router;