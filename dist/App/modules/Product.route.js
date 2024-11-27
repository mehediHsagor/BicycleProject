"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productroute = void 0;
const express_1 = __importDefault(require("express"));
const Product_controler_1 = require("./Product.controler");
const router = express_1.default.Router(); // Fix the syntax for router declaration
console.log('route');
// Define the POST route for creating a product
router.post('/create-product', Product_controler_1.productcontroller.CreateProduct);
router.get('/', Product_controler_1.productcontroller.getallProduct);
router.put('/:id', Product_controler_1.productcontroller.updateallProduct);
router.delete('/:id', Product_controler_1.productcontroller.deleteproductfromdb);
router.get('/:id', Product_controler_1.productcontroller.getoneproductfromdb);
// Export the router for use in the main app
exports.productroute = router;
