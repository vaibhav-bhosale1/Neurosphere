"use client"

import { motion } from "framer-motion"

export default function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="text-center">
        <motion.div
          className="w-8 h-8 border border-white/30 border-t-white rounded-full mx-auto mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.h1
          className="text-2xl font-semibold text-white tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          NeuroSphere Pro
        </motion.h1>
      </div>
    </motion.div>
  )
}
