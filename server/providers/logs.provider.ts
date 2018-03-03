import { LogsCollection } from "../models/db/logs.db.model";
import { Log } from "../models/log.model";
import { Page } from "../models/response.model";
import { FilterGroup } from "../models/query-filter.model";

export namespace LogsProvider {

    export function getLogs(filter: FilterGroup): Promise<Page<Log>> {
        return Promise.resolve(null);
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