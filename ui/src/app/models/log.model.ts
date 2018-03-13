import { Model, Document } from "mongoose";

export class Log {

    public constructor() {
    }

    id?: string;
    sessionId: string;
    method: string;
    url: string;
    request: any;
    response: any;
    metadata?: any;

    public static translate(dbObject: any): Log {
        if (!dbObject) {
            return null;
        }

        return {
            id: dbObject._id.toString(),
            sessionId: dbObject.sessionId,
            url: dbObject.url,
            method: dbObject.method,
            request: dbObject.request,
            response: dbObject.response,
            metadata: dbObject.metadata
        };
    }
}