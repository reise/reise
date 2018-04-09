import { Bus } from "../models/bus.model";
import { BusCollection, IBusDbModel } from "../models/db/bus-db.model";
import { DbSchema } from "../models/db/db-constants";

export namespace BusProvider {

    export function getBuses(): Promise<Array<Bus>> {
        return new Promise<Array<Bus>>((resolve: Function, reject: Function) => {
            BusCollection.find({}, DbSchema.Projections.Bus.GetAll)
                .then((response: Array<IBusDbModel>) => {
                    resolve(response.reduce((currList: Array<Bus>, item: IBusDbModel) => {
                        currList.push(Bus.translate(item));
                        return currList;
                    }, []));
                })
                .catch((error: any) => {
                    return reject("failed to serve the request, something went wrong!");
                })
        });
    }

    export function getBus(id: string): Promise<Bus> {
        return new Promise<Bus>((resolve: Function, reject: Function) => {
            BusCollection.findById(id)
                .then((response: IBusDbModel) => {
                    resolve(Bus.translate(response));
                })
                .catch((error: any) => {
                    return reject("failed to serve the request, something went wrong!");
                });
        });
    }

    export function getBusByName(name: string): Promise<Bus> {
        return new Promise<Bus>((resolve: Function, reject: Function) => {
            BusCollection.findOne({name: name})
                .then((response: IBusDbModel) => {
                    resolve(Bus.translate(response));
                })
                .catch((error: any) => {
                    return reject("failed to serve the request, something went wrong!");
                });
        });
    }

    export function createBus(bus: Bus): Promise<Bus> {
        return new Promise<Bus>((resolve: Function, reject: Function) => {
            BusCollection.create(bus)
                .then((response: IBusDbModel) => {
                    resolve(Bus.translate(response));
                })
                .catch((error: any) => {
                    return reject("failed to serve the request, something went wrong!");
                });
        });
    }

    export function updateBus(bus: Bus): Promise<Bus> {
        return new Promise<Bus>((resolve: Function, reject: Function) => {
            BusCollection.findByIdAndUpdate(bus.id, bus, { new: true })
                .then((response: IBusDbModel) => {
                    resolve(Bus.translate(response));
                })
                .catch((error: any) => {
                    return reject("failed to serve the request, something went wrong!");
                });
        });
    }

    export function deleteBus(id: string): Promise<boolean> {
        return new Promise<boolean>((resolve: Function, reject: Function) => {
            BusCollection.findByIdAndRemove(id)
                .then((response: IBusDbModel) => {
                    resolve(true);
                })
                .catch((error: any) => {
                    reject(false);
                });
        });
    }
}