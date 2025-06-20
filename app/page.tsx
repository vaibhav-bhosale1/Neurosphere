"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import ColorSelector from "@/components/ColorSelector"
import TechSpecs from "@/components/TechSpecs"
import ExperienceSection from "@/components/ExperienceSection"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"
import PageLoader from "@/components/PageLoader"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedColor, setSelectedColor] = useState("cosmic-black")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <PageLoader key="loader" />}</AnimatePresence>

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Navigation />
          <main>
            <Hero selectedColor={selectedColor} />
            <Features />
            <ColorSelector selectedColor={selectedColor} onColorChange={setSelectedColor} />
            <ExperienceSection />
            <TechSpecs />
            <Newsletter />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}
