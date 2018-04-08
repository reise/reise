import { UUID } from "./uuid-generator";
import { Model, Document } from "mongoose";

export type Status = "Success" | "Failure" | "Warning";

export class Log {

    public constructor() {
        this.sessionId = UUID.generate();
    }

    id?: string;
    sessionId: string;
    method: string;
    url: string;
    request: any;
    response: any;
    status: Status;
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
            status: dbObject.status,
            metadata: dbObject.metadata
        };
    }
}