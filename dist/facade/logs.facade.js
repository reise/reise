"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_model_1 = require("../models/response.model");
const logs_provider_1 = require("../providers/logs.provider");
var LogsFacade;
(function (LogsFacade) {
    function getLogs(req, res, next) {
        let apiResponse = new response_model_1.Response();
        logs_provider_1.LogsProvider.getLogs(req.body)
            .then((response) => {
            apiResponse.data = response;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        });
    }
    LogsFacade.getLogs = getLogs;
    function getLogsBySesionId(req, res, next) {
        let apiResponse = new response_model_1.Response();
        logs_provider_1.LogsProvider.getLogsBySessionId(req.params.sessionId, req.body)
            .then((response) => {
            apiResponse.data = response;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        });
    }
    LogsFacade.getLogsBySesionId = getLogsBySesionId;
    function getLog(req, res, next) {
        let apiResponse = new response_model_1.Response();
        logs_provider_1.LogsProvider.getLog(req.params.id)
            .then((response) => {
            apiResponse.data = response;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        });
    }
    LogsFacade.getLog = getLog;
    function createLog(req, res, next) {
        let apiResponse = new response_model_1.Response();
        logs_provider_1.LogsProvider.createLog(req.body)
            .then((response) => {
            apiResponse.data = response;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        });
    }
    LogsFacade.createLog = createLog;
    function updateLog(req, res, next) {
        let apiResponse = new response_model_1.Response();
        logs_provider_1.LogsProvider.updateLog(req.body)
            .then((response) => {
            apiResponse.data = response;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        });
    }
    LogsFacade.updateLog = updateLog;
    function deleteLog(req, res, next) {
        let apiResponse = new response_model_1.Response();
        logs_provider_1.LogsProvider.deleteLog(req.params.id)
            .then((response) => {
            apiResponse.data = response;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        });
    }
    LogsFacade.deleteLog = deleteLog;
    //middleware function used by other routes to dump logs.
    function dumpLog(req, res, next) {
        if (!req.session) {
            res.json((res.locals && res.locals.apiResponse) ? res.locals.apiResponse : null);
        }
        res.locals.apiResponse.sessionID = req.sessionID;
        let log = {
            sessionId: req.sessionID || res.locals.sessionId,
            method: req.method,
            url: `${req.baseUrl}${req.url}`,
            request: req.body,
            response: (res.locals && res.locals.apiResponse) ? res.locals.apiResponse : null,
            status: res.locals.apiResponse.status ? "Success" : "Failure",
            metadata: res.locals.metadata
        };
        //async log dump
        logs_provider_1.LogsProvider.createLog(log);
        res.json(log.response);
    }
    LogsFacade.dumpLog = dumpLog;
})(LogsFacade = exports.LogsFacade || (exports.LogsFacade = {}));
//# sourceMappingURL=logs.facade.js.map