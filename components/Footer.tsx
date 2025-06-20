"use client"

import { motion } from "framer-motion"

const footerSections = [
  {
    title: "Shop and Learn",
    links: ["NeuroSphere Pro", "Accessories", "Neural Studio", "Developer Kit"],
  },
  {
    title: "Services",
    links: ["Neural Cloud", "Memory Sync", "Skill Library", "Support"],
  },
  {
    title: "Account",
    links: ["Manage Neural ID", "NeuroSphere Account", "Privacy Settings"],
  },
  {
    title: "NeuroSphere",
    links: ["Find a Store", "Neural Bar", "Today at NeuroSphere", "Careers"],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-black mb-4 uppercase tracking-wide">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-gray-600 hover:text-black transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>Copyright © 2024 NeuroSphere Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-black transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Neural Ethics
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
