"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbSchema = {
    Collections: {
        Logs: "logs",
        Users: "users",
        Temples: "temples",
        Bookings: "bookings",
        Buses: "buses"
    },
    Projections: {
        Bus: {
            GetAll: "id name number arrivalTime departureTime sourceStation destinationStation fare availableSeats totalSeats"
        },
        Temple: {
            GetAll: "id imageUrls name"
        },
        Booking: {
            GetAll: "id temple.name bus.name bus.number user.name user.email passengerCount journeyDate"
        }
    }
};
//# sourceMappingURL=db-constants.js.map