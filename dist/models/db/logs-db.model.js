"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const db_constants_1 = require("./db-constants");
exports.LogsCollection = mongoose_1.model(db_constants_1.DbSchema.Collections.Logs, new mongoose_1.Schema({
    sessionId: {
        type: String,
        required: [true, "session id is required"],
    },
    method: {
        type: String,
        required: [true, "API method is required"],
        validate: {
            validator: (value) => {
                let verbs = ["GET", "POST", "PUT", "HEAD", "DELETE", "PATCH", "OPTIONS"];
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
//# sourceMappingURL=logs-db.model.js.map