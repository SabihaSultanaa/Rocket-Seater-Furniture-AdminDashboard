'use client'
import { useState } from 'react'
import Link from 'next/link'
import { User, Search, Heart, ShoppingCart, Menu, X } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'

export default function ResponsiveNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)


  return (
  <>    
   <nav className="w-full px-[100px] py-8 bg-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
       <div></div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex space-x-[100px] text-[20px] font-semibold">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <Link href="/shop" className="hover:text-gray-600">Shop</Link>
          <Link href="" className="hover:text-gray-600">About</Link>
          <Link href="/contact" className="hover:text-gray-600">Contact</Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden xl:flex items-center space-x-[50px]">
          <Link href="/account"><User size={25} className="hover:text-gray-600 stroke-2" /></Link>
          <Link href="/"><Search size={25} className="hover:text-gray-600 stroke-2" /></Link>
          <Link href="/cart"><Heart size={25} className="hover:text-gray-600 stroke-2" /></Link>
          <Link href="/cart"><ShoppingCart size={25} className="hover:text-gray-600 stroke-2" /></Link>
          <UserButton />
        </div>

        {/* Mobile Menu Button */}
        <button className="xl:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className=" mt-4 pb-4">
          <div className="flex flex-col space-y-4 text-lg font-semibold">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <Link href="/shop" className="hover:text-gray-600">Shop</Link>
            <Link href="" className="hover:text-gray-600">About</Link>
            <Link href="/contact" className="hover:text-gray-600">Contact</Link>
          </div>
          <div className="flex justify-between mt-4">
            <Link href="/account"><User size={24} className="hover:text-gray-600 stroke-2" /></Link>
            <Link href=""><Search size={24} className="hover:text-gray-600 stroke-2" /></Link>
            <Link href="/cart"><Heart size={24} className="hover:text-gray-600 stroke-2" /></Link>
            <Link href="/cart"><ShoppingCart size={24} className="hover:text-gray-600 stroke-2" /></Link>
            <UserButton />
          </div>
        </div>
      )}
    </nav>
    </>
  )
}