'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Upload } from 'lucide-react'

export default function Terminal() {
  const [copied, setCopied] = useState(false)
  const [currentExample, setCurrentExample] = useState(0)
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)

  const examples = [
    {
      command: "curl --upload-file ./hello.txt https://transfer.jonte.lol/hello.txt",
      response: "https://transfer.jonte.lol/66b329da/hello.txt"
    },
    {
      command: "cat document.pdf | curl --upload-file - https://transfer.jonte.lol/document.pdf",
      response: "https://transfer.jonte.lol/a7f3c2e1/document.pdf"
    },
    {
      command: "curl -H \"Max-Downloads: 1\" --upload-file ./secret.zip https://transfer.jonte.lol/secret.zip",
      response: "https://transfer.jonte.lol/9d8e7f6a/secret.zip"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % examples.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    setFiles(droppedFiles)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  return (
    <section className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Demo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="terminal rounded-xl overflow-hidden">
              <div className="terminal-header" />
              <div className="terminal-dots flex items-center px-4 py-3">
                <div className="terminal-dot red" />
                <div className="terminal-dot yellow" />
                <div className="terminal-dot green" />
                <span className="ml-4 text-dark-400 text-sm font-mono">terminal</span>
              </div>
              
              <div className="p-6 font-mono text-sm">
                <div className="mb-4">
                  <span className="text-primary-400">$</span>
                  <span className="text-green-400 ml-2">
                    {examples[currentExample].command}
                  </span>
                </div>
                
                <motion.div
                  key={currentExample}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-primary-300 mb-4"
                >
                  {examples[currentExample].response}
                </motion.div>

                <div className="flex items-center justify-between pt-4 border-t border-dark-700">
                  <span className="text-dark-400 text-xs">
                    Example {currentExample + 1} of {examples.length}
                  </span>
                  <button
                    onClick={() => copyToClipboard(examples[currentExample].command)}
                    className="flex items-center space-x-2 px-3 py-1 bg-dark-800 hover:bg-dark-700 rounded-md transition-colors"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span className="text-xs">{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* File Upload Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4">Or upload via web</h2>
              <p className="text-dark-400">Drag and drop files or click to browse</p>
            </div>

            <div
              className={`file-upload-area rounded-xl p-12 text-center transition-all duration-300 ${
                isDragging ? 'border-primary-400 bg-primary-400/5' : ''
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                multiple
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload size={48} className="mx-auto mb-4 text-primary-400" />
                <p className="text-lg font-semibold mb-2">
                  {isDragging ? 'Drop files here' : 'Choose files or drag them here'}
                </p>
                <p className="text-dark-400 text-sm">
                  Maximum file size: 10GB
                </p>
              </label>

              {files.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 space-y-2"
                >
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-dark-800 rounded-lg">
                      <span className="text-sm truncate">{file.name}</span>
                      <span className="text-xs text-dark-400">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                    </div>
                  ))}
                  <button className="w-full mt-4 px-6 py-3 bg-primary-600 hover:bg-primary-500 rounded-lg font-semibold transition-colors">
                    Upload {files.length} file{files.length > 1 ? 's' : ''}
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}