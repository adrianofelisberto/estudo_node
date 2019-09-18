import * as mongoose from 'mongoose';

export interface CreditCard extends mongoose.Document {
    name: string;
    dia_fechamento: number;
    dia_vencimento: number;
    banner: string;
    limite: number;
}

const creditCartSchema = new mongoose.Schema({
    name: {
        type: String
    },
    dia_fechamento: {
        type: Number
    },
    dia_vencimento: {
        type: Number
    },
    banner: {
        type: String
    },
    limite: {
        type: Number
    }
});

export const CreditCard = mongoose.model<CreditCard>('CreditCard', creditCartSchema);

