import { Router } from "express";
import { UserValidator } from "../validators/user-validator";
import { LogValidator } from "../validators/log-validator";
import { LogsFacade } from "../facade/logs.facade";

let router = Router();

router.post('/all', [
    UserValidator.validateUser,
    LogsFacade.getLogs
]);

router.get('/all/:sessionId', [
    UserValidator.validateUser,
    LogValidator.validateGetSessionLogs,
    LogsFacade.getLogsBySesionId
]);

router.get('/:id', [
    UserValidator.validateUser,
    LogValidator.validateGetLog,
    LogsFacade.getLog
]);

// router.put('/create', [
//     UserValidator.validateUser, 
//     LogValidator.validateSaveLog, 
//     LogsFacade.createLog
// ]);

// router.post('/update', [
//     UserValidator.validateUser, 
//     LogValidator.validateSaveLog, 
//     LogsFacade.updateLog
// ]);

// router.delete('/:id', [
//     UserValidator.validateUser, 
//     LogValidator.validateSaveLog, 
//     LogsFacade.deleteLog
// ]);

export let logsRoutes: Router = router;