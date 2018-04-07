import { BookingCollection, IBookingDbModel } from "../models/db/booking-db.model";
import { Booking } from "../models/booking.model";

export namespace BookingProvider {

    export function getBookings(): Promise<Array<Booking>> {
        return new Promise<Array<Booking>>((resolve: Function, reject: Function) => {
            BookingCollection.find({}, 'id templeId userId templeName userName price')
                .sort({ name : 'asc'})
                .then((response: Array<IBookingDbModel>) => {
                    resolve(response.reduce((currList: Array<Booking>, item: IBookingDbModel) => {
                        currList.push(Booking.translate(item));
                        return currList;
                    }, []));
                })
                .catch((error: any) => {
                    reject(error.message);
                })
        });
    }

    export function getBooking(id: string): Promise<Booking> {
        return new Promise<Booking>((resolve: Function, reject: Function) => {
            BookingCollection.findById(id)
                .then((response: IBookingDbModel) => {
                    resolve(Booking.translate(response));
                })
                .catch((error: any) => {
                    reject(error.message);
                });
        });
    }

    export function createBooking(booking: Booking): Promise<Booking> {
        return new Promise<Booking>((resolve: Function, reject: Function) => {
            BookingCollection.create(booking)
                .then((response: IBookingDbModel) => {
                    resolve(Booking.translate(response));
                })
                .catch((error: any) => {
                    reject(error.message);
                });
        });
    }

    export function updateBooking(booking: Booking): Promise<Booking> {
        return new Promise<Booking>((resolve: Function, reject: Function) => {
            BookingCollection.findByIdAndUpdate(booking.id, booking, { new: true })
                .then((response: IBookingDbModel) => {
                    resolve(Booking.translate(response));
                })
                .catch((error: any) => {
                    reject(error.message);
                });
        });
    }

    export function deleteBooking(id: string): Promise<boolean> {
        return new Promise<boolean>((resolve: Function, reject: Function) => {
            BookingCollection.findByIdAndRemove(id)
                .then((response: IBookingDbModel) => {
                    resolve(true);
                })
                .catch((error: any) => {
                    reject(false);
                });
        });
    }
}