import { LogsCollection } from "../models/db/logs-db.model";
import { Log } from "../models/log.model";
import { Page } from "../models/response.model";
import { FilterGroup } from "../models/query-filter.model";
import { DocumentQuery, Document, Query } from "mongoose";

export namespace LogsProvider {

    export function getLogs(filter: FilterGroup, sessionId?: string): Promise<Page<Log>> {

        let page = new Page<Log>();
        page.size = !!filter.size ? parseInt(filter.size.toString()) : 10;
        page.page = !!filter.page ? parseInt(filter.page.toString()) : 1;

        return new Promise<Page<Log>>((resolve: Function, reject: Function) => {

            let resultQuery: DocumentQuery<Array<Document>, Document> = !sessionId ?
                LogsCollection.find().select('_id, url') :
                LogsCollection.find({ sessionId: sessionId }).select('_id, url');

            resultQuery = FilterGroup.generateResultQuery(filter, resultQuery);

            let countQuery: Query<number> = !sessionId ? LogsCollection.count({}) : LogsCollection.count({ sessionId: sessionId });
            countQuery = FilterGroup.generateCountQuery(filter, countQuery);

            resultQuery
                .exec((resultError: any, response: Array<Document>) => {
                    if (resultError) {
                        reject(resultError.message);
                    }
                    countQuery.count((countError: any, count: number) => {
                        if (countError) {
                            reject(countError.message);
                        }
                        page.count = count;
                        page.rows = page.rows || [];
                        response.forEach((document: Document) => {
                            page.rows.push(Log.translate(document));
                        });
                        return resolve(page);
                    });
                })
                .catch((error: any) => {
                    reject(error.message);
                });

        });
    }

    export function getLogsBySessionId(filter: FilterGroup, sessionId: string): Promise<Page<Log>> {
        return getLogs(filter, sessionId);
    }

    export function getLog(id: string): Promise<Log> {
        return new Promise<Log>((resolve: Function, reject: Function) => {
            LogsCollection.findById(id)
                .then((document: Document) => {
                    return resolve(Log.translate(document));
                })
                .catch((error: any) => {
                    return reject("failed to serve the request, something went wrong!");
                });
        });
    }

    export function createLog(log: Log): Promise<Log> {
        return new Promise<Log>((resolve: Function, reject: Function) => {
            LogsCollection.create(log)
                .then((document: Document) => {
                    return resolve(Log.translate(document));
                })
                .catch((error: any) => {
                    return reject("failed to serve the request, something went wrong!");
                });
        });
    }

    export function updateLog(log: Log): Promise<Log> {
        return new Promise<Log>((resolve: Function, reject: Function) => {
            LogsCollection.findByIdAndUpdate(log.id, log)
                .then((response: Document) => {
                    return resolve(Log.translate(document));
                })
                .catch((error: any) => {
                    return reject("failed to serve the request, something went wrong!");
                });
        });
    }

    export function deleteLog(id: string): Promise<boolean> {
        return new Promise<boolean>((resolve: Function, reject: Function) => {
            LogsCollection.findByIdAndRemove(id)
                .then((response: any) => {
                    return resolve(true);
                })
                .catch((error: any) => {
                    return reject("failed to serve the request, something went wrong!");
                });
        });
    }
}