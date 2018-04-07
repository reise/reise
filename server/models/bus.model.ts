import { IBusDbModel } from "./db/bus-db.model";

export class Bus {
    public id: string;
    public name: string;
    public number: string;
    public arrivalTime: string;
    public departureTime: string;
    public sourceStation: string;
    public destinationStation: string;
    public fare: Number;
    public availableSeats: Number;
    public totalSeats: Number;
    public details?: string;
    public additionalInfo?: any;

    public static translate(model: IBusDbModel): Bus {
        return {
            id: model.id,
            name: model.name,
            number: model.number,
            arrivalTime: model.arrivalTime,
            departureTime: model.departureTime,
            sourceStation: model.sourceStation,
            destinationStation: model.destinationStation,
            fare: model.fare,
            availableSeats: model.availableSeats,
            totalSeats: model.totalSeats,
            details: model.details,
            additionalInfo: model.additionalInfo,

        }
    }
}