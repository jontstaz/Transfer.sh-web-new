'use client'

import { motion } from 'framer-motion'
import { Github, Heart, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="px-4 py-16 bg-dark-900/80 backdrop-blur-sm border-t border-dark-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                transfer.jonte.lol
              </span>
            </div>
            <p className="text-dark-400 leading-relaxed">
              Simple, fast, and secure file sharing from the command line. 
              Built with ❤️ for developers.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#examples" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Examples
                </a>
              </li>
              <li>
                <a href="/api" className="text-dark-400 hover:text-primary-400 transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="https://github.com/jonte/transfer.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-dark-400 hover:text-primary-400 transition-colors"
              >
                <Github size={20} />
                <span>GitHub Repository</span>
              </a>
              <a
                href="mailto:jonte@jonte.lol"
                className="flex items-center space-x-3 text-dark-400 hover:text-primary-400 transition-colors"
              >
                <Mail size={20} />
                <span>Contact Support</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-dark-800 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-dark-400 text-sm mb-4 md:mb-0">
            © 2024 transfer.jonte.lol. Made with{' '}
            <Heart size={16} className="inline text-red-500" />{' '}
            by Jonte
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-dark-400">
            <span>Powered by Next.js</span>
            <span>•</span>
            <span>Hosted on Vercel</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}