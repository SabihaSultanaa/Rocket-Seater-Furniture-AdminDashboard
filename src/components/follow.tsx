"use client"

import React from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

function Follow() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="relative">
      <div className="hidden md:block absolute top-0 left-0 right-0 z-[-1]">
        <Image
          src="/follow.png"
          alt="Instagram follow banner"
          layout="responsive"
          width={1440}
          height={450}
          objectFit="cover"
        />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-[#faeded] px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mb-4"
        >
          Our Instagram
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl mx-auto mb-6">
          Follow our store on Instagram
        </motion.p>
        <motion.button
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-48 sm:w-56 md:w-64 h-12 sm:h-14 md:h-16 rounded-full bg-white text-lg sm:text-xl font-semibold shadow-[0px_4px_4px_rgba(0,0,0,0.25)] mx-auto hover:bg-black hover:text-white transition duration-300"
        >
          Follow Us
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Follow

