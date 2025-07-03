'use client'

import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function Examples() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const examples = [
    {
      title: 'Basic Upload',
      description: 'Upload a file and get a shareable link',
      command: 'curl --upload-file ./document.pdf https://transfer.jonte.lol/document.pdf',
      response: 'https://transfer.jonte.lol/66b329da/document.pdf'
    },
    {
      title: 'Pipe from stdin',
      description: 'Upload data directly from command output',
      command: 'echo "Hello World" | curl --upload-file - https://transfer.jonte.lol/hello.txt',
      response: 'https://transfer.jonte.lol/a7f3c2e1/hello.txt'
    },
    {
      title: 'Set Download Limit',
      description: 'Limit the number of downloads',
      command: 'curl -H "Max-Downloads: 1" --upload-file ./secret.zip https://transfer.jonte.lol/secret.zip',
      response: 'https://transfer.jonte.lol/9d8e7f6a/secret.zip'
    },
    {
      title: 'Set Expiry Time',
      description: 'Set custom expiration time',
      command: 'curl -H "Max-Days: 1" --upload-file ./temp.txt https://transfer.jonte.lol/temp.txt',
      response: 'https://transfer.jonte.lol/f4e5d6c7/temp.txt'
    },
    {
      title: 'Upload Multiple Files',
      description: 'Create a zip archive of multiple files',
      command: 'tar czf - file1.txt file2.txt | curl --upload-file - https://transfer.jonte.lol/archive.tar.gz',
      response: 'https://transfer.jonte.lol/b8a9c0d1/archive.tar.gz'
    },
    {
      title: 'Download with wget',
      description: 'Download files using wget',
      command: 'wget https://transfer.jonte.lol/66b329da/document.pdf',
      response: 'document.pdf saved [1.2MB/1.2MB]'
    }
  ]

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <section id="examples" className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Usage Examples
            </span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            Learn how to use transfer.jonte.lol with these practical examples
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="terminal rounded-xl overflow-hidden h-full">
                <div className="terminal-header" />
                <div className="terminal-dots flex items-center justify-between px-4 py-3">
                  <div className="flex items-center">
                    <div className="terminal-dot red" />
                    <div className="terminal-dot yellow" />
                    <div className="terminal-dot green" />
                    <span className="ml-4 text-dark-400 text-sm font-mono">terminal</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(example.command, index)}
                    className="flex items-center space-x-2 px-3 py-1 bg-dark-700 hover:bg-dark-600 rounded-md transition-colors opacity-0 group-hover:opacity-100"
                  >
                    {copiedIndex === index ? <Check size={14} /> : <Copy size={14} />}
                    <span className="text-xs">{copiedIndex === index ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-primary-300 mb-2">
                      {example.title}
                    </h3>
                    <p className="text-dark-400 text-sm mb-4">
                      {example.description}
                    </p>
                  </div>
                  
                  <div className="font-mono text-sm space-y-2">
                    <div className="flex">
                      <span className="text-primary-400 mr-2">$</span>
                      <span className="text-green-400 break-all">
                        {example.command}
                      </span>
                    </div>
                    
                    <div className="text-primary-300 pl-4 break-all">
                      {example.response}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 bg-dark-800/50 backdrop-blur-sm rounded-xl border border-dark-700">
            <h3 className="text-xl font-semibold mb-4 text-primary-300">
              Shell Function
            </h3>
            <p className="text-dark-400 mb-4">
              Add this function to your .bashrc or .zshrc for easier uploads:
            </p>
            <div className="terminal rounded-lg overflow-hidden">
              <div className="p-4 font-mono text-sm text-left">
                <div className="text-green-400 break-all">
                  transfer() &#123; curl --upload-file "$1" https://transfer.jonte.lol/"$(basename "$1")"; &#125;
                </div>
                <div className="mt-2 text-dark-400">
                  # Usage: transfer myfile.txt
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}