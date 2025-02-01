import { client } from "@/sanity/lib/client"

export interface Product {
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

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await client.fetch(`*[_type=='product']{
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
    return response
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error
  }
}

