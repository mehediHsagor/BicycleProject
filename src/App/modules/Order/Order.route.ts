
import { ordercontroler } from "./Order.Controler";
import express from "express";
import { orderservices } from "./Order.services";

const router = express.Router(); 
console.log('route')

router.post('/create-order', ordercontroler.createorder);
router.get('/',ordercontroler.getorder)
router.put('/id',orderservices.updateorder)
router.get('/revenue',ordercontroler.revinefromdb)

// Export the router for use in the main app
export const Orderroute = router;
//http://localhost:5000/api/v1/orders/create-order
