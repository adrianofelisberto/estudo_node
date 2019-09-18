import * as mongoose from 'mongoose';

export interface Banner extends mongoose.Document {
    name: string;
    icon: string;
}

const bannerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    icon: {
        type: Buffer
    }
})

export const Banner = mongoose.model<Banner>('Banner', bannerSchema);
