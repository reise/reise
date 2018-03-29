"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const db_constants_1 = require("./db-constants");
exports.TemplesBookingCollection = mongoose_1.model(db_constants_1.DbSchema.Collections.TempleBookings, new mongoose_1.Schema({
    templeId: {
        type: String,
        required: [true, "temple id is required"]
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: db_constants_1.DbSchema.Collections.Users,
        required: [true, "user id is required"]
    },
    templeName: {
        type: String,
        required: [true, "temple name is required"]
    },
    userName: {
        type: String,
        required: [true, "user name is required"]
    }
}, { timestamps: true, versionKey: false }));
//# sourceMappingURL=temple-booking-db.model.js.map