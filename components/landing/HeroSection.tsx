"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArcadeButton } from "@/components/ui/arcade-button";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Esperar a que el componente se monte para evitar parpadeos de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determinar el mood basándonos en el tema resuelto por next-themes
  // Por defecto asumimos 'day' si no está montado aún para evitar FOUC (Flash of Unstyled Content)
  const isNight = mounted && resolvedTheme === "dark";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF7F2] dark:bg-[#12121A] transition-colors duration-1000">
      
      {/* 1. Capas de Imagen y Overlays */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={
            isNight 
              ? "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1600" // Cóctel refinado, lujoso y con colores vivos
              : "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1600" // Pizza tradicional italiana recién salida del horno
          } 
          alt="Ambiente gastronómico La Bianca Tropical" 
          fill 
          className={`object-cover transition-all duration-1000 ease-in-out ${isNight ? 'scale-110 brightness-90' : 'scale-105 brightness-100'}`}
          priority
          sizes="100vw"
        />
        
        {/* Capa de atmósfera diurna (Crema cálido multiplicada) */}
        {/* Ajuste: Usamos hex directo por si las clases custom fallan, pero mantengo la clase para consistencia si las tienes */}
        <div 
          className={`absolute inset-0 bg-[#FAF7F2]/40 mix-blend-multiply transition-opacity duration-1000 ${
            !isNight ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`} 
        />
        
        {/* Capa de atmósfera nocturna (Azul Noche profundo) */}
        <div 
          className={`absolute inset-0 bg-[#12121A]/70 mix-blend-multiply transition-opacity duration-1000 ${
            isNight ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`} 
        />
        
        {/* Textura de Palmeras del Design System */}
        <div className="absolute inset-0 palm-overlay opacity-30 dark:opacity-20" aria-hidden="true" />
      </div>

      {/* 2. Contenido Central */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center pt-20">
        
        {/* Badge Bitcoin Flotante - Sincronizado v1.1 */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-[#3D5A51] text-white text-xs font-inter font-bold uppercase tracking-wider
                     dark:border dark:border-[#FFB347]/40 dark:shadow-[0_0_12px_rgba(255,179,71,0.3)] backdrop-blur-md"
        >
          <span className="text-base animate-pulse">⚡</span> Bitcoin Accepted • Lightning
        </motion.div>

        {/* Título Principal - Tipografías del Sistema */}
        {/* Ajuste: Aumenté el drop-shadow para mejorar legibilidad sobre imágenes claras */}
        <motion.h1 
          className="font-playfair text-5xl md:text-7xl lg:text-8xl text-[#2C2419] dark:text-[#D4AF37] mb-2 leading-tight drop-shadow-lg transition-colors duration-500"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          La Bianca <span className="font-cormorant italic text-[#E07A5F] dark:text-[#FF6B9E] font-normal">Tropical</span>
        </motion.h1>

        {/* Subtítulo Ristorante Sociale con Anton */}
        <motion.p 
          className="font-anton text-2xl md:text-4xl text-[#E07A5F] dark:text-[#FFB347] uppercase tracking-wide mb-3 transition-colors duration-500 drop-shadow-md"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Ristorante Sociale
        </motion.p>

        {/* Conceptos clave de la landing */}
        {/* Ajuste: Mejor contraste para texto pequeño */}
        <motion.p 
          className="font-inter text-sm md:text-base font-medium tracking-wider uppercase text-[#2C2419]/80 dark:text-white/80 mb-8 max-w-xl transition-colors duration-500 drop-shadow-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Cucina Italiana • Salsa Nights • Bitcoin Friendly
        </motion.p>

        {/* CTAs de Conversión Interactivos */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <ArcadeButton 
            onClick={() => {
              const menuSection = document.getElementById('menu');
              if (menuSection) menuSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            📖 Ver Menú
          </ArcadeButton>
          
          {/* BOTÓN SECUNDARIO OPTIMIZADO PARA CONTRASTE */}
          <button
            onClick={() => {
              const carteleraSection = document.getElementById('cartelera');
              if (carteleraSection) carteleraSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-6 py-3 rounded-full border-2 border-[#E07A5F] text-[#E07A5F] 
                       dark:border-[#FFB347] dark:text-[#FFB347] 
                       bg-white/10 dark:bg-[#1A1A24]/50
                       hover:bg-[#E07A5F] hover:text-white dark:hover:bg-[#FFB347] dark:hover:text-[#12121A]
                       shadow-[0_4px_12px_rgba(224,122,95,0.15)] dark:shadow-[0_0_12px_rgba(255,179,71,0.2)]
                       backdrop-blur-sm transition-all duration-300 font-inter font-bold text-sm tracking-wide uppercase"
          >
            <span className="relative z-10">🎵 Ver Cartelera</span>
            {/* Efecto de brillo sutil al hover */}
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>

      </div>

      {/* 3. Efecto de Vapor (Solo activo de día) */}
      {mounted && !isNight && (
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none overflow-hidden z-10" aria-hidden="true">
          <div className="steam-particle steam-delay-1 left-[15%] bottom-5" />
          <div className="steam-particle steam-delay-2 left-[45%] bottom-10 w-12 h-12" />
          <div className="steam-particle steam-delay-3 left-[75%] bottom-6" />
        </div>
      )}

      {/* Decoración Palmeras Laterales Animadas (Sway) */}
      <span className="absolute top-24 left-4 text-4xl md:text-6xl palm-decoration opacity-40 dark:opacity-20 pointer-events-none select-none" aria-hidden="true">🌴</span>
      <span className="absolute bottom-24 right-4 text-4xl md:text-6xl palm-decoration opacity-40 dark:opacity-20 pointer-events-none select-none" style={{ animationDelay: '2s' }} aria-hidden="true">🌴</span>

    </section>
  );
}