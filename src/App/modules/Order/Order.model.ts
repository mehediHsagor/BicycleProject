import { Schema, model } from 'mongoose';
import { Order } from './Order.interface';

const OrderSchema = new Schema <Order>({

    email: {
        type: String,
        required: true,
        unique: true,
    },
    products: {
        type: String,
  
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
})
export  const OrderModel =model<Order>('order' ,OrderSchema)

