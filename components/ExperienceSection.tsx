"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Play } from "lucide-react"
import Image from "next/image"

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Neural Workspaces",
      description: "Transform any environment into your perfect workspace",
      image: "/images/virtual-workspace.png",
    },
    {
      title: "Memory Enhancement",
      description: "Never lose important information again",
      image: "/images/memory-enhancement.png",
    },
    {
      title: "Instant Learning",
      description: "Acquire new skills faster than ever before",
      image: "/images/skill-acquisition.png",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight">Beyond imagination</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Experience capabilities that extend far beyond traditional computing. NeuroSphere Pro opens new dimensions
            of human potential.
          </p>
        </motion.div>

        {/* Main Experience Video */}
        <motion.div
          className="relative mb-16 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative aspect-video bg-gray-800">
            <Image src="/images/main-experience.png" alt="NeuroSphere Experience" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <motion.button
                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-6 h-6 text-white ml-1" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            >
              <div className="aspect-video bg-gray-800 rounded-xl mb-4 overflow-hidden">
                <Image
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{experience.title}</h3>
              <p className="text-gray-400">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
