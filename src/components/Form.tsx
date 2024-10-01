'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'

export default function ContatoAnimado() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const submitVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-10 space-y-10 lg:space-y-0 p-8 mt-10 container">
      {/* Caixas de ícones à esquerda */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-4 bg-green-500 text-white shadow-lg"
        >
          <FaWhatsapp size={60} />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-4 bg-pink-500 text-white  shadow-lg"
        >
          <FaInstagram size={60} />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-4 bg-blue-600 text-white  shadow-lg"
        >
          <FaFacebook size={60} />
        </motion.div>
      </motion.div>

      {/* Formulário à direita */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          Entre em Contato
        </h1>

        {!isSubmitted ? (
          <motion.form
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <motion.div variants={inputVariants} className="flex flex-col">
              <label className="text-lg font-semibold mb-2">Nome:</label>
              <input
                type="text"
                name="nome"
                required
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            <motion.div variants={inputVariants} className="flex flex-col">
              <label className="text-lg font-semibold mb-2">Email:</label>
              <input
                type="email"
                name="email"
                required
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            <motion.div variants={inputVariants} className="flex flex-col">
              <label className="text-lg font-semibold mb-2">Mensagem:</label>
              <textarea
                name="mensagem"
                required
                rows={4}
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            variants={submitVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-green-500 font-bold text-xl">
              Formulário enviado com sucesso!
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
