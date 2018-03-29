"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const log_validator_1 = require("../validators/log-validator");
const logs_facade_1 = require("../facade/logs.facade");
let router = express.Router();
router.post('/all', logs_facade_1.LogsFacade.getLogs);
router.get('/all/:sessionId', log_validator_1.LogValidator.validateSaveLog, logs_facade_1.LogsFacade.getLogsBySesionId);
router.get('/:id', log_validator_1.LogValidator.validateSaveLog, logs_facade_1.LogsFacade.getLog);
// router.put('/create', LogValidator.validateSaveLog, LogsFacade.createLog);
// router.post('/update', LogValidator.validateSaveLog, LogsFacade.updateLog);
// router.delete('/:id', LogValidator.validateSaveLog, LogsFacade.deleteLog);
exports.logsRoutes = router;
//# sourceMappingURL=log-route.js.map