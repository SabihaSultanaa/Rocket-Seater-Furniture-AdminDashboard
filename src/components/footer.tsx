"use client"

import { useState, useEffect } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Alert, AlertDescription } from "./ui/alert"
import { motion, useAnimation, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type React from "react" // Added import for React

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the footer is in view
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log("Subscribed with email:", email)
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 5000)
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const alertVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  return (
    <motion.footer
      className="bg-white py-16"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="container mx-auto px-4">
        <motion.div className="grid md:grid-cols-4 gap-8" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <p className="text-gray-500">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-gray-500 mb-4">Links</h4>
            <nav className="space-y-4 font-semibold">
              <motion.a href="/" className="block" whileHover={{ x: 5 }}>
                Home
              </motion.a>
              <motion.a href="/shop" className="block" whileHover={{ x: 5 }}>
                Shop
              </motion.a>
              <motion.a href="" className="block" whileHover={{ x: 5 }}>
                About
              </motion.a>
              <motion.a href="contact" className="block" whileHover={{ x: 5 }}>
                Contact
              </motion.a>
            </nav>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-gray-500 mb-4">Help</h4>
            <nav className="space-y-4 font-semibold">
              <motion.a href="#" className="block" whileHover={{ x: 5 }}>
                Payment Options
              </motion.a>
              <motion.a href="#" className="block" whileHover={{ x: 5 }}>
                Returns
              </motion.a>
              <motion.a href="#" className="block" whileHover={{ x: 5 }}>
                Privacy Policies
              </motion.a>
            </nav>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-gray-500 mb-4">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="border-b-black border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" variant="ghost" className="font-medium">
                  SUBSCRIBE
                </Button>
              </div>
              {isSubscribed && (
                <motion.div variants={alertVariants} initial="hidden" animate="visible" exit="exit">
                  <Alert
                    variant="default"
                    className="bg-green-100 text-green-800 text-base font-semibold border-green-300"
                  >
                    <AlertDescription>Subscription successful! Thank you for subscribing.</AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
        <motion.div className="mt-16 pt-8 border-t border-gray-300 font-semibold" variants={itemVariants}>
          <p>2022 Meubel House. All rights reserved</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

