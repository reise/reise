import { TemplesCollection } from "../models/db/temple-db.model";
import { TemplesBookingCollection } from "../models/db/temple-booking-db.model";
import { Document } from "mongoose";
import { temples } from "./temples.json";

export namespace TempleProvider {

    export function getTemples(): Promise<Array<any>> {
        return new Promise<Array<any>>((resolve: Function, reject: Function) => {
            return resolve(temples);
            // TemplesCollection.find({}).then((response: Array<Document>) => {
            //     // resolve(response);
            // })
            //     .catch((error: any) => {
            //         reject(error);
            //     })
        });
    }

    export function getTempleBookings(): Promise<Array<any>> {
        return new Promise<Array<any>>((resolve: Function, reject: Function) => {
            TemplesBookingCollection.find({})
                .then((response: Array<Document>) => {
                    if (!response) {
                        return resolve([]);
                    }
                    resolve(response.reduce((currList: Array<any>, item: any) => {
                        currList.push({
                            id: item._id,
                            templeId: item["templeId"],
                            userId: item["userId"],
                            templeName: item["templeName"],
                            userName: item["userName"],
                            price: item["price"]
                        });
                        return currList;
                    }, []));
                })
                .catch((error: any) => {
                    reject(error);
                })
        });
    }

    export function bookTemple(booking: any) {
        return new Promise<any>((resolve: Function, reject: Function) => {
            TemplesBookingCollection.create(booking)
                .then((response: Document) => {
                    return resolve({
                        id: response._id,
                        templeId: response["templeId"],
                        userId: response["userId"],
                        templeName: response["templeName"],
                        userName: response["userName"],
                        price: response["price"]
                    });
                })
                .catch((error: any) => {
                    return reject(false);
                });
        });
    }
}