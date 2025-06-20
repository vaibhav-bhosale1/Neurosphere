"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

interface HeroProps {
  selectedColor: string
}

const colorImages = {
  "cosmic-black": "/images/hero-cosmic-black.png",
  "stellar-white": "/images/hero-stellar-white.png",
  "aurora-blue": "/images/hero-aurora-blue.png",
  "nebula-purple": "/images/hero-nebula-purple.png",
}

export default function Hero({ selectedColor }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="text-center z-10 px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          NeuroSphere Pro
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Neural interface. So advanced. So intuitive. So Pro.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors">
            Pre-order
          </button>
          <button className="text-blue-500 hover:underline text-sm font-medium">Learn more {">"}</button>
        </motion.div>

        <motion.div
          className="relative"
          style={{ scale }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Image
            src={colorImages[selectedColor as keyof typeof colorImages] || "/placeholder.svg"}
            alt="NeuroSphere Pro"
            width={600}
            height={800}
            className="mx-auto max-w-full h-auto"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </section>
  )
}
