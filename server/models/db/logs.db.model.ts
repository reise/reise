import { model, Schema, Model, Document } from "mongoose";
import { DbSchema } from "../../db/db-constants";

export let LogsCollection: Model<Document> = model(DbSchema.Collections.Logs, new Schema({
    sessiodId: {
        type: String,
        required: [true, "sessionId is required"],
        validate: {
            validator: function (value: string) {
                return !!value &&
                    value.trim().length == 36 &&
                    value.split("-").length == 5;
            },
            message: "session id is not following the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        }
    },
    Url: {
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
}, { timestamps: true, versionKey: false }));