"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface IProduct {
  name: string
  price: string
  image: string
  quantity: number
}

export default function CartContent() {
  const router = useRouter()
  const searchParam = useSearchParams()
  const [cartItem, setCartItem] = useState<IProduct[]>([])

  useEffect(() => {
    const cart = localStorage.getItem("cart")
    const updatedCart = cart ? JSON.parse(cart) : []

    const name = searchParam.get("name")
    const price = searchParam.get("price")
    const image = searchParam.get("image")
    const quantity = searchParam.get("quantity")


    if (name && price && image) {
      const isDuplicate = updatedCart.some((item: IProduct) => item.name === name)

      if (!isDuplicate) {
        updatedCart.push({ name, price, image, quantity: 1 })
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart))
      setCartItem(updatedCart)
      router.replace("/cart")
    } else {
      setCartItem(updatedCart)
    }
  }, [searchParam, router])

  function handleRemoveItem(index: number) {
    const removeCard = [...cartItem]
    removeCard.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(removeCard))
    setCartItem(removeCard)
  }

  function handleQuantity(index: number, e_target_value: number) {
    const copyWalaArray = [...cartItem]
    copyWalaArray[index].quantity = e_target_value
    localStorage.setItem("cart", JSON.stringify(copyWalaArray))
    setCartItem(copyWalaArray)
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          {cartItem.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <div className="bg-[#FFF9E6] p-4 grid grid-cols-4 font-medium mb-4">
                <div>Product</div>
                <div className="xxs:hidden xl:inline-block">Price</div>
                <div className="xxs:ml-[25px] xl:ml-[0px]">Quantity</div>
                <div className="xxs:ml-[55px] xl:ml-[0px]">Subtotal</div>
              </div>
              {cartItem.map((item: IProduct, index: number) => (
                <div key={index} className="bg-[#FFF9E6] p-4 mb-[10px]">
                  <div className="flex items-center py-8 border-b">
                    <div className="grid grid-cols-4 flex-1 items-center">
                      <div className="flex items-center gap-4">
                        <div className="w-[80px] h-[106px] rounded-lg flex items-center justify-center mb-[10px]">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} width={200} height={100} />
                        </div>
                        <span className="text-gray-600 xxs:hidden xl:inline-block w-[80px]">{item.name}</span>
                      </div>
                      <div className="text-gray-600">Rs. {item.price}.00</div>
                      <div className="xxs:ml-[30px] xl:ml-[0px]">
                        <input
                          className="bg-slate-200 rounded pl-2 text-black w-12"
                          type="number"
                          min={1}
                          value={item.quantity}
                          onChange={(e) => {
                            handleQuantity(index, +e.target.value)
                          }}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="xxs:hidden xl:inline-block">Rs. {+item.price * item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            handleRemoveItem(index)
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Cart Totals */}
        <div className="lg:w-1/3">
          <div className="bg-[#FFF9E5] p-8 rounded-lg">
            <h2 className="text-3xl font-semibold mb-8">Cart Totals</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="font-medium">Subtotal</span>
                <span className="text-gray-500 xxs:hidden md:inline-block">
                  Rs. {cartItem.reduce((total, object) => total + +object.price * object.quantity, 0)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Total</span>
                <span className="text-xl text-[#B88E2F] xxs:hidden md:inline-block">
                  Rs. {cartItem.reduce((total, item) => total + Number(item.price) * item.quantity, 0).toFixed(2)}
                </span>
              </div>
            </div>
            <Link href={"/checkout"}>
              <Button className="w-full h-[59px] rounded-xl border border-black bg-white text-black hover:bg-black hover:text-white transition-colors text-xl">
                Check Out
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

