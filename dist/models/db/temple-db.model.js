"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const db_constants_1 = require("./db-constants");
let schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "temple name is required"]
    },
    imageUrls: {
        type: Array,
        required: [true, "image URL is required"]
    },
    description: {
        type: String
    },
    additionalInfo: {
        type: Object
    }
}, { timestamps: true, versionKey: false, id: true });
exports.TemplesCollection = mongoose_1.model(db_constants_1.DbSchema.Collections.Temples, schema);
//# sourceMappingURL=temple-db.model.js.map