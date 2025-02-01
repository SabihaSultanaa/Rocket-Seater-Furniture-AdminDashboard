"use client"

import { useEffect, useState } from "react"
import { AlignVerticalSpaceAround, Grip, SlidersHorizontal } from "lucide-react"
import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { type ICard, productCreateSanity, productPostSanity, sanityFetch } from "@/services/sanityApi"
import Link from "next/link"

export default function ProductsGrid() {
  const [editingProduct, setEditingProduct] = useState<ICard | null>()
  const [isChange, setIsChange] = useState<boolean>(false)
  const [createProduct, setCreateProduct] = useState<ICard | null>()
  const [productArray, setProductsArray] = useState<ICard[]>([])
  const [showProductArray, setShowProductArray] = useState<ICard[]>([])
  const [search, setSearch] = useState<string>()
  const [categoryDropdown, setCategoryDropdown] = useState<string[]>([])

  const handleSaveProduct = async (updatedProduct: ICard) => {
    const res = await productPostSanity(updatedProduct)
    if (res) {
      setIsChange(!isChange)
    }
  }

  const handleCreateProduct = async (updatedProduct: ICard) => {
    try {
      const res = await productCreateSanity(updatedProduct)
      if (res) {
        setIsChange(!isChange)
        setCreateProduct(null)
      }
    } catch (error) {
      console.error("Creation failed:", error)
    }
  }

  useEffect(() => {
    async function getData() {
      let query = '*[_type == "product"]'

      if (search) {
        query = `*[_type == "product" && productName match "${search}*"]`
      }

      const res = await sanityFetch(query)
      setProductsArray(res)
      setShowProductArray(res)
      setCategoryDropdown([...new Set(res.map((item) => item.category))])
    }
    getData()
  }, [search])

  function valueChangeCategory(value: string) {
    if (value !== "all") {
      setShowProductArray(productArray.filter((item) => item.category == value))
    } else {
      setShowProductArray(productArray)
    }
  }

  function valueChangePrice(value: string) {
    const updatedArray = [...showProductArray]

    if (value == "low") {
      setShowProductArray(updatedArray.sort((a, b) => a.price - b.price))
    } else if (value == "high") {
      setShowProductArray(updatedArray.sort((a, b) => b.price - a.price))
    }
  }

  function getStockStyle(stockLevel: number) {
    if (stockLevel > 20) return "bg-green-100 text-green-800"
    if (stockLevel > 10) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[316px] bg-gray-100 flex flex-col items-center justify-center">
        <Image src="/blog.png" alt="Hero Image" layout="fill" objectFit="cover" />
        <div className="text-center space-y-4 z-[1]">
          <img src="/log.png" alt="Logo" className="mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-medium">Shop</h1>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Home</span>
            <span className="text-gray-400">/</span>
            <span className="font-light"> Shop</span>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 py-4 bg-[#FAF4F4] mt-12 md:h-[100px] gap-4">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 items-center w-full md:w-1/2">
        <SlidersHorizontal size={18} />
        <div className="text-lg font-semibold">Filter</div>
        <Grip size={22} />
        <AlignVerticalSpaceAround strokeWidth={1.75} size={18} />
        <div className="hidden xl:inline-block">|</div>
        <div className="text-md hidden xl:inline-block font-semibold whitespace-nowrap">
          Showing 1–16 of 32 results
        </div>
      </div>

      {/* Category Dropdown */}
      <div className="w-full md:w-auto">
        <Select defaultValue="all" onValueChange={valueChangeCategory}>
          <SelectTrigger className="w-full md:w-[180px] font-semibold text-[17px] bg-white">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" className="font-semibold">
              All Categories
            </SelectItem>
            {categoryDropdown.map((option, index) => (
              <SelectItem value={option} key={index} className="font-semibold">
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Sorting Dropdown */}
      <div className="w-full md:w-auto">
        <Select defaultValue="latest" onValueChange={valueChangePrice}>
          <SelectTrigger className="w-full md:w-[180px] font-semibold text-[17px] bg-white">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest" className="font-semibold">
              All Prices
            </SelectItem>
            <SelectItem value="low" className="font-semibold">
              Price: Low to High
            </SelectItem>
            <SelectItem value="high" className="font-semibold">
              Price: High to Low
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
      <div className="w-full px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {showProductArray.map((product) => (
            <Card
              key={product._id}
              className="cursor-pointer transition-all duration-300 hover:shadow-xl overflow-hidden group relative bg-white rounded-lg shadow-md mt-[20px] hover:scale-110"
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center rounded-lg">
              <Link
                  href={`/shop/proId?name=${product.name}&image=${product.imagePath}&price=${product.price}&category=${product.category}&description=${product.description}`}
                  className="bg-white text-black font-semibold px-6 py-2 rounded-lg "
                >
                <Button variant="secondary" className="text-black bg-white hover:bg-white">
                  Add to Cart
                </Button>
                </Link>
              </div>
              <CardHeader className="p-0 ">
                <div className="aspect-square relative">
                  <Image
                    src={product.imagePath || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <CardTitle className="text-lg font-semibold text-gray-800 line-clamp-1">{product.name}</CardTitle>
                <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
                <div className="flex items-center justify-between ">
                  <span className={`text-sm font-medium px-4 mt-[10px] py-2 rounded-full ${getStockStyle(product.stockLevel)}`}>
                    {product.stockLevel > 20 ? "In Stock" : product.stockLevel > 10 ? "Limited Stock" : "Low Stock"}
                  </span>
                  <span className="text-sm text-black font-semibold">{product.stockLevel} left</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

