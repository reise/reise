import { LogsCollection } from "../models/db/logs.db.model";
import { Log } from "../models/log.model";
import { Page } from "../models/response.model";
import { FilterGroup } from "../models/query-filter.model";
import { DocumentQuery, Document } from "mongoose";

export namespace LogsProvider {

    export function getLogs(filter: FilterGroup): Promise<Page<Log>> {

        let page = new Page<Log>();
        page.size = filter.size;
        page.page = filter.page;

        return new Promise<Page<Log>>((resolve: Function, reject: Function) => {
            FilterGroup.generateQuery(filter, LogsCollection.find())
                .then((query: DocumentQuery<Document[], Document>) => {
                    query.exec((error: any, response: Array<Document>) => {
                        page.count = filter.count;
                        //translation here
                        // page.rows = response;
                        return resolve(page);
                    })
                    .catch((error: any) => {
                        reject(error);
                    });
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    }

    export function getLogsBySesionId(sessionId: string, filter: FilterGroup): Promise<Page<Log>> {
        return Promise.resolve(null);
    }

    export function saveLog(log: Log): Promise<Log> {
        return Promise.resolve(null);
    }

    export function updateLog(log: Log): Promise<Log> {
        return Promise.resolve(null);
    }

    export function deleteLog(id: string): Promise<boolean> {
        return Promise.resolve(null);
    }
}