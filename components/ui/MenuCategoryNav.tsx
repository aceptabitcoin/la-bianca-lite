"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Categoria {
  id: string;
  titulo: string;
  icono: string;
}

interface MenuCategoryNavProps {
  categorias: Categoria[];
  activeId: string;
  onChange: (id: string) => void;
}

export function MenuCategoryNav({
  categorias,
  activeId,
  onChange,
}: MenuCategoryNavProps) {
  const showVerTodas = categorias.length > 8;

  return (
    <div className="relative mb-10">
      {/* Contenedor Glassmorphism Tropical Salsa */}
      <div
        className="flex gap-2 overflow-x-auto rounded-2xl 
                   bg-[#FFFFFF]/60 dark:bg-[#1A1A24]/80 backdrop-blur-xl
                   border border-[#E07A5F]/20 dark:border-[#FFB347]/30 p-2
                   scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categorias.map((cat) => {
          const isActive = activeId === cat.id;
          
          return (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={cn(
                "relative snap-center whitespace-nowrap rounded-xl px-4 py-2.5 font-anton text-sm font-medium uppercase tracking-wide",
                "transition-colors duration-200 select-none",
                // Estado Inactivo
                !isActive && "text-[#2C2419]/70 dark:text-[#FFFFFF]/70 hover:text-[#2C2419] dark:hover:text-[#FFFFFF]",
                // Estado Activo (Texto sobre el fondo animado)
                isActive && "text-white dark:text-[#12121A]"
              )}
            >
              {/* Fondo Animado con Spring Physics */}
              {isActive && (
                <motion.span
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-xl shadow-md"
                  // Día: Terracota | Noche: Amber Salsa con Glow
                  initial={false}
                  animate={{
                    backgroundColor: isActive ? (document.documentElement.classList.contains('dark') ? '#FFB347' : '#E07A5F') : 'transparent',
                    boxShadow: document.documentElement.classList.contains('dark') && isActive 
                      ? '0 0 12px rgba(255, 179, 71, 0.4)' 
                      : '0 4px 12px rgba(224, 122, 95, 0.2)'
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              {/* Contenido del Botón (Z-Index superior) */}
              <span className="relative z-10 flex items-center gap-1.5">
                <span className="text-base leading-none filter drop-shadow-sm">{cat.icono}</span>
                {cat.titulo}
              </span>
            </button>
          );
        })}
      </div>

      {/* Placeholder para futura expansión vertical */}
      {showVerTodas && (
        <div className="mt-2 text-center opacity-0 pointer-events-none h-0">
          <span className="text-xs font-inter text-[#2C2419]/50 dark:text-[#FFFFFF]/40 italic">
            Ver todas las categorías
          </span>
        </div>
      )}
    </div>
  );
}