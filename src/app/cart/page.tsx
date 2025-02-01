import Header from "@/components/header"
import Image from "next/image"

import { CartWrapper } from "@/components/cart-wrapper"

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[316px] bg-gray-100 flex flex-col items-center justify-center">
        <Image src="/blog.png" alt="Hero Image" fill style={{ objectFit: "cover" }} />
        <div className="text-center space-y-4 z-[1]">
          <img src="/log.png" alt="Logo" className="mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-medium">Cart</h1>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Home</span>
            <span className="text-gray-400">/</span>
            <span className="font-light">Cart</span>
          </div>
        </div>
      </section>


      <CartWrapper />
       {/* Features Section */}
       <section className="bg-[#FAF4F4] py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-medium mb-4">Free Delivery</h3>
              <p className="text-gray-500 text-lg">For all oders over $50, consectetur adipim scing elit.</p>
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-4">90 Days Return</h3>
              <p className="text-gray-500 text-lg">If goods have problems, consectetur adipim scing elit.</p>
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-4">Secure Payment</h3>
              <p className="text-gray-500 text-lg">100% secure payment, consectetur adipim scing elit.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
    
  )
}

