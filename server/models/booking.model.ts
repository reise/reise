import { IBookingDbModel } from "./db/booking-db.model";

export class Booking {
    public id: string;
    public templeId: string;
    public userId: string;
    public templeName: string;
    public userName: string;
    public price: string;
    public remarks?: string;

    /**
     * translates the db booking model to API model
     */
    public static translate(model: IBookingDbModel): Booking {
        return {
            id: model.id,
            templeId: model.templeId,
            userId: model.userId,
            templeName: model.templeName,
            userName: model.userName,
            price: model.price,
            remarks: model.remarks
        };
    }
}