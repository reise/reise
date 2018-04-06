import { model, Schema, Model, Document } from "mongoose";
import { DbSchema } from "./db-constants";

export let LogsCollection: Model<Document> = model(DbSchema.Collections.Logs, new Schema({
    sessionId: {
        type: String,
        required: [true, "session id is required"],
        // validate: {
        //     validator: (value: string) => {
        //         return !!value &&
        //             value.trim().length == 36 &&
        //             value.split("-").length == 5;
        //     },
        //     message: "session id is not following the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        // }
    },
    method: {
        type: String,
        required: [true, "API method is required"],
        validate: {
            validator: (value: string) => {
                let verbs: Array<string> = ["GET", "POST", "PUT", "HEAD", "DELETE", "PATCH", "OPTIONS"];
                return verbs.indexOf(value.trim().toUpperCase()) > -1;
            },
            message: "invalid HTTP verb"
        }
    },
    url: {
        type: String,
        required: [true, "API Url is required"]
    },
    request: {
        type: Object
    },
    response: {
        type: Object
    },
    metadata: {
        type: Object
    }
}, { timestamps: true, versionKey: false, id: true }));