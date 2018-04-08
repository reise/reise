import { TemplesCollection, ITempleDbModel } from "../models/db/temple-db.model";
import { Temple } from "../models/temple.model";
import { DbSchema } from "../models/db/db-constants";

export namespace TempleProvider {

    export function getTemples(): Promise<Array<Temple>> {
        return new Promise<Array<Temple>>((resolve: Function, reject: Function) => {
            // return resolve(temples);
            TemplesCollection.find({}, DbSchema.Projections.Temple.GetAll)
                .sort({ name : 'asc'})
                .then((response: Array<ITempleDbModel>) => {
                    resolve(response.reduce((currList: Array<Temple>, item: ITempleDbModel) => {
                        currList.push(Temple.translate(item));
                        return currList;
                    }, []));
                })
                .catch((error: any) => {
                    return reject("failed to serve the request, something went wrong!");
                })
        });
    }

    export function getTemple(id: string): Promise<Temple> {
        return new Promise<Temple>((resolve: Function, reject: Function) => {
            TemplesCollection.findById(id)
                .then((response: ITempleDbModel) => {
                    resolve(Temple.translate(response));
                })
                .catch((error: any) => {
                    return reject("failed to serve the request, something went wrong!");
                });
        });
    }

    export function createTemple(temple: Temple): Promise<Temple> {
        return new Promise<Temple>((resolve: Function, reject: Function) => {
            TemplesCollection.create(temple)
                .then((response: ITempleDbModel) => {
                    resolve(Temple.translate(response));
                })
                .catch((error: any) => {
                    return reject("failed to serve the request, something went wrong!");
                });
        });
    }

    export function updateTemple(temple: Temple): Promise<Temple> {
        return new Promise<Temple>((resolve: Function, reject: Function) => {
            TemplesCollection.findByIdAndUpdate(temple.id, temple, { new: true })
                .then((response: ITempleDbModel) => {
                    resolve(Temple.translate(response));
                })
                .catch((error: any) => {
                    return reject("failed to serve the request, something went wrong!");
                });
        });
    }

    export function deleteTemple(id: string): Promise<boolean> {
        return new Promise<boolean>((resolve: Function, reject: Function) => {
            TemplesCollection.findByIdAndRemove(id)
                .then((response: ITempleDbModel) => {
                    resolve(true);
                })
                .catch((error: any) => {
                    reject(false);
                });
        });
    }
}