import { LogsCollection } from "../models/db/logs-db.model";
import { Log } from "../models/log.model";
import { Page } from "../models/response.model";
import { FilterGroup } from "../models/query-filter.model";
import { DocumentQuery, Document, Query } from "mongoose";

export namespace LogsProvider {

    export function getLogs(filter: FilterGroup, sessionId?: string): Promise<Page<Log>> {

        let page = new Page<Log>();
        page.size = parseInt(filter.size.toString());
        page.page = parseInt(filter.page.toString());

        return new Promise<Page<Log>>((resolve: Function, reject: Function) => {

            let resultQuery: DocumentQuery<Array<Document>, Document> = !sessionId ? LogsCollection.find() : LogsCollection.find({ sessionId: sessionId });
            resultQuery = FilterGroup.generateResultQuery(filter, resultQuery);

            let countQuery: Query<number> = !sessionId ? LogsCollection.count({}) : LogsCollection.count({ sessionId: sessionId });
            countQuery = FilterGroup.generateCountQuery(filter, countQuery);

            resultQuery
                .exec((error: any, response: Array<Document>) => {
                    countQuery.count((countError: any, count: number) => {
                        page.count = count;
                        page.rows = page.rows || [];
                        response.forEach((document: Document) => {
                            page.rows.push(Log.translate(document));
                        });
                        return resolve(page);
                    });
                })
                .catch((error: any) => {
                    reject(error);
                });

        });
    }

    export function getLogsBySessionId(filter: FilterGroup, sessionId: string): Promise<Page<Log>> {
        return getLogs(filter, sessionId);
    }

    export function getLog(id: string): Promise<Log> {
        return new Promise<Log>((resolve: Function, reject: Function) => {
            LogsCollection.findById(id)
                .then((response: Document) => {
                    return resolve(Log.translate(document));
                })
                .catch((error: any) => {
                    return reject(false);
                });
        });
    }

    export function createLog(log: Log): Promise<Log> {
        return new Promise<Log>((resolve: Function, reject: Function) => {
            LogsCollection.create(log)
                .then((response: Document) => {
                    return resolve(Log.translate(document));
                })
                .catch((error: any) => {
                    return reject(false);
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
                    return reject(false);
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
                    return reject(false);
                });
        });
    }
}