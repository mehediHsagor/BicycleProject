import { orderservices } from './Order.services';

const createorder = async (req:Request, res:Response) => {
  try {
    const order = req.body;
    console.log("Order created")
    const result = await orderservices.createOrderintoDb(order);
    console.log(order)

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      order: result,
    });
  

  } catch (err) {
    console.log(err);
  }
};
const revinefromdb = async (req:Request,res:Response)=>{

  try {
   
 
    const result = await orderservices.Revenueorder();
    res.status(200).json({
      success: true,
      message: 'Order fetched successfully',
      orders: result,
    });
   
  } catch (err) {
    console.log(err);
  }
}
const getorder = async(req:Request,res:Response)=>{
  try {
    const result = await orderservices.getorderintodb();
    res.status(200).json({
      success: true,
      message: 'Order fetched successfully',
      orders: result,
    });

  }catch(err){

    console.log(err)
  }
 
}

export const ordercontroler = {
  createorder,
  getorder,
  revinefromdb,
};
