import { TemplesCollection } from "../models/db/temple-db.model";
import { Document } from "mongoose";

export namespace TempleProvider {

    export function getTemples(): Promise<Array<any>> {
        return new Promise<Array<any>>((resolve: Function, reject: Function) => {
            TemplesCollection.find({}).then((response: Array<Document>) => {
                resolve(response);
            })
            .catch((error: any) => {
                reject(error);
            })
        });
    }
}