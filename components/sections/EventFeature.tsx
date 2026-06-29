"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Ticket, Sparkles, ExternalLink } from "lucide-react";
import { TropicalQR } from "@/components/ui/TropicalQR";

const EVENT_DATE = new Date("2026-07-02T18:00:00-06:00").getTime();
const LUMA_LINK = "https://luma.com/a8q971y8";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function EventFeature() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = EVENT_DATE - now;

      if (distance < 0) {
        setIsVisible(false);
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <section className="relative py-20 px-4 bg-[#FAF7F2] dark:bg-[#12121A] transition-colors duration-1000 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/textures/brick-pattern.png')] mix-blend-multiply dark:mix-blend-screen"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 dark:bg-[#FFB347]/10 border border-[#D4AF37]/40 dark:border-[#FFB347]/40 font-space-grotesk text-xs uppercase tracking-widest font-bold text-[#D4AF37] dark:text-[#FFB347]">
            <Sparkles size={14} className="animate-pulse" />
            Evento Único en Mérida
            <Sparkles size={14} className="animate-pulse" />
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-playfair text-4xl md:text-5xl lg:text-6xl text-[#2C2419] dark:text-[#D4AF37] mb-3 drop-shadow-sm"
        >
          Bull Bitcoin <span className="italic font-cormorant text-[#E07A5F] dark:text-[#FF6B9E]">Tour</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center font-inter text-base text-[#2C2419]/70 dark:text-white/60 mb-10 max-w-2xl mx-auto"
        >
          La comunidad Bitcoin se reúne en La Bianca Tropical. Una noche de networking, educación y buena cocina italiana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 md:gap-6 mb-12"
        >
          {[
            { value: timeLeft.days, label: "DÍAS" },
            { value: timeLeft.hours, label: "HORAS" },
            { value: timeLeft.minutes, label: "MIN" },
            { value: timeLeft.seconds, label: "SEG" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center px-4 md:px-6 py-3 md:py-4 rounded-2xl bg-white/80 dark:bg-[#1A1A24]/90 backdrop-blur-xl border border-[#D4AF37]/30 dark:border-[#FFB347]/30 shadow-[0_4px_12px_rgba(212,175,55,0.1)] dark:shadow-[0_0_15px_rgba(255,179,71,0.15)]"
            >
              <span className="font-anton text-3xl md:text-5xl text-[#2C2419] dark:text-[#FFB347] tabular-nums">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="font-space-grotesk text-[10px] md:text-xs text-[#2C2419]/60 dark:text-white/50 uppercase tracking-widest font-bold mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-[#1A1A24]/90 backdrop-blur-xl border border-[#E07A5F]/20 dark:border-[#FFB347]/30 rounded-3xl p-8 shadow-[0_8px_32px_rgba(44,36,25,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
          >
            <h3 className="font-playfair text-2xl text-[#2C2419] dark:text-[#D4AF37] mb-6">
              Detalles del Evento
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Calendar size={20} className="text-[#E07A5F] dark:text-[#FFB347] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-inter text-sm font-bold text-[#2C2419] dark:text-white">Jueves 2 de Julio, 2026</p>
                  <p className="font-inter text-xs text-[#2C2419]/60 dark:text-white/50">No te lo pierdas</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={20} className="text-[#E07A5F] dark:text-[#FFB347] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-inter text-sm font-bold text-[#2C2419] dark:text-white">6:00 PM - 9:00 PM CST</p>
                  <p className="font-inter text-xs text-[#2C2419]/60 dark:text-white/50">3 horas de Bitcoin & salsa</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#E07A5F] dark:text-[#FFB347] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-inter text-sm font-bold text-[#2C2419] dark:text-white">La Bianca Tropical</p>
                  <p className="font-inter text-xs text-[#2C2419]/60 dark:text-white/50">Mérida, Yucatán</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users size={20} className="text-[#E07A5F] dark:text-[#FFB347] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-inter text-sm font-bold text-[#2C2419] dark:text-white">Host: Barefoot Robot × AceptaBitcoin</p>
                  <p className="font-inter text-xs text-[#2C2419]/60 dark:text-white/50">Comunidad Bitcoin de Mérida</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E07A5F]/10 dark:border-white/5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3D5A51]/10 dark:bg-[#3D5A51]/20 text-[#3D5A51] dark:text-[#FFB347] text-xs font-space-grotesk font-bold border border-[#3D5A51]/20 dark:border-[#FFB347]/20">
                <Ticket size={12} /> Gratuito
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4A261]/10 dark:bg-[#F4A261]/20 text-[#2C2419] dark:text-[#F4A261] text-xs font-space-grotesk font-bold border border-[#F4A261]/20 dark:border-[#F4A261]/30">
                ⚡ Cupo Limitado
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E07A5F]/10 dark:bg-[#FFB347]/10 text-[#E07A5F] dark:text-[#FFB347] text-xs font-space-grotesk font-bold border border-[#E07A5F]/20 dark:border-[#FFB347]/20">
                🔐 Verificación Wallet
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-[#1A1A24]/90 backdrop-blur-xl border border-[#D4AF37]/30 dark:border-[#FFB347]/40 rounded-3xl p-8 shadow-[0_8px_32px_rgba(212,175,55,0.1)] dark:shadow-[0_12px_40px_rgba(255,179,71,0.15)] flex flex-col items-center justify-center text-center"
          >
            <p className="font-cormorant text-xl italic text-[#2C2419]/80 dark:text-white/70 mb-6">
              "El futuro del dinero se encuentra en la mesa correcta"
            </p>

            <TropicalQR
              value={LUMA_LINK}
              label="REGÍSTRATE AQUÍ"
              size={200}
            />

            <a
              href={LUMA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full mt-6 py-4 px-6 rounded-2xl overflow-hidden
                         bg-gradient-to-r from-[#D4AF37] via-[#E07A5F] to-[#D4AF37]
                         hover:from-[#FFB347] hover:via-[#FF6B9E] hover:to-[#FFB347]
                         text-white font-anton font-bold text-lg uppercase tracking-wider
                         flex items-center justify-center gap-3
                         shadow-lg hover:shadow-xl transition-all duration-300
                         hover:-translate-y-0.5"
            >
              <span>Reserva Tu Lugar</span>
              <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="font-inter text-xs text-[#2C2419]/50 dark:text-white/40 mt-4">
              Registro requerido vía Luma
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
