"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bus {
    static translate(model, isBooking) {
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
            availability: model.availability.map((item) => { return Availability.translate(item); }),
            details: isBooking ? null : model.details,
            additionalInfo: isBooking ? null : model.additionalInfo,
        };
    }
}
exports.Bus = Bus;
class Availability {
    static translate(model) {
        return {
            date: new Date(model.date),
            availableSeats: model.availableSeats
        };
    }
}
exports.Availability = Availability;
//# sourceMappingURL=bus.model.js.map