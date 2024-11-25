import express from "express";
import { productcontroller } from "./Product.controler";


const router = express.Router(); // Fix the syntax for router declaration
console.log('route')
// Define the POST route for creating a product
router.post('/create-product', productcontroller.CreateProduct);

// Export the router for use in the main app
export const productroute = router;
