"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Gallery } from "@/app/(Home)/page";

export default function SectionGalleries({
  galleries,
}: {
  galleries: Gallery[];
}) {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(galleries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = galleries.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="p-8">
      <section className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {currentItems.map((gallery) => {
          if (!gallery || !gallery.image) return null;

          return (
            <div
              key={gallery.id}
              className="relative w-full h-64 group overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                style={{ backgroundImage: `url(${gallery.image})` }}
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.7 }}
                transition={{ duration: 0.3 }}
              />
              <Image
                src={gallery.image}
                alt={`Gallery image ${gallery.title}`}
                width={600}
                height={600}
              />
              <motion.div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <Link href={`/Galeria/${gallery.title.toLowerCase()}`}>
                <motion.div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                  {gallery.title}
                </motion.div>
              </Link>
            </div>
          );
        })}
      </section>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded text-sm font-medium hover:bg-gray-100 disabled:opacity-50"
          >
            Anterior
          </button>
          <span className="text-sm text-gray-500">
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded text-sm font-medium hover:bg-gray-100 disabled:opacity-50"
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
}
