"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"

function Arrival() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const controls = useAnimation()

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  }

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.175, 0.885, 0.32, 1.275], // Custom easing for bounce effect
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full min-h-[600px] flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-[60px] px-4 sm:px-8 md:px-[100px] bg-[#FFF9E5] py-12 md:py-0"
    >
      <motion.div className="w-full md:w-1/2" variants={imageVariants}>
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
          <Image src="/asgaard.png" alt="Asgaard Sofa" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
      </motion.div>
      <div className="w-full md:w-1/4 text-center">
        <motion.div className="text-xl sm:text-2xl md:text-[24px] font-semibold mb-2" variants={headingVariants}>
          New Arrivals
        </motion.div>
        <motion.div className="text-3xl sm:text-4xl md:text-[45px] font-bold mb-6 mt-[40px]" variants={headingVariants}>
          Asgaard Sofa
        </motion.div>
        <motion.div variants={buttonVariants}>
          <Link href="/shop">
            <motion.button
              className="text-lg sm:text-xl md:text-[20px] w-full sm:w-[235px] h-[64px] font-semibold border-2 mt-[50px]
                border-black hover:bg-black hover:text-white transition duration-300 flex items-center justify-center ml-[30px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Arrival

