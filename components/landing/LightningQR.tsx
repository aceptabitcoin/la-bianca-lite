"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface LightningQRProps {
  qrSrc: string;
  walletAddr: string;
  showSection?: boolean;
  title?: string;
  description?: string;
}

export function LightningQR({ 
  qrSrc, 
  walletAddr, 
  showSection = true,
  title = "Paga con Bitcoin",
  description = "Rápido, seguro y sin comisiones bancarias. Escanea el código con tu wallet Lightning favorita."
}: LightningQRProps) {
  
  const QRContent = () => (
    <div className="group relative inline-block p-1 rounded-2xl bg-gradient-to-br from-dorado to-terracota dark:from-amber-salsa dark:to-rosa-guayaba animate-gradient-rotate shadow-2xl">
      
      <div className="relative bg-white dark:bg-azul-profundo rounded-xl p-6 backdrop-blur-sm border border-white/20">
        
        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
          <Image 
            src={qrSrc} 
            alt="Código QR para pago Lightning Network" 
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>
        
        <div className="absolute -top-3 -right-3 bg-verde-selva dark:bg-amber-salsa text-white dark:text-azul-noche text-xs font-space-grotesk font-bold px-3 py-1 rounded-full shadow-lg animate-pulse-slow">
          ⚡ LIGHTNING
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="font-inter text-xs text-cafe/60 dark:text-white/50 mb-1 uppercase tracking-widest">
          O copia la dirección:
        </p>
        <code className="inline-block max-w-[280px] mx-auto px-3 py-2 rounded-lg bg-white/50 dark:bg-azul-noche/50 border border-terracota/20 dark:border-amber-salsa/30 font-space-grotesk text-xs text-cafe dark:text-amber-salsa break-all select-all cursor-pointer hover:bg-white dark:hover:bg-azul-noche transition-colors">
          {walletAddr}
        </code>
      </div>
    </div>
  );

  if (!showSection) {
    return <QRContent />;
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-crema to-white dark:from-azul-noche dark:to-azul-profundo transition-colors duration-500">
      <div className="container mx-auto max-w-3xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-cafe dark:text-dorado mb-4">
            {title.split(' ')[0]} <span className="text-terracota dark:text-amber-salsa">{title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="font-inter text-cafe/80 dark:text-white/70 max-w-lg mx-auto">
            {description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <QRContent />
        </motion.div>

        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a 
            href="https://aceptabitcoin.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-inter text-sm text-terracota dark:text-rosa-guayaba hover:underline underline-offset-4 transition-all"
          >
            🌿 ¿Qué es Lightning Network? Aprende aquí →
          </a>
        </motion.div>

      </div>
    </section>
  );
}