import { model, Schema, Model, Document } from "mongoose";
import { DbSchema } from "./db-constants";
import { Bus } from "../bus.model";

export interface IBusDbModel extends Bus, Document {
    id: string;
}

let schema: Schema = new Schema({
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
    availableSeats: {
        type: Number,
        required: [true, "available seats is required"]
    },
    totalSeats: {
        type: Number,
        required: [true, "total seats is required"]
    },
    details: {
        type: String
    },
    additionalInfo: {
        type: Object
    }
}, { timestamps: true, versionKey: false, id: true });

export let BusCollection: Model<IBusDbModel> = model<IBusDbModel>(DbSchema.Collections.Buses, schema);