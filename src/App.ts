import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productroute } from './App/modules/Product.route';
import { Orderroute } from './App/modules/Order/Order.route';
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1/products', productroute);
app.use('/api/v1/orders', Orderroute);
 const getAcontroller = (req: Request, res: Response) => {
 

  res.status(200).json({
    success:true,

     message: "Bicycles retrieved successfully",
     
  })



 }
app.get('/', getAcontroller);
export default app;
