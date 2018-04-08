import { ITempleDbModel } from "./db/temple-db.model";

export class Temple {
    public id: string;
    public imageUrls?: Array<string>;
    public name: string;
    public description?: string;
    public additionalInfo?: Array<string>;

    /**
     * translates db temple model to API model
     */
    public static translate(model: ITempleDbModel | Temple, isBooking?: boolean): Temple {
        return {
            id: model.id,
            imageUrls: isBooking ? null : model.imageUrls,
            name: model.name,
            description: isBooking ? null : model.description,
            additionalInfo: isBooking ? null : model.additionalInfo
        };
    }
}