"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordercontroler = void 0;
const Order_services_1 = require("./Order.services");
const createorder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        console.log("Order created");
        const result = yield Order_services_1.orderservices.createOrderintoDb(order);
        console.log(order);
        res.status(200).json({
            success: true,
            message: 'Order created successfully',
            order: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const revinefromdb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Order_services_1.orderservices.Revenueorder();
        res.status(200).json({
            success: true,
            message: 'Order fetched successfully',
            orders: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getorder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Order_services_1.orderservices.getorderintodb();
        res.status(200).json({
            success: true,
            message: 'Order fetched successfully',
            orders: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.ordercontroler = {
    createorder,
    getorder,
    revinefromdb,
};
