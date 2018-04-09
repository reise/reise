"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const db_constants_1 = require("./db-constants");
let schema = new mongoose_1.Schema({
    number: {
        type: String,
        required: [true, "bus number is required"]
    },
    name: {
        type: String,
        required: [true, "bus name is required"]
    },
    arrivalTime: {
        type: String,
        required: [true, "arrival time is required"]
    },
    departureTime: {
        type: String,
        required: [true, "departure time is required"]
    },
    sourceStation: {
        type: String,
        required: [true, "source name is required"]
    },
    destinationStation: {
        type: String,
        required: [true, "destination name is required"]
    },
    fare: {
        type: Number,
        required: [true, "fare is required"]
    },
    totalSeats: {
        type: Number,
        required: [true, "total seat count is required"]
    },
    availability: [{
            date: {
                type: Date,
                required: [true, "availability date is required"]
            },
            availableSeats: {
                type: Number,
                required: [true, "available seats is required"]
            }
        }],
    details: {
        type: String
    },
    additionalInfo: {
        type: Object
    }
}, { timestamps: true, versionKey: false, id: true });
exports.BusCollection = mongoose_1.model(db_constants_1.DbSchema.Collections.Buses, schema);
//# sourceMappingURL=bus-db.model.js.map