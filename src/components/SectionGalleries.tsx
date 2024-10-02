import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Gallery } from '@/app/(Home)/page'

export default function SectionGalleries({
  galleries,
}: {
  galleries: Gallery[]
}) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
      {galleries.map((gallery) => {
        // Verifica se a galeria possui uma imagem antes de renderizar
        if (!gallery || !gallery.image) {
          return null // Retorna null se não houver imagem
        }

        return (
          <div
            key={gallery.id}
            className="relative w-full h-64 group overflow-hidden"
          >
            {/* Imagem de fundo com controle de carregamento */}
            <motion.div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 `}
              style={{ backgroundImage: `url(${gallery.image})` }}
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.7 }} // Diminui a opacidade ao passar o mouse
              transition={{ duration: 0.3 }}
            />

            {/* Imagem real oculta para garantir o carregamento */}
            <Image
              src={gallery.image}
              alt={`Gallery image ${gallery.title}`}
              width={600}
              height={600}
            />

            {/* Overlay escuro */}
            <motion.div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

            {/* Texto ao centro com link para a galeria */}
            <Link href={`/Galeria/${gallery.title.toLowerCase()}`}>
              <motion.div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                {gallery.title}
              </motion.div>
            </Link>
          </div>
        )
      })}
    </section>
  )
}
