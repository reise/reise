"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_validator_1 = require("../validators/user-validator");
const log_validator_1 = require("../validators/log-validator");
const logs_facade_1 = require("../facade/logs.facade");
let router = express_1.Router();
router.post('/all', [
    user_validator_1.UserValidator.validateUser,
    logs_facade_1.LogsFacade.getLogs
]);
router.get('/all/:sessionId', [
    user_validator_1.UserValidator.validateUser,
    log_validator_1.LogValidator.validateGetSessionLogs,
    logs_facade_1.LogsFacade.getLogsBySesionId
]);
router.get('/:id', [
    user_validator_1.UserValidator.validateUser,
    log_validator_1.LogValidator.validateGetLog,
    logs_facade_1.LogsFacade.getLog
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
exports.logsRoutes = router;
//# sourceMappingURL=log.route.js.map