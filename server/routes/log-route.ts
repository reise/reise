import * as express from "express";
import { LogValidator } from "../validators/log-validator";
import { LogsFacade } from "../facade/logs.facade";

let router = express.Router();

router.post('/all', LogsFacade.getLogs);

router.get('/all/:sessionId', LogValidator.validateGetSessionLogs, LogsFacade.getLogsBySesionId);

router.get('/:id', LogValidator.validateGetLog, LogsFacade.getLog);

// router.put('/create', LogValidator.validateSaveLog, LogsFacade.createLog);

// router.post('/update', LogValidator.validateSaveLog, LogsFacade.updateLog);

// router.delete('/:id', LogValidator.validateSaveLog, LogsFacade.deleteLog);

export let logsRoutes: express.Router = router;