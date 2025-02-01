import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

async function Pick() {
   interface Product {
        _id: string;
        name: string;
        description: string;
        price: number;
        imagePath: string;
        discountPercentage: number;
        isFeaturedProduct: boolean;
        stockLevel: number;
        category: string;
      }
    
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
    }`);
 
    function getStockStyle(stockLevel: number) {
      if (stockLevel > 20) return "bg-green-100 text-green-800"
      if (stockLevel > 10) return "bg-yellow-100 text-yellow-800"
      return "bg-red-100 text-red-800"
    }
  
  return (
    <>
      <div className='w-full'>
        <div className='text-[36px] font-bold text-center  mt-[60px]'>Top Picks For You</div>

        <div className='text-[#737272] text-[16px] font-semibold text-center pt-[13px]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</div>

     




      </div>

      {/* practise */}
      <div className="w-full px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {response.slice(9,21).map((item: Product, index: number) => (
            <Card
              key={item._id}
              className="cursor-pointer transition-all duration-300 hover:shadow-xl overflow-hidden group relative bg-white rounded-lg shadow-md mt-[20px] hover:scale-110"
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center rounded-lg">
              <Link
            href={`/shop/proId?name=${item.name}&image=${item.imagePath}&price=${item.price}&category=${item.category}&description=${item.description}`}
          >
                <Button variant="secondary" className="text-black bg-white hover:bg-white">
                  Add to Cart
                </Button>
                </Link>
              </div>
              <CardHeader className="p-0 ">
                <div className="aspect-square relative">
                  <Image
                    src={item.imagePath || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <CardTitle className="text-lg font-semibold text-gray-800 line-clamp-1">{item.name}</CardTitle>
                <p className="text-2xl font-bold text-primary">${item.price.toFixed(2)}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium px-4 py-2 mt-[10px] rounded-full ${getStockStyle(item.stockLevel)}`}>
                    {item.stockLevel > 20 ? "In Stock" : item.stockLevel > 10 ? "Limited Stock" : "Low Stock"}
                  </span>
                  <span className="text-sm text-black font-semibold">{item.stockLevel} left</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className='h-[50px] w-[120px] flex flex-col gap-[3px] mt-[70px] mx-auto mb-[51px]'>
          <div className='text-[22px] font-bold cursor-pointer'> <Link href={'/shop'} className='hover:text-gray-600'>View More</Link></div>
          <div className='border-b-[2px] border-black w-[110px] h-[10px] '></div>
        </div>
      </div>
    </>
  )
}

export default Pick
