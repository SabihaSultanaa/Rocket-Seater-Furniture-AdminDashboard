import React from "react"
import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


async function Side() {
  interface Product {
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

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">Upgrade Your Living Room</h2>
      <p className="text-[#737272] text-sm sm:text-base font-semibold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-[120px] max-w-2xl mx-auto">
        Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
        {response.slice(12, 16).map((item: Product, index: number) => {
          const transformStyle = index % 2 === 0 ? "sm:translate-y-8" : "sm:-translate-y-8"

          return (
            <div
              key={index}
              className={`relative w-full h-[350px] sm:h-[400px] md:h-[450px] rounded-lg shadow-lg overflow-hidden group ${transformStyle} transition-transform duration-300 ease-in-out`}
            >
              <Link
                href={`/shop/proId?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.imagePath)}&price=${item.price}&category=${encodeURIComponent(item.category)}&description=${encodeURIComponent(item.description)}`}
                className="block w-full h-full"
              >
                <Image
                  src={item.imagePath || "/placeholder.svg"}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end text-white p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">{item.name}</h3>
                <p className="text-xl sm:text-2xl font-bold mb-2">Rs. {item.price.toFixed(2)}</p>
                <p className="text-sm line-clamp-2">{item.description}</p>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={`/shop/proId?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.imagePath)}&price=${item.price}&category=${encodeURIComponent(item.category)}&description=${encodeURIComponent(item.description)}`}
                  className="bg-white text-black font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Side

