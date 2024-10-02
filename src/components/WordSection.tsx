'use client'
import { motion } from 'framer-motion'
import React from 'react'
import WordPullUp from './ui/word-pull-up'
import { VelocityScroll } from './ui/scroll-based-velocity'

export default function WordSection() {
  return (
    <motion.section
      className="flex justify-center text-center flex-col gap-8"
      initial={{ opacity: 0, y: 100 }} // Inicialmente fora da tela
      whileInView={{ opacity: 1, y: 0 }} // Animação ocorre quando entra na viewport
      viewport={{ once: true, amount: 0.2 }} // A animação só acontece uma vez, 20% visível
      transition={{ duration: 0.6 }}
    >
      <WordPullUp
        className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
        words="Tiramos Fotos de"
      />
      <VelocityScroll
        text="Casamentos Festas Aniversários Formaturas"
        defaultVelocity={1}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
    </motion.section>
  )
}
