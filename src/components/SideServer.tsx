// import { client } from "@/sanity/lib/client"
// import { Side } from "./side"

// export interface Product {
//   _id: string
//   name: string
//   description: string
//   price: number
//   imagePath: string
//   discountPercentage: number
//   isFeaturedProduct: boolean
//   stockLevel: number
//   category: string
// }

// async function SideServer() {
//   const response = await client.fetch(`*[_type=='product']{
//     _id,
//     imagePath,
//     description,
//     price,
//     name,
//     category,
//     discountPercentage,
//     isFeaturedProduct,
//     stockLevel
//   }`)

//   return <Side products={response.slice(12, 16)} />
// }

// export default SideServer

