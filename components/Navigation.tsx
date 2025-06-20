"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, ShoppingBag, Menu, X } from "lucide-react"

const navItems = ["Products", "NeuroLink", "Quantum", "Studio", "Accessories", "Support", "Developers"]

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="bg-black/95 backdrop-blur-md text-white sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <motion.div className="text-lg font-semibold text-white" whileHover={{ scale: 1.05 }}>
                NeuroSphere
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs font-normal text-white/80 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Search className="w-4 h-4 text-white/80 hover:text-white cursor-pointer transition-colors" />
              <ShoppingBag className="w-4 h-4 text-white/80 hover:text-white cursor-pointer transition-colors" />

              {/* Mobile Menu Button */}
              <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-t border-gray-800"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a key={item} href="#" className="block text-sm text-white/80 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </>
  )
}
