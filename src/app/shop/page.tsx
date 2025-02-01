'use client'

import Header from '@/components/header'
import Shop from '@/components/shop'
import ShopProducts from '@/components/shopProducts'
import { sanityUserPost } from '@/services/userApi'

import React, { useEffect } from 'react'

function ShopPage() {
  useEffect(() => {sanityUserPost()}, [])
  //cart pr chlaenge 
  
  return (
    <> 
    <div>
      <Header />
      <Shop/>
      <ShopProducts/>
    </div> </>
    
  )
}

export default ShopPage