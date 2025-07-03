'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Terminal from '@/components/Terminal'
import Features from '@/components/Features'
import Examples from '@/components/Examples'
import Footer from '@/components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-dark-950 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-dark-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Terminal />
          <Features />
          <Examples />
        </main>
        <Footer />
      </div>
    </div>
  )
}