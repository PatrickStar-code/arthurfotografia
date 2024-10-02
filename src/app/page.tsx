'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { VelocityScroll } from '@/components/ui/scroll-based-velocity'
import WordPullUp from '@/components/ui/word-pull-up'
import { Marquee3D } from '@/components/Marque3d'
import ImageCarrousel from '@/components/ImageCarrousel'
import SectionGalleries from '@/components/SectionGalleries'
import Form from '@/components/Form'

export interface Gallery {
  id: number
  title: string
  image: string
}

const Images = [
  'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
]

const galleriesData = [
  { id: 1, title: 'Galeria1', image: 'https://via.placeholder.com/300' },
  { id: 2, title: 'Galeria2', image: 'https://via.placeholder.com/300' },
  { id: 3, title: 'Galeria3', image: 'https://via.placeholder.com/300' },
  { id: 4, title: 'Galeria4', image: 'https://via.placeholder.com/300' },
  { id: 5, title: 'Galeria5', image: 'https://via.placeholder.com/300' },
  { id: 6, title: 'Galeria6', image: 'https://via.placeholder.com/300' },
]

export default function Home() {
  return (
    <>
      {/* Container principal */}
      <main className="py-16 bg-white">
        <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
          <div className="flex flex-col justify-center items-start gap-6 md:flex-row md:items-center lg:gap-16 relative">
            {/* Container da imagem com animação */}
            <motion.div
              className="relative w-full md:w-6/12 lg:w-6/12"
              initial={{ x: '-100%', opacity: 0 }} // Inicialmente fora da tela à esquerda
              animate={{ x: 0, opacity: 1 }} // Anima para a posição original
              transition={{ duration: 0.5 }} // Duração da animação
            >
              <Image
                src="/imgs/hero.jpg"
                width="960"
                height="960"
                alt="shoes"
                loading="lazy"
              />

              <div className="absolute -bottom-6 -right-32 text-white p-4 md:p-6 w-full md:w-auto">
                <Marquee3D />
              </div>
            </motion.div>

            {/* Container do texto com animação */}
            <motion.div
              className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12"
              initial={{ x: '100%', opacity: 0 }} // Inicialmente fora da tela à direita
              animate={{ x: 0, opacity: 1 }} // Anima para a posição original
              transition={{ duration: 0.5, delay: 0.5 }} // Duração da animação com atraso
            >
              {/* Texto principal com margem superior negativa para posicionar mais para cima */}
              <h1 className="text-4xl text-gray-700 font-bold md:text-5xl mb-2 md:-mt-48 z-40">
                Capturando momentos que contam
                <span className="text-blue-500"> Histórias.</span>
              </h1>
              {/* Frase adicional abaixo do título */}
              <p className="text-lg text-gray-600">
                Cada clique, uma memória eterna.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      {/* Section com animação */}
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

      <motion.section
        initial={{ opacity: 0, y: 100 }} // Inicialmente fora da tela
        whileInView={{ opacity: 1, y: 0 }} // Animação ocorre quando entra na viewport
        viewport={{ once: true, amount: 0.2 }} // A animação só acontece uma vez, 20% visível
        transition={{ duration: 0.6 }}
      >
        <ImageCarrousel Images={Images} />
      </motion.section>
      <motion.section
        className="flex justify-center text-center flex-col gap-8"
        initial={{ opacity: 0, y: 100 }} // Inicialmente fora da tela
        whileInView={{ opacity: 1, y: 0 }} // Animação ocorre quando entra na viewport
        viewport={{ once: true, amount: 0.2 }} // A animação só acontece uma vez, 20% visível
        transition={{ duration: 0.6 }}
      >
        <WordPullUp
          className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
          words="Galerias"
        />
        <SectionGalleries galleries={galleriesData} />
      </motion.section>
      <Form />
    </>
  )
}
