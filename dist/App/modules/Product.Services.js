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
exports.productservice = void 0;
const Product_model_1 = require("./Product.model");
const mongodb_1 = require("mongodb");
const CreateProductintoDb = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const productvalue = yield Product_model_1.productmodel.create(product);
    return productvalue;
});
const getallproductfromdb = (searchItem) => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await productmodel.find();
    console.log(searchItem);
    const query = searchItem
        ? {
            $or: ['brand', 'type', 'name'].map((key) => ({
                [key]: { $regex: new RegExp(searchItem, 'i') },
            })),
        }
        : {};
    const result = yield Product_model_1.productmodel.find(query);
    return result;
});
const updateproduct = (userid, updatedate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Product_model_1.productmodel.findByIdAndUpdate(({ _id: new mongodb_1.ObjectId(userid) }), updatedate, { new: true, runValidators: true });
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
const deleteProduct = (userid) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.productmodel.findByIdAndDelete(userid);
    return result;
});
const getoneproduct = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(userId, "sagor");
    // const result = await productmodel.findOne({ _id: new ObjectId(userId) });
    const result = yield Product_model_1.productmodel.aggregate([
        {
            $match: { _id: new mongodb_1.ObjectId(userId) }
        }
    ]);
    console.log(result);
    return result;
    //const result = await productmodel.aggregate({$match:{_id: new ObjectId(userid)}});
});
exports.productservice = {
    CreateProductintoDb,
    getallproductfromdb,
    updateproduct,
    deleteProduct,
    getoneproduct
};
