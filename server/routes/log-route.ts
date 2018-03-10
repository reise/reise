import * as express from "express";
import { LogValidator } from "../validators/log-validator";
import { LogsFacade } from "../facade/logs.facade";

let router = express.Router();

router.get('/all', LogValidator.validateSaveLog, LogsFacade.getLogs);

router.get('/all/:sessionId', LogValidator.validateSaveLog, LogsFacade.getLogsBySesionId);

router.get('/:id', LogValidator.validateSaveLog, LogsFacade.getLog);

// router.put('/create', LogValidator.validateSaveLog, LogsFacade.createLog);

// router.post('/update', LogValidator.validateSaveLog, LogsFacade.updateLog);

// router.delete('/:id', LogValidator.validateSaveLog, LogsFacade.deleteLog);

export let logsRoutes: express.Router = router;