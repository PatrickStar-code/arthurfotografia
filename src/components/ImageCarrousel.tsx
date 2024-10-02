import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react' // Importe os ícones

export default function ImageCarrousel({ Images }: { Images: string[] }) {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4])

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % Images.length, // Altere o tamanho para o número de imagens
      )
      return updatedIndexes
    })
  }

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + Images.length - 1) % Images.length, // Altere o tamanho para o número de imagens
      )

      return updatedIndexes
    })
  }

  const positions = ['center', 'left1', 'left', 'right', 'right1']

  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5, opacity: 1 },
    left1: { x: '-50%', scale: 0.7, zIndex: 3, opacity: 0.5 },
    left: { x: '-90%', scale: 0.5, zIndex: 2, opacity: 0.3 },
    right: { x: '90%', scale: 0.5, zIndex: 1, opacity: 0.3 },
    right1: { x: '50%', scale: 0.7, zIndex: 3, opacity: 0.5 },
  }

  return (
    <div className="flex items-center justify-center h-[31.25rem] md:h-[40rem] relative">
      <div className="absolute left-0 z-10">
        <button
          className="text-white bg-indigo-400 rounded-full p-2 hover:bg-indigo-500"
          onClick={handleBack}
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      {Images.length > 0 ? ( // Verifique se o array de imagens não está vazio
        Images.map((image, index) => (
          <motion.img
            key={index}
            src={image} // Renderiza a imagem diretamente
            alt={`Image ${index + 1}`} // Texto alt para acessibilidade
            className="  w-[80%] md:w-[40%]" // Torna a imagem redonda e ajusta o tamanho
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute' }}
          />
        ))
      ) : (
        <p className="text-white">No Images available.</p> // Mensagem se não houver imagens
      )}

      <div className="absolute right-0 z-10">
        <button
          className="text-white bg-indigo-400 rounded-full p-2 hover:bg-indigo-500"
          onClick={handleNext}
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  )
}
