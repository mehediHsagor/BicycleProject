import { Schema, model, connect } from 'mongoose';
export type product={

     name:string;
     brand:string;
     price:string;
     type:string;
     description:string;
     quantity:number;
     inStock:boolean;

    

}