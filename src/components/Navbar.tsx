'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className=" bg-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-16">
          {/* Ícone Hamburguer à esquerda */}
          <div className="absolute left-0 flex items-center">
            <button
              onClick={toggleMenu}
              className="bg-white p-2 rounded-xl text-black hover:text-gray-700 focus:outline-none focus:text-gray-700"
            >
              {/* Ícone Hamburguer */}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Linha superior */}
                <motion.line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  initial={{ rotate: 0, y: 0 }}
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Linha do meio */}
                <motion.line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  initial={{ opacity: 1 }}
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Linha inferior */}
                <motion.line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  initial={{ rotate: 0, y: 0 }}
                  animate={
                    isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </motion.svg>
            </button>
          </div>

          <div className="flex-grow flex justify-center">
            <h1 className="text-xl font-bold">Logo</h1>
          </div>
        </div>
      </div>

      {/* Menu com position: fixed */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`fixed top-16 left-0 w-full bg-white z-40 ${isOpen ? 'block' : 'hidden'}`}
        style={{ overflow: 'hidden' }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200"
          >
            Item 2
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200"
          >
            Item 3
          </a>
        </div>
      </motion.div>
    </nav>
  )
}
