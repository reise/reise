"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Temple {
    /**
     * translates db temple model to API model
     */
    static translate(model, isBooking) {
        return {
            id: model.id,
            imageUrls: isBooking ? null : model.imageUrls,
            name: model.name,
            description: isBooking ? null : model.description,
            additionalInfo: isBooking ? null : model.additionalInfo
        };
    }
}
exports.Temple = Temple;
//# sourceMappingURL=temple.model.js.map