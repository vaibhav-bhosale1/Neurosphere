"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Zap, Shield } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Brain,
    title: "Q7 Neural chip",
    subtitle: "Revolutionary neural processing",
    description:
      "The most advanced neural processor ever created. Built for seamless mind-machine integration with zero latency.",
    image: "/images/quantum-chip.png",
    background: "bg-white",
    textColor: "text-black",
  },
  {
    icon: Zap,
    title: "Thought Control",
    subtitle: "Direct neural interface",
    description: "Control devices with pure thought. The most intuitive way to interact with technology has arrived.",
    image: "/images/thought-sync.png",
    background: "bg-black",
    textColor: "text-white",
  },
  {
    icon: Shield,
    title: "Neural Privacy",
    subtitle: "Your thoughts, protected",
    description:
      "Advanced encryption ensures your neural data remains completely private with on-device processing only.",
    image: "/images/privacy-shield.png",
    background: "bg-gray-100",
    textColor: "text-black",
  },
]

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          className={`${feature.background} py-20`}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <h2 className={`text-3xl md:text-5xl font-semibold ${feature.textColor} mb-4 tracking-tight`}>
                  {feature.title}
                </h2>
                <h3
                  className={`text-xl md:text-2xl ${feature.textColor === "text-black" ? "text-gray-600" : "text-gray-300"} mb-6 font-normal`}
                >
                  {feature.subtitle}
                </h3>
                <p
                  className={`text-lg ${feature.textColor === "text-black" ? "text-gray-700" : "text-gray-400"} leading-relaxed max-w-md`}
                >
                  {feature.description}
                </p>
              </div>
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  )
}
