"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_generator_1 = require("./uuid-generator");
class Log {
    constructor() {
        this.sessionId = uuid_generator_1.UUID.generate();
    }
    static translate(dbObject) {
        if (!dbObject) {
            return null;
        }
        return {
            id: dbObject._id.toString(),
            sessionId: dbObject.sessionId,
            url: dbObject.url,
            method: dbObject.method,
            request: dbObject.request,
            response: dbObject.response
        };
    }
}
exports.Log = Log;
//# sourceMappingURL=log.model.js.map