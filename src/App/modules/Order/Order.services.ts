
import { Order } from "./Order.interface";
import { OrderModel } from "./Order.model";

 const  createOrderintoDb= async( Order:Order)=>{


    const Ordervalue = await OrderModel.create(Order);
    return Ordervalue;
 

 }
 const getorderintodb = async()=>{
   const result = await OrderModel.find();
    return result;


 }
 const Revenueorder = async ()=>{

   const result = await OrderModel.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: "$totalPrice" } } }
  ]);
  return result;
  
 }
 const updateorder = async(userid:string, updatedata:Partial<Order>)=>{
   try{

      const result = await OrderModel.findByIdAndUpdate(userid, updatedata,{new : true, runValidators: true})
      return result;
   }catch(err){

      console.log(err)
   }

     
 }
 export const  orderservices ={

    createOrderintoDb,
    getorderintodb,
    updateorder,
    Revenueorder 
 }



 