import { model, Schema, Model, Document } from "mongoose";
import { DbSchema } from "./db-constants";
import { Booking } from "../booking.model";

export interface IBookingDbModel extends Booking, Document {
    id: string;
}

let schema: Schema = new Schema({
    templeId: {
        type: Schema.Types.ObjectId,
        ref: DbSchema.Collections.Temples,
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
    },
    price: {
        type: String,
        required: [true, "price is required"]
    },
    remarks: {
        type: String
    }
}, { timestamps: true, versionKey: false, id: true });

export let BookingCollection: Model<IBookingDbModel> = 
    model<IBookingDbModel>(DbSchema.Collections.Bookings, schema);