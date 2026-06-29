"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function EventMarquee() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const eventDate = new Date("2026-07-03T00:00:00-06:00");
    const now = new Date();
    setIsVisible(now < eventDate);
  }, []);

  if (!isVisible) return null;

  const tickerText = "🐂 BULL BITCOIN TOUR EN MÉRIDA • JUEVES 2 DE JULIO • 6:00 PM • LA BIANCA TROPICAL • REGISTRO GRATUITO • ⚡ NETWORKING + BITCOIN + ITALIAN FOOD • 🎟️ CUPO LIMITADO • ";
  const repeatedText = tickerText.repeat(4);

  const bulbs = Array.from({ length: 24 });

  return (
    <div className="relative w-full py-4 bg-gradient-to-r from-[#FAF7F2] via-[#FFF8DC] to-[#FAF7F2] dark:from-[#12121A] dark:via-[#1A1A24] dark:to-[#12121A] border-y-2 border-[#D4AF37]/40 dark:border-[#FFB347]/40 overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.2)] dark:shadow-[0_0_20px_rgba(255,179,71,0.15)]">
      
      <div className="absolute top-0 left-0 right-0 flex justify-between px-2">
        {bulbs.map((_, i) => (
          <div
            key={`top-${i}`}
            className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] dark:bg-[#FFB347] shadow-[0_0_6px_rgba(212,175,55,0.8)] dark:shadow-[0_0_6px_rgba(255,179,71,0.8)]"
            style={{
              animation: `bulb-chase 2s infinite`,
              animationDelay: `${(i * 0.08)}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
        {bulbs.map((_, i) => (
          <div
            key={`bottom-${i}`}
            className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] dark:bg-[#FFB347] shadow-[0_0_6px_rgba(212,175,55,0.8)] dark:shadow-[0_0_6px_rgba(255,179,71,0.8)]"
            style={{
              animation: `bulb-chase 2s infinite`,
              animationDelay: `${(i * 0.08)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative flex whitespace-nowrap">
        <motion.div
          className="flex items-center gap-8 font-anton text-lg md:text-xl tracking-wider text-[#2C2419] dark:text-[#FFB347] uppercase"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 120,
              ease: "linear",
            },
          }}
        >
          <span>{repeatedText}</span>
          <span>{repeatedText}</span>
        </motion.div>
      </div>
    </div>
  );
}
