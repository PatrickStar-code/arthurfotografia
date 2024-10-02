'use client'
import BlurFade from '@/components/ui/blur-fade'
import { ArrowLeft, Search } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Viewer from 'react-viewer'
import { motion } from 'framer-motion'

const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0
  const width = isLandscape ? 800 : 600
  const height = isLandscape ? 600 : 800
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`
})

export default function GalleriesImages() {
  const [visible, setVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openViewer = (index: number) => {
    setCurrentIndex(index)
    setVisible(true)
  }

  const closeViewer = () => {
    setVisible(false)
  }

  return (
    <>
      <section id="photos" className="p-8 container relative z-0">
        <motion.div
          className="columns-2 gap-4 sm:columns-3"
          whileInView={{ opacity: 1, y: 0 }} // Animação ocorre quando entra na viewport
          viewport={{ once: true, amount: 0.2 }} // A animação só acontece uma vez, 20% visível
          transition={{ duration: 0.6 }}
        >
          {images.map((imageUrl, idx) => (
            <div
              className="relative group p-2 hover:transition-shadow hover:grayscale cursor-pointer"
              key={idx}
              onClick={() => openViewer(idx)} // Abre o viewer com a imagem clicada
            >
              <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                <Image
                  className="mb-4 size-full rounded-lg object-contain"
                  src={imageUrl}
                  alt={`Random stock image ${idx + 1}`}
                  width={600}
                  height={600}
                  loading="lazy"
                />
                <Search
                  size={40}
                  className="absolute text-white font-bold lg:left-[45%] left-[40%] top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </BlurFade>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Botão de voltar */}
      <div className="fixed bottom-0 left-4 md:left-12 w-full animate-fade-in">
        <Link href="/">
          <button className="my-8 ml-auto p-4 bg-blue-500 text-white text-sm font-bold tracking-wide rounded-full focus:outline-none hover:animate-bounce">
            <ArrowLeft />
          </button>
        </Link>
      </div>

      {/* Componente Viewer */}
      <Viewer
        visible={visible}
        onClose={closeViewer}
        images={images.map((url) => ({ src: url, alt: '' }))} // Passando as imagens para o viewer
        activeIndex={currentIndex} // Controla qual imagem está sendo exibida
      />
    </>
  )
}
