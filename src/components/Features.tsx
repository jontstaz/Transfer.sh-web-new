'use client'

import { motion } from 'framer-motion'
import { 
  Terminal, 
  Link, 
  Database, 
  Clock, 
  Tag, 
  Lock,
  Zap,
  Globe,
  Shield
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Terminal,
      title: 'Command Line First',
      description: 'Built for developers who love the terminal. Simple curl commands for instant uploads.'
    },
    {
      icon: Link,
      title: 'Shareable Links',
      description: 'Get instant shareable URLs for your files. Perfect for quick collaboration.'
    },
    {
      icon: Database,
      title: 'Large File Support',
      description: 'Upload files up to 10GB. Perfect for datasets, videos, and large documents.'
    },
    {
      icon: Clock,
      title: 'Temporary Storage',
      description: 'Files are automatically cleaned up after 14 days to keep the service fast.'
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'All uploads are encrypted in transit and stored securely.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized infrastructure ensures your files upload and download quickly.'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Files are served from multiple locations worldwide for fast access.'
    },
    {
      icon: Lock,
      title: 'Download Limits',
      description: 'Set maximum download counts and expiry dates for sensitive files.'
    },
    {
      icon: Tag,
      title: 'Completely Free',
      description: 'No registration required. No hidden fees. Just upload and share.'
    }
  ]

  return (
    <section id="features" className="px-4 py-20 bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            Everything you need for simple, secure, and fast file sharing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-dark-800/50 backdrop-blur-sm rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                  <feature.icon size={24} className="text-primary-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-dark-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}