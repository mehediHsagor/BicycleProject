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
exports.productcontroller = void 0;
const Product_Services_1 = require("./Product.Services");
const CreateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('hit');
    try {
        const product = req.body;
        const result = yield Product_Services_1.productservice.CreateProductintoDb(product);
        res.status(200).send({
            success: true,
            message: "Product created successfully",
            product: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getallProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productItem = typeof req.query.searchItem === 'string' ? req.query.searchItem : undefined;
        console.log(productItem);
        const result = yield Product_Services_1.productservice.getallproductfromdb(productItem);
        res.status(200).send({
            success: true,
            message: "Bicycles retrieved successfully",
            product: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const updateallProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const bike = req.body;
        const result = yield Product_Services_1.productservice.updateproduct(id, bike);
        res.status(200).send({
            success: true,
            message: "Bicycles retrieved successfully",
            product: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const deleteproductfromdb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield Product_Services_1.productservice.deleteProduct(id);
    res.status(200).send({
        success: true,
        message: "Bicycles retrieved successfully",
        product: result
    });
});
const getoneproductfromdb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    const result = yield Product_Services_1.productservice.getoneproduct(id);
    res.status(200).send({
        success: true,
        message: "Bicycles retrieved successfully",
        product: result
    });
});
exports.productcontroller = {
    CreateProduct,
    getallProduct,
    updateallProduct,
    deleteproductfromdb,
    getoneproductfromdb
};
