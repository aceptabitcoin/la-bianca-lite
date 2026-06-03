"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MenuItemCardProps {
  nombre: string;
  descripcion: string;
  precio: string; // Ahora espera string formateado "$XXX" del JSON
  badges?: string[];
  recomendado?: boolean;
  iconoPlaceholder?: string;
}

// Mapeo de badges según DESIGN_SYSTEM.md v1.1
const getBadgeClasses = (badge: string) => {
  const lower = badge.toLowerCase();
  
  if (lower.includes("vegano") || lower.includes("vegetariano")) {
    return "bg-[#3D5A51] text-white border border-[#2E7D64]/30";
  }
  if (lower.includes("recomendado") || lower.includes("clásico") || lower.includes("clasico")) {
    return "bg-[#D4AF37] text-[#12121A] dark:bg-[#FFB347] dark:text-[#12121A] shadow-[0_0_8px_rgba(212,175,55,0.3)] dark:shadow-[0_0_8px_rgba(255,179,71,0.4)]";
  }
  if (lower.includes("picante") || lower.includes("potente") || lower.includes("ahumado")) {
    return "bg-[#E07A5F] text-white dark:bg-[#FF6B9E] dark:text-[#12121A]";
  }
  if (lower.includes("infantil") || lower.includes("para compartir")) {
    return "bg-[#E8DDD0] text-[#2C2419] dark:bg-[#1A1A24] dark:text-[#FFB347] dark:border dark:border-[#FFB347]/30";
  }
  
  // Default fallback
  return "bg-[#2C2419]/10 text-[#2C2419] dark:bg-[#FFFFFF]/10 dark:text-[#FFFFFF]/80 dark:border dark:border-[#FFFFFF]/10";
};

export function MenuItemCard({
  nombre,
  descripcion,
  precio,
  badges = [],
  recomendado = false,
  iconoPlaceholder,
}: MenuItemCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col rounded-2xl
                 bg-[#FFFFFF]/80 dark:bg-[#1A1A24]/90 backdrop-blur-md
                 border border-[#E07A5F]/20 dark:border-[#FFB347]/30
                 p-5 shadow-[0_4px_12px_rgba(224,122,95,0.15)] dark:shadow-[0_0_20px_rgba(255,179,71,0.08)]
                 hover:shadow-xl hover:-translate-y-1 hover:border-[#E07A5F]/40 dark:hover:border-[#FFB347]/50
                 transition-all duration-300"
    >
      {/* Icono/Imagen Placeholder - Solo se muestra SI existe */}
      {iconoPlaceholder && (
        <div className="mb-4 flex h-32 items-center justify-center rounded-xl 
                        bg-gradient-to-br from-[#E07A5F]/10 to-[#D4AF37]/10 
                        dark:from-[#FFB347]/10 dark:to-[#FF6B9E]/10 
                        text-5xl select-none">
          {iconoPlaceholder}
        </div>
      )}

      <div className="flex-1">
        {/* Header: Nombre + Badge Top */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-playfair text-lg font-semibold text-[#2C2419] dark:text-[#D4AF37] leading-snug">
            {nombre}
          </h3>
          {recomendado && (
            <span className="shrink-0 rounded-full bg-[#D4AF37]/20 px-2 py-0.5 
                             text-[10px] font-bold uppercase tracking-wider 
                             text-[#D4AF37] dark:text-[#FFB347] salsa-shine">
              ★ Top
            </span>
          )}
        </div>

        {/* Descripción - Contraste mejorado para modo noche */}
        <p className="mt-1.5 font-inter text-sm text-[#2C2419]/80 dark:text-[#FFFFFF]/80 leading-relaxed">
          {descripcion}
        </p>

        {/* Badges dinámicos */}
        {badges.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {badges.map((badge, idx) => (
              <span
                key={`${badge}-${idx}`}
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
                  getBadgeClasses(badge)
                )}
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Precio con Space Grotesk */}
      <div className="mt-4 flex items-end justify-between border-t border-[#E07A5F]/10 dark:border-[#FFB347]/10 pt-3">
        <span className="font-space-grotesk text-base font-bold text-[#E07A5F] dark:text-[#FFB347]">
          {precio}
        </span>
      </div>
    </motion.div>
  );
}