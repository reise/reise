import { model, Schema, Model, Document } from "mongoose";
import { DbSchema } from "./db-constants";
import { Temple } from "../temple.model";

export interface ITempleDbModel extends Temple, Document {
    id: string;
}

let schema: Schema = new Schema({
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
}, { timestamps: true, versionKey: false, id: true })

export let TemplesCollection: Model<ITempleDbModel> = 
    model<ITempleDbModel>(DbSchema.Collections.Temples, schema);