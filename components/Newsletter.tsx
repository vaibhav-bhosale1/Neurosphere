"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [isValid, setIsValid] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateEmail(email)) {
      setIsValid(true)
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 2000)
    } else {
      setIsValid(false)
    }
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-black mb-4 tracking-tight">Stay informed</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Be the first to know about NeuroSphere Pro updates and availability.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setIsValid(true)
              }}
              className={`flex-1 px-4 py-3 text-lg ${!isValid ? "border-red-500" : "border-gray-300"}`}
            />
            <Button
              type="submit"
              size="lg"
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg"
              disabled={isSubmitted}
            >
              {isSubmitted ? "Subscribed!" : "Subscribe"}
            </Button>
          </motion.form>

          {!isValid && (
            <motion.p className="text-red-500 mt-2 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Please enter a valid email address
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
