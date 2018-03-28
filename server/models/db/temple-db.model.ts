import { model, Schema, Model, Document } from "mongoose";
import { DbSchema } from "./db-constants";

export let TemplesCollection: Model<Document> = model(DbSchema.Collections.Temples, new Schema({
        
}, { timestamps: true, versionKey: false }));