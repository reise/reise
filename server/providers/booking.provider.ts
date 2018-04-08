import { BookingCollection, IBookingDbModel } from "../models/db/booking-db.model";
import { Booking, BookingSummary } from "../models/booking.model";
import { DbSchema } from "../models/db/db-constants";

export namespace BookingProvider {

    export function getBookings(): Promise<Array<BookingSummary>> {
        return new Promise<Array<BookingSummary>>((resolve: Function, reject: Function) => {
            BookingCollection.find({}, DbSchema.Projections.Booking.GetAll)
                .sort({ name: 'asc' })
                .then((response: Array<IBookingDbModel>) => {
                    resolve(response.reduce((currList: Array<BookingSummary>, item: IBookingDbModel) => {
                        currList.push(BookingSummary.translate(item));
                        return currList;
                    }, []));
                })
                .catch((error: any) => {
                    return reject("failed to serve the request, something went wrong!");
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
                    return reject("failed to serve the request, something went wrong!");
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
                    return reject("failed to serve the request, something went wrong!");
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
                    return reject("failed to serve the request, something went wrong!");
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