"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const db_constants_1 = require("./db-constants");
let schema = new mongoose_1.Schema({
    temple: {
        type: Object,
        required: [true, "temple details are required"]
    },
    user: {
        type: Object,
        required: [true, "user details is required"]
    },
    bus: {
        type: Object,
        required: [true, "bus details are required"]
    },
    passengerCount: {
        type: Number,
        required: [true, "passenger count is required"]
    },
    journeyDate: {
        type: Date,
        required: [true, "journey date is required"]
    },
    remarks: {
        type: String
    },
    additionalInfo: {
        type: Object
    }
}, { timestamps: true, versionKey: false, id: true });
exports.BookingCollection = mongoose_1.model(db_constants_1.DbSchema.Collections.Bookings, schema);
//# sourceMappingURL=booking-db.model.js.map