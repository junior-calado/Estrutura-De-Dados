import mongoose, { Schema, Document } from 'mongoose';

export interface Product extends Document {
    name: string;
    price: number;
    quantity: number;
}

const productSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

export default mongoose.model<Product>('Product', productSchema);
