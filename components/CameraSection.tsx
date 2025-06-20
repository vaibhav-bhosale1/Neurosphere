"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function CameraSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight">Advanced camera system</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Take your best shots with the most advanced camera system ever in AeroVision Pro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/camera-main.png"
              alt="48MP Main camera"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl"
            />
            <h3 className="text-xl font-semibold text-white mt-6 mb-2">48MP Main camera</h3>
            <p className="text-gray-400">Capture stunning detail with the advanced 48MP Main camera system.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/images/camera-telephoto.png"
              alt="5x Telephoto camera"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl"
            />
            <h3 className="text-xl font-semibold text-white mt-6 mb-2">5x Telephoto camera</h3>
            <p className="text-gray-400">Get closer to your subject with the 5x Telephoto camera.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
