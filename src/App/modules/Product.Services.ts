import { product } from "./product.interface";
import { productmodel } from "./Product.model";
import { ObjectId } from "mongodb";

const CreateProductintoDb =async(product:product)=>{




   const productvalue=  await productmodel.create(product);
   return productvalue;
}
const getallproductfromdb = async(searchItem?:string)=>{
   // const result = await productmodel.find();
   console.log(searchItem,)
    const query = searchItem

  ? {
      $or: ['brand', 'type', 'name'].map((key) => ({
        [key]: { $regex: new RegExp(searchItem, 'i') },
        
      })),
    }
  : {};

const result = await productmodel.find(query);
    return result;


}
const updateproduct =async(userid:string,updatedate:object)=>{
   try{

    const result = await productmodel.findByIdAndUpdate(({_id: new ObjectId(userid)}),updatedate,  {new : true, runValidators: true});
    return result;
   }catch(err){

    console.log(err);
   }


}



 const deleteProduct = async(userid:string)=>{
    

       const result = await productmodel.findByIdAndDelete(userid);
       return result;

 }
 const getoneproduct = async(userId:string)=>{
    console.log(userId,"sagor")
   // const result = await productmodel.findOne({ _id: new ObjectId(userId) });
   const result = await productmodel.aggregate([
    {
     $match: { _id: new ObjectId(userId) }
    }
 ])  
 console.log(result)
 return result
 
   //const result = await productmodel.aggregate({$match:{_id: new ObjectId(userid)}});
   

 }
export const productservice ={

    CreateProductintoDb,
    getallproductfromdb,
    updateproduct,
    deleteProduct,
    getoneproduct 
}