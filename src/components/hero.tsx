"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

function Hero() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative w-full min-h-screen bg-[#FBEBB5] flex flex-col lg:flex-row"
    >
      {/* Left side - Hero Text & Link */}
      <motion.div
        variants={textVariants}
        className="w-full lg:w-1/2 flex flex-col items-start justify-center px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-12 lg:py-20"
      >
        <motion.h1
          variants={textVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight font-semibold mb-6 sm:mb-10"
        >
          Rocket single <div className="mt-[30px]">seater</div>
        </motion.h1>
        <motion.div variants={textVariants}>
          <Link
            href="/shop"
            className="inline-block text-lg sm:text-xl font-semibold hover:font-bold transition-colors duration-300 mb-4 sm:mb-[10px]"
          >
            Shop Now
          </Link>
        </motion.div>
        <motion.div variants={textVariants} className="w-16 sm:w-24 h-1 bg-black" />
      </motion.div>

      {/* Right side - Hero Image */}
      <motion.div variants={imageVariants} className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative">
        <Image
          src="/sofa.png"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          className="rounded-none lg:rounded-l-lg hover:scale-105 transition duration-300"
          priority
        />
      </motion.div>
    </motion.div>
  )
}

export default Hero

