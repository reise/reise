import { model, Schema, Model, Document } from "mongoose";
import { DbSchema } from "./db-constants";

export let TemplesBookingCollection: Model<Document> = model(DbSchema.Collections.TempleBookings, new Schema({
    templeId: {
        type: String,
        required: [true, "temple id is required"]
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: DbSchema.Collections.Users,
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