import express from "express";
import { productcontroller } from "./Product.controler";
import { productservice } from "./Product.Services";


const router = express.Router(); // Fix the syntax for router declaration
console.log('route')
// Define the POST route for creating a product
router.post('/create-product', productcontroller.CreateProduct);
router.get('/', productcontroller.getallProduct);

router.put('/:id',productcontroller.updateallProduct);
router.delete('/:id',productcontroller.deleteproductfromdb);
router.get('/:id',productcontroller.getoneproductfromdb);

// Export the router for use in the main app
export const productroute = router;
