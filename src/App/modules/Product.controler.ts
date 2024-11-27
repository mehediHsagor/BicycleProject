
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

const getallProduct =async(req: Request,res: Response)=>{
     try{
          const productItem = typeof req.query.searchItem === 'string' ? req.query.searchItem : undefined;
          console.log(productItem)

           const result = await productservice.getallproductfromdb(productItem)
           
           res.status(200).send({
               success:true,
           
                message: "Bicycles retrieved successfully",
                product: result
             })
     }catch(err){

          console.log(err)
     }



}
const updateallProduct =async(req: Request,res: Response)=>{
     try{

          
           const { id } = req.params;
           const bike = req.body;
           const result = await productservice.updateproduct(id,bike);
           res.status(200).send({
               success:true,
           
                message: "Bicycles retrieved successfully",
                product: result
             })
     }catch(err){

          console.log(err)
     }



}
const deleteproductfromdb = async(req: Request, res: Response)=>{
     const { id } = req.params;
       const result =await productservice.deleteProduct(id);
       return result;
}
const getoneproductfromdb = async (req: Request, res: Response)=>{

     const {id } = req.params;
     console.log(id)
     const result = await productservice.getoneproduct(id);
    
     res.status(200).send({
          success:true,
      
           message: "Bicycles retrieved successfully",
           product: result
        })

     
}
export const productcontroller={

     CreateProduct,
     getallProduct,
     updateallProduct,
     deleteproductfromdb,
     getoneproductfromdb
}