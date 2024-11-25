import { product } from "./product.interface";
import { productmodel } from "./Product.model";

const CreateProductintoDb =async(product:product)=>{




   const productvalue=  await productmodel.create(product);
   return productvalue;
}
export const productservice ={

    CreateProductintoDb,
}