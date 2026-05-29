"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArcadeButton } from "@/components/ui/arcade-button";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsNight(hour >= 18 || hour < 6);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" suppressHydrationWarning>
      
      {/* 1. Capas de Imagen y Overlays */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={isNight ? "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000" : "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000"} 
          alt="Ambiente La Bianca Tropical" 
          fill 
          className="object-cover transition-opacity duration-1000"
          priority
          unoptimized
        />
        <div className={`absolute inset-0 bg-crema/70 dark:bg-azul-noche/80 transition-colors duration-1000 ${!isNight ? 'opacity-100' : 'opacity-0'} mix-blend-multiply`} />
        <div className={`absolute inset-0 bg-azul-noche/60 dark:bg-azul-noche/40 transition-colors duration-1000 ${isNight ? 'opacity-100' : 'opacity-0'} mix-blend-multiply`} />
        <div className="absolute inset-0 palm-overlay opacity-20" aria-hidden="true" />
      </div>

      {/* 2. Contenido Central */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Badge Bitcoin Flotante - Actualizado a v1.1 */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-verde-selva text-white text-xs font-inter font-bold uppercase tracking-wider
                     dark:bg-verde-selva dark:border dark:border-amber-salsa dark:shadow-[0_0_12px_rgba(255,179,71,0.3)] backdrop-blur-sm"
        >
          <span className="text-lg">⚡</span> Bitcoin Accepted • Lightning
        </motion.div>

        {/* Título Principal - Ajustado: "Ristorante Sociale" en lugar de "Tropical" duplicado */}
        <motion.h1 
          className="font-playfair text-5xl md:text-7xl lg:text-8xl text-cafe dark:text-dorado mb-4 leading-tight drop-shadow-sm"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          La Bianca <span className="italic text-terracota dark:text-rosa-guayaba">Tropical</span>
        </motion.h1>

        {/* Subtítulo Italiano - NUEVO: "Ristorante Sociale" en lugar de la frase larga */}
        <motion.p 
          className="font-cormorant text-2xl md:text-3xl text-terracota dark:text-amber-salsa italic mb-4 max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Ristorante Sociale
        </motion.p>

        {/* Descripción breve (opcional, mantiene el espíritu original) */}
        <motion.p 
          className="font-inter text-base md:text-lg text-cafe/80 dark:text-white/80 mb-8 max-w-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Cucina italiana • Salsa • Bitcoin Friendly
        </motion.p>

        {/* CTA - CAMBIADO: Botón "Ver Menú" en lugar de "Reservar Mesa" */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <ArcadeButton 
            onClick={() => {
              // TODO: Scroll al componente del menú o abrir modal
              console.log("Abrir menú");
            }}
          >
            📖 Ver Menú
          </ArcadeButton>
          
          {/* Botón secundario opcional: "Eventos" (podría scroll a cartelera) */}
          <button
            onClick={() => document.getElementById('cartelera')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 rounded-full border-2 border-terracota text-terracota 
                       dark:border-amber-salsa dark:text-amber-salsa
                       hover:bg-terracota hover:text-white dark:hover:bg-amber-salsa dark:hover:text-azul-noche
                       transition-all duration-300 font-inter font-semibold"
          >
            🎵 Ver Cartelera
          </button>
        </motion.div>

      </div>

      {/* 3. Efecto de Vapor (Solo imagen de día) */}
      {!isNight && (
        <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="steam-particle steam-delay-1 left-[20%] bottom-10" />
          <div className="steam-particle steam-delay-2 left-[50%] bottom-20 w-12 h-12" />
          <div className="steam-particle steam-delay-3 left-[80%] bottom-12" />
        </div>
      )}

      {/* Decoración Palmeras Laterales */}
      <span className="absolute top-10 left-4 text-4xl md:text-6xl palm-decoration opacity-80" aria-hidden="true">🌴</span>
      <span className="absolute bottom-10 right-4 text-4xl md:text-6xl palm-decoration opacity-80" style={{ animationDelay: '2s' }} aria-hidden="true">🌴</span>

    </section>
  );
}