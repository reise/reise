import { IBookingDbModel } from "./db/booking-db.model";
import { Temple } from "./temple.model";
import { User } from "./user.model";
import { Bus } from "./bus.model";

export class Booking {
    public id: string;
    public temple: Temple;
    public bus: Bus;
    public user: User;
    public journeyDate: Date;
    public passengerCount: number;
    public remarks?: string;
    public additionalInfo?: any;

    /**
     * translates the db booking model to API model
     */
    public static translate(model: IBookingDbModel): Booking {
        return {
            id: model.id,
            temple: model.temple,
            bus: model.bus,
            user: model.user,
            journeyDate: model.journeyDate,
            passengerCount: model.passengerCount,
            remarks: model.remarks,
            additionalInfo: model.additionalInfo
        };
    }

    public static translateListModel(model: any): any {

    }
}

export class BookingSummary {
    public id: string;
    public templeName: string;
    public busName: string;
    public busNumber: string;
    public userName: string;
    public userEmail: string;
    public passengerCount: number;

    /**
     * translates user summary db object
     */
    public static translate(model: any): BookingSummary {
        return {
            id: model.id,
            templeName: model.templeName,
            busName: model.busName,
            busNumber:model.busNumber,
            userName: model.userName,
            userEmail: model.userEmail,
            passengerCount: parseInt(model.passengerCount)
        }
    }
}

export class BookingRequest {
    templeId: string;
    busId: string;
    userId: string;
    journeyDate: Date;
    passengerCount: number;
    remarks?: any;
    public additionalInfo?: any;
}