"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const specs = [
  { label: "Display", value: "4K micro-OLED per eye" },
  { label: "Refresh Rate", value: "120Hz adaptive" },
  { label: "Field of View", value: "120° diagonal" },
  { label: "Processor", value: "Custom M3 Pro chip" },
  { label: "Memory", value: "32GB unified memory" },
  { label: "Storage", value: "1TB SSD" },
  { label: "Battery Life", value: "Up to 8 hours" },
  { label: "Weight", value: "450g (0.99 lbs)" },
  { label: "Connectivity", value: "Wi-Fi 7, Bluetooth 5.3" },
  { label: "Audio", value: "Spatial Audio with head tracking" },
]

export default function Specifications() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Technical
            <br />
            <span className="text-gray-400">specifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology packed into an impossibly elegant design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              className="flex justify-between items-center py-6 border-b border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="text-gray-400 text-lg">{spec.label}</span>
              <span className="text-white text-lg font-medium">{spec.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
