import { IBusDbModel } from "./db/bus-db.model";

export class Bus {
    public id: string;
    public name: string;
    public number: string;
    public arrivalTime: string;
    public departureTime: string;
    public sourceStation: string;
    public destinationStation: string;
    public fare: number;
    public totalSeats: number;
    public availability: Array<Availability>;
    public details?: string;
    public additionalInfo?: any;

    public static translate(model: IBusDbModel | Bus, isBooking?: boolean): Bus {
        model.availability = model.availability || [];
        return {
            id: model.id,
            name: model.name,
            number: model.number,
            arrivalTime: model.arrivalTime,
            departureTime: model.departureTime,
            sourceStation: model.sourceStation,
            destinationStation: model.destinationStation,
            fare: model.fare,
            totalSeats: model.totalSeats,
            availability: model.availability.map((item: any) => { return Availability.translate(item) }),
            details: isBooking ? null : model.details,
            additionalInfo: isBooking ? null : model.additionalInfo,
        };
    }
}

export class Availability {
    public date: Date;
    public availableSeats: number;

    public static translate(model: any): Availability {
        return {
            date: new Date(model.date),
            availableSeats: model.availableSeats
        }
    }
}