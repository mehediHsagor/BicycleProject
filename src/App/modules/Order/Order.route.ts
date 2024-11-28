
import { ordercontroler } from "./Order.Controler";
import express from "express";


const router = express.Router(); 
console.log('route')

router.post('/create-order', ordercontroler.createorder);
router.get('/',ordercontroler.getorder)

router.get('/revenue',ordercontroler.revinefromdb)

// Export the router for use in the main app
export const Orderroute = router;
//http://localhost:5000/api/v1/orders/create-order
