"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock} from 'lucide-react'
import Header from "@/components/header"
import Image from "next/image"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logic for submitting the form (e.g., sending an email)
    console.log("Form submitted with data:", { name, email, subject, message })
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000) // Hide success message after 5 seconds
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <section className="relative h-[316px] bg-gray-100 flex flex-col items-center justify-center">
        <Image src="/blog.png" alt="Hero Image" layout="fill" objectFit="cover" />
        <div className="text-center space-y-4 absolute z-[1]">
          <img src="/log.png" alt="Logo" className="mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-medium">Contact</h1>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Home</span>
            <span className="text-gray-400">/</span>
            <span className="font-light">Contact</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Get In Touch Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get In Touch With Us</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. 
            Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="flex gap-4">
              <MapPin className="w-8 h-8" />
              <div>
                <h3 className="text-2xl font-medium mb-2">Address</h3>
                <p className="text-black">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-8 h-8" />
              <div>
                <h3 className="text-2xl font-medium mb-2">Phone</h3>
                <p className="text-black">
                  Mobile: +(84) 546-6789<br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-8 h-8" />
              <div>
                <h3 className="text-2xl font-medium mb-2">Working Time</h3>
                <p className="text-black">
                  Monday-Friday: 9:00 - 22:00<br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your name</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Abc"
                  className="h-[75px] rounded-[10px] border-[#9F9F9F]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email address</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Abc@def.com"
                  className="h-[75px] rounded-[10px] border-[#9F9F9F]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="This is an optional"
                  className="h-[75px] rounded-[10px] border-[#9F9F9F]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi! I'd like to ask about"
                  className="min-h-[120px] rounded-[10px] border-[#9F9F9F]"
                />
              </div>

              <Button
                type="submit"
                className="h-12 px-12 rounded-xl border border-black bg-white text-black hover:bg-black hover:text-white transition-colors"
              >
                Submit
              </Button>
            </form>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4"
              >
                <Alert variant="default" className="bg-green-100 text-green-800 text-base font-semibold border-green-300">
                  <AlertDescription>Your request has been sent successfully!</AlertDescription>
                </Alert>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-[#FAF4F4] py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-medium mb-4">Free Delivery</h3>
              <p className="text-gray-500 text-lg">For all orders over $50, consectetur adipim scing elit.</p>
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
