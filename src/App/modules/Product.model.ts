import { Schema, model, connect } from 'mongoose';
import { product, product } from './product.interface';

const productSchema = new Schema<product>({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,

  },
  type: {
    type: String,
    required: true,
    enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  inStock: {
    type: Boolean,
    required: true,
    default: true,
  },
});
export  const productmodel = model<product> ('product',productSchema
)
