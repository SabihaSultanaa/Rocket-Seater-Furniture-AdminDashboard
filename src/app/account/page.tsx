
import Header from '@/components/header'

import Image from 'next/image'


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
function Account() {
  return (
    <>
    <div>

<Header/>

<div className='w-full'>
        <div className='h-[316px] w-full relative'>
            <Image src={'/account.png'} alt='hero'  objectFit='cover' layout='fill' />
        </div>


        <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Login Form */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-16">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6">Log In</h1>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <Label 
              htmlFor="username" 
              className="text-sm sm:text-base font-semibold"
            >
              Username or email address
            </Label>
            <Input 
              id="username"
              type="text"
              className="w-full sm:w-[300px] h-12 border-2 border-gray-400 "
            />
          </div>

          <div className="space-y-2">
            <Label 
              htmlFor="password" 
              className="text-sm sm:text-base font-semibold"
            >
              Password
            </Label>
            <Input 
              id="password"
              type="password"
              className="w-full sm:w-[400px] h-12 border-2 border-2 border-gray-400 "
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label 
              htmlFor="remember" 
              className="text-sm font-semibold"
            >
              Remember me
            </Label>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Button 
              className="w-full sm:w-[150px] h-10 rounded-[8px] border border-black bg-white
             text-black hover:bg-black hover:text-white transition duration-300"
            >
              Log In
            </Button>
            <Button 
              variant="link" 
              className="text-sm sm:text-base h-auto p-0"
            >
              Lost Your Password?
            </Button>
          </div>
        </form>
      </div>

      {/* Register Form */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-16">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6">Register</h1>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <Label 
              htmlFor="email" 
              className="text-sm sm:text-base font-semibold"
            >
              Email address
            </Label>
            <Input 
              id="email"
              type="email"
              className="w-full sm:w-[300px] h-12 border-2  border-gray-400 "
            />
          </div>

          <p className="text-sm sm:text-base text-justify ">
            A link to set a new password will be sent to your email address. <br /> <br />
            Your personal data will be used to support your experience throughout this website, 
            to manage access to your account, and for other purposes described in our  <span className='font-semibold'>privacy policy</span>.
          </p>

          <Button 
            className="w-full sm:w-[150px] h-10 rounded-[8px] border border-black bg-white
             text-black hover:bg-black hover:text-white transition duration-300"
          >
            Register
          </Button>
        </form>
      </div>
    </div>
        <div className="bg-[#FAF4F4] py-16 mt-[100px]">
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
        </div>

       
       
        </div>
    </div>
    </>



  
  )
}

export default Account