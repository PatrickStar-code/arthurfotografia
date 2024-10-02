'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, DotIcon } from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image'

export default function ImageCarrousel({ Images }: { Images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? Images.length - 1 : prev - 1))
  }

  function nextSlide() {
    setCurrentIndex((prev) => (prev === Images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative flex flex-col items-center py-20">
      <div className="overflow-hidden w-[90rem] h-[20rem]">
        <motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: -currentIndex * 320 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {Images.map((image, index) => (
            <motion.div key={index} className="p-2 min-w-[30rem] h-[20rem]">
              <Image
                src={image}
                alt="Slide"
                className="w-full h-full object-cover rounded"
                width={320}
                height={320}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex flew-row w-full justify-between mt-6">
        <button className=" bg-gray-100 text-black rounded-full shadow transition-all hover:opacity-70 p-3">
          <ArrowLeft onClick={prevSlide} />
        </button>
        <div className="flex flex-row gap-1">
          {Images.map((_, index) => (
            <DotIcon
              key={index}
              className={`cursor-pointer text-2xl ${index === currentIndex ? 'text-gray-800' : 'text-gray-500'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <button className="bg-gray-100 text-black rounded-full shadow transition-all hover:opacity-70 p-3">
          <ArrowRight onClick={nextSlide} />
        </button>
      </div>
    </div>
  )
}
