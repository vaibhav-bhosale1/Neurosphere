import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "NeuroSphere",
  description: "Experience the future with AeroVision Pro. Titanium design meets cutting-edge technology.",
  keywords: "mixed reality, AR, VR, titanium, technology, innovation",
  openGraph: {
    title: "AeroVision Pro - Advanced Mixed Reality",
    description: "Experience the future with AeroVision Pro. Titanium design meets cutting-edge technology.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
