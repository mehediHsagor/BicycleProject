import { Schema, model } from 'mongoose';
import { product } from './product.interface';



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
productSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
productSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});
export  const productmodel = model<product> ('product',productSchema
)
