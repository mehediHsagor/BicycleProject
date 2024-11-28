"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orderroute = void 0;
const Order_Controler_1 = require("./Order.Controler");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
console.log('route');
router.post('/create-order', Order_Controler_1.ordercontroler.createorder);
router.get('/', Order_Controler_1.ordercontroler.getorder);
router.get('/revenue', Order_Controler_1.ordercontroler.revinefromdb);
// Export the router for use in the main app
exports.Orderroute = router;
//http://localhost:5000/api/v1/orders/create-order
