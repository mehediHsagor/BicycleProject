
import { Request, Response } from "express";
import { productservice } from "./Product.Services";
const CreateProduct =async(req:Request, res:Response)=>{
     console.log('hit')
     try{
        const product =req.body;
        const result = await productservice.CreateProductintoDb(product)
       
       
         res.status(200).send({
           success:true,
       
            message: "Product created successfully",
            product: result
         })
     }catch(err){

      console.log(err)
     }
}
export const productcontroller={

     CreateProduct,
}