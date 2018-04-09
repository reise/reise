"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Booking {
    /**
     * translates the db booking model to API model
     */
    static translate(model) {
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
    static translateListModel(model) {
    }
}
exports.Booking = Booking;
class BookingSummary {
    /**
     * translates user summary db object
     */
    static translate(model) {
        return {
            id: model.id,
            templeName: model.temple.name,
            busName: model.bus.name,
            busNumber: model.bus.number,
            userName: model.user.name,
            userEmail: model.user.email,
            journeyDate: model.journeyDate,
            passengerCount: parseInt(model.passengerCount)
        };
    }
}
exports.BookingSummary = BookingSummary;
class BookingRequest {
}
exports.BookingRequest = BookingRequest;
//# sourceMappingURL=booking.model.js.map