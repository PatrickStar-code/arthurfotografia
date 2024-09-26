"use client";
import Marquee3D from "@/components/ui/Marque3d";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="py-16 bg-white">
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
              <h1 className="text-4xl text-gray-700 font-bold md:text-5xl mb-2 -mt-48">
                Capturando momentos que contam<span className="text-blue-500"> Histórias.</span>
              </h1>
              {/* Frase adicional abaixo do título */}
              <p className="text-lg text-gray-600">
                Cada clique, uma memória eterna.
              </p>
            </motion.div>
            
          </div>
        </div>
      </div>
    </>
  );
}
