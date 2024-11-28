"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Product_route_1 = require("./App/modules/Product.route");
const Order_route_1 = require("./App/modules/Order/Order.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/v1/products', Product_route_1.productroute);
app.use('/api/v1/orders', Order_route_1.Orderroute);
exports.default = app;
