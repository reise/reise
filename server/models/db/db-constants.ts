import { Document } from "mongoose";

export const DbSchema = {
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
            GetAll: "id templeId userId templeName userName price"
        }
    }
};