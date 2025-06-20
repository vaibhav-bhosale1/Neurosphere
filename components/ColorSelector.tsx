"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

interface ColorSelectorProps {
  selectedColor: string
  onColorChange: (color: string) => void
}

const colors = [
  {
    name: "cosmic-black",
    label: "Space Black",
    color: "#1d1d1f",
    image: "/images/color-cosmic-black.png",
  },
  {
    name: "stellar-white",
    label: "Silver",
    color: "#f5f5f7",
    image: "/images/color-stellar-white.png",
  },
  {
    name: "aurora-blue",
    label: "Deep Blue",
    color: "#395e9c",
    image: "/images/color-aurora-blue.png",
  },
  {
    name: "nebula-purple",
    label: "Purple",
    color: "#9f7aea",
    image: "/images/color-nebula-purple.png",
  },
]

export default function ColorSelector({ selectedColor, onColorChange }: ColorSelectorProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-black mb-4 tracking-tight">Four stunning finishes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Precision-crafted from aerospace-grade materials. Each finish designed for durability and elegance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              {colors.map((color) => (
                <motion.button
                  key={color.name}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                    selectedColor === color.name ? "bg-gray-100 shadow-sm" : "hover:bg-gray-50"
                  }`}
                  onClick={() => onColorChange(color.name)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-10 h-10 rounded-full border border-gray-200"
                      style={{ backgroundColor: color.color }}
                    />
                    <div>
                      <h3 className="text-lg font-medium text-black">{color.label}</h3>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {colors.map((color) => (
                <motion.div
                  key={color.name}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: selectedColor === color.name ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={color.image || "/placeholder.svg"}
                    alt={`NeuroSphere Pro in ${color.label}`}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </motion.div>
              ))}
              {/* Placeholder for layout */}
              <Image
                src={colors[0].image || "/placeholder.svg"}
                alt="NeuroSphere Pro"
                width={800}
                height={600}
                className="w-full h-auto opacity-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
