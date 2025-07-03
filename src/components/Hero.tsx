'use client'

import { motion } from 'framer-motion'
import { Upload, Zap, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="px-4 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
              Easy file sharing
            </span>
            <br />
            <span className="text-dark-300">from the command line</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-dark-400 mb-8 max-w-2xl mx-auto">
            Upload files instantly with a simple curl command. 
            No registration, no hassle, just pure simplicity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="flex items-center space-x-2 text-primary-400">
            <Zap size={20} />
            <span>Lightning Fast</span>
          </div>
          <div className="flex items-center space-x-2 text-primary-400">
            <Shield size={20} />
            <span>Secure</span>
          </div>
          <div className="flex items-center space-x-2 text-primary-400">
            <Upload size={20} />
            <span>Simple Upload</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}