"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logs_db_model_1 = require("../models/db/logs-db.model");
const log_model_1 = require("../models/log.model");
const response_model_1 = require("../models/response.model");
const query_filter_model_1 = require("../models/query-filter.model");
var LogsProvider;
(function (LogsProvider) {
    function getLogs(filter, sessionId) {
        let page = new response_model_1.Page();
        page.size = !!filter.size ? parseInt(filter.size.toString()) : 10;
        page.page = !!filter.page ? parseInt(filter.page.toString()) : 1;
        return new Promise((resolve, reject) => {
            let resultQuery = !sessionId ?
                logs_db_model_1.LogsCollection.find().select('_id, url') :
                logs_db_model_1.LogsCollection.find({ sessionId: sessionId }).select('_id, url');
            resultQuery = query_filter_model_1.FilterGroup.generateResultQuery(filter, resultQuery);
            let countQuery = !sessionId ? logs_db_model_1.LogsCollection.count({}) : logs_db_model_1.LogsCollection.count({ sessionId: sessionId });
            countQuery = query_filter_model_1.FilterGroup.generateCountQuery(filter, countQuery);
            resultQuery
                .exec((resultError, response) => {
                if (resultError) {
                    reject(resultError.message);
                }
                countQuery.count((countError, count) => {
                    if (countError) {
                        reject(countError.message);
                    }
                    page.count = count;
                    page.rows = page.rows || [];
                    response.forEach((document) => {
                        page.rows.push(log_model_1.Log.translate(document));
                    });
                    return resolve(page);
                });
            })
                .catch((error) => {
                reject(error.message);
            });
        });
    }
    LogsProvider.getLogs = getLogs;
    function getLogsBySessionId(filter, sessionId) {
        return getLogs(filter, sessionId);
    }
    LogsProvider.getLogsBySessionId = getLogsBySessionId;
    function getLog(id) {
        return new Promise((resolve, reject) => {
            logs_db_model_1.LogsCollection.findById(id)
                .then((document) => {
                return resolve(log_model_1.Log.translate(document));
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    LogsProvider.getLog = getLog;
    function createLog(log) {
        return new Promise((resolve, reject) => {
            logs_db_model_1.LogsCollection.create(log)
                .then((document) => {
                return resolve(log_model_1.Log.translate(document));
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    LogsProvider.createLog = createLog;
    function updateLog(log) {
        return new Promise((resolve, reject) => {
            logs_db_model_1.LogsCollection.findByIdAndUpdate(log.id, log)
                .then((response) => {
                return resolve(log_model_1.Log.translate(document));
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    LogsProvider.updateLog = updateLog;
    function deleteLog(id) {
        return new Promise((resolve, reject) => {
            logs_db_model_1.LogsCollection.findByIdAndRemove(id)
                .then((response) => {
                return resolve(true);
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    LogsProvider.deleteLog = deleteLog;
})(LogsProvider = exports.LogsProvider || (exports.LogsProvider = {}));
//# sourceMappingURL=logs.provider.js.map