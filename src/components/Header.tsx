'use client'

import { motion } from 'framer-motion'
import { Github, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative z-50 px-4 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            transfer.jonte.lol
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-dark-300 hover:text-primary-400 transition-colors">
            Features
          </a>
          <a href="#examples" className="text-dark-300 hover:text-primary-400 transition-colors">
            Examples
          </a>
          <a href="#api" className="text-dark-300 hover:text-primary-400 transition-colors">
            API
          </a>
          <motion.a
            href="https://github.com/jonte/transfer.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-dark-800 hover:bg-dark-700 rounded-lg transition-colors border border-dark-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            <span>GitHub</span>
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-dark-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-dark-900/95 backdrop-blur-lg border-t border-dark-700 px-4 py-6"
        >
          <nav className="flex flex-col space-y-4">
            <a href="#features" className="text-dark-300 hover:text-primary-400 transition-colors">
              Features
            </a>
            <a href="#examples" className="text-dark-300 hover:text-primary-400 transition-colors">
              Examples
            </a>
            <a href="#api" className="text-dark-300 hover:text-primary-400 transition-colors">
              API
            </a>
            <a
              href="https://github.com/jonte/transfer.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-dark-300 hover:text-primary-400 transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}