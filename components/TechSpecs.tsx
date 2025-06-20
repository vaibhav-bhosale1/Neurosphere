"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const specs = [
  {
    category: "Neural Interface",
    items: ["Q7 Neural Processor", "1M neural connections/sec", "Zero-latency processing", "Adaptive learning AI"],
  },
  {
    category: "Connectivity",
    items: ["Neural Wi-Fi 7", "Bluetooth 5.3", "5G Neural Network", "Quantum sync"],
  },
  {
    category: "Power & Battery",
    items: ["All-day battery life", "Wireless charging", "Fast charge capable", "Power efficient design"],
  },
  {
    category: "Privacy & Security",
    items: ["On-device processing", "Neural encryption", "Biometric security", "Zero data collection"],
  },
]

export default function TechSpecs() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-black mb-4 tracking-tight">Tech Specs</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.category}
              className="bg-white rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-black mb-4">{spec.category}</h3>
              <ul className="space-y-2">
                {spec.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
