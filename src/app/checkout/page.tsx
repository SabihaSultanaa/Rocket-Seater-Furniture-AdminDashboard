import Header from '@/components/header'
import React from 'react'
import Image from 'next/image'
import CheckoutForm from '@/components/checkout-form'

function Check() {
  return (
   <>   
   <div>
    <Header/>
    

    <div className='w-full'>
        <div className='h-[316px] w-full relative'>
            <Image src={'/check.png'} alt='hero'  objectFit='cover' layout='fill' />
        </div>
        </div>
        <div className='mt-[50px]'><CheckoutForm/></div>
        


<footer className="bg-[#FAF4F4] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-medium mb-4">Free Delivery</h3>
              <p className="text-gray-600">For all oders over $50, consectetur adipim scing elit.</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">90 Days Return</h3>
              <p className="text-gray-600">If goods have problems, consectetur adipim scing elit.</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment, consectetur adipim scing elit.</p>
            </div>
          </div>
        </div>
      </footer>
    
    </div></>
  )
}

export default Check