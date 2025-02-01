// src\services\sanityApi.ts
"use server"

import { client } from "@/sanity/lib/client"


export interface ICard {
  _id: string
  name: string
  description: string
  price: number
  imagePath: string
  discountPercentage: number
  isFeaturedProduct: boolean
  stockLevel: number
  category: string
}

//-----------------------------------------------product Fetch Sanity
export async function sanityFetch(query: string) {
  const res: ICard[] =  await client.fetch(`${query}{
      _id,
      imagePath,
      description,
      price,
      name,
      category,
      discountPercentage,
      isFeaturedProduct,
      stockLevel
    }`)

  return res;
}



//-----------------------------------------------product Update Sanity
export async function productPostSanity(updatedProduct: ICard) {
  
  const res = await client
  .patch(updatedProduct._id)
  .set({
    productName: updatedProduct.name,
    price: updatedProduct.price,
    category: updatedProduct.category,
    inventory: updatedProduct.stockLevel,
    description: updatedProduct.description,
  })
  .commit();

  return res
  
}



//-----------------------------------------------product Delete Sanity
export async function productDeleteSanity(updatedProduct: ICard) {
    
  const res = await client.delete(updatedProduct._id);

  return res
  
}



//-----------------------------------------------product Create Sanity
export async function productCreateSanity(updatedProduct: ICard) {
  try {
    const res = await client.create({
      _type: "product",
      productName: updatedProduct.name,
      price: updatedProduct.price,
      category: updatedProduct.category,
      inventory: updatedProduct.stockLevel,
      description: updatedProduct.description,
      status: "active",
      colors: [],
    });

    console.log("✅ Product created successfully:", res._id);
    return res;
  } catch (error) {
    console.error("😡 Product creation failed:", error);
    throw error;
  }
}





