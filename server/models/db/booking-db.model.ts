import { model, Schema, Model, Document } from "mongoose";
import { DbSchema } from "./db-constants";
import { Booking } from "../booking.model";

export interface IBookingDbModel extends Booking, Document {
    id: string;
}

let schema: Schema = new Schema({
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

export let BookingCollection: Model<IBookingDbModel> = 
    model<IBookingDbModel>(DbSchema.Collections.Bookings, schema);