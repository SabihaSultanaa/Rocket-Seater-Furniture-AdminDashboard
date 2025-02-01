"use client"

import dynamic from "next/dynamic"

const CartContent = dynamic(() => import("@/components/cart-content"), {
  ssr: false,
})

export function CartWrapper() {
  return <CartContent />
}

