import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productroute } from './App/modules/Product.route';
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1/products', productroute);
 const getAcontroller = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);


 }
app.get('/', getAcontroller);
export default app;
