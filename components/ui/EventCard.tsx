"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface EventCardProps {
  titulo: string;
  descripcion: string;
  dia: string;
  hora: string;
  imagenPlaceholder: string;
  categoria: string;
  icono: string;
  index: number;
}

export function EventCard({ 
  titulo, 
  descripcion, 
  dia, 
  hora, 
  imagenPlaceholder, 
  categoria, 
  icono,
  index 
}: EventCardProps) {
  return (
    <motion.div 
      className="group relative bg-white dark:bg-azul-profundo rounded-2xl overflow-hidden shadow-lg 
                 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
                 border border-terracota/10 dark:border-amber-salsa/20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-terracota/20 to-dorado/20 dark:from-amber-salsa/20 dark:to-rosa-guayaba/20">
        {imagenPlaceholder ? (
          <Image 
            src={imagenPlaceholder} 
            alt={titulo}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-6xl">
            {icono}
          </div>
        )}
        
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-azul-noche/90 backdrop-blur-sm 
                        px-3 py-1 rounded-full text-xs font-inter font-bold text-terracota dark:text-amber-salsa
                        border border-terracota/20 dark:border-amber-salsa/30">
          {categoria}
        </div>
        
        <div className="absolute bottom-4 right-4 bg-terracota dark:bg-amber-salsa 
                        text-white dark:text-azul-noche px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
          {dia}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">{icono}</span>
          <h3 className="font-playfair text-xl text-cafe dark:text-dorado">
            {titulo}
          </h3>
        </div>
        
        <p className="font-inter text-sm text-cafe/70 dark:text-white/60 mb-4 line-clamp-2">
          {descripcion}
        </p>
        
        <div className="flex items-center justify-between pt-3 border-t border-terracota/10 dark:border-amber-salsa/10">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-terracota dark:text-amber-salsa">🕐</span>
            <span className="font-space-grotesk text-xs text-cafe/60 dark:text-white/50">
              {hora}
            </span>
          </div>
          
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-xs font-inter font-semibold text-terracota dark:text-amber-salsa 
                       hover:underline transition-all"
          >
            Reservar →
          </button>
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 
                      transition-opacity duration-500 bg-gradient-to-t from-terracota/5 to-transparent" />
    </motion.div>
  );
}