"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes"; // ✅ Importar useTheme

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
  const { resolvedTheme } = useTheme(); // ✅ Obtener tema de forma segura
  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative mb-10">
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
                !isActive && "text-[#2C2419]/70 dark:text-[#FFFFFF]/70 hover:text-[#2C2419] dark:hover:text-[#FFFFFF]",
                isActive && "text-white dark:text-[#12121A]"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-xl shadow-md"
                  initial={false}
                  // ✅ USAR isDark EN LUGAR DE document
                  animate={{
                    backgroundColor: isDark ? '#FFB347' : '#E07A5F',
                    boxShadow: isDark 
                      ? '0 0 12px rgba(255, 179, 71, 0.4)' 
                      : '0 4px 12px rgba(224, 122, 95, 0.2)'
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              <span className="relative z-10 flex items-center gap-1.5">
                <span className="text-base leading-none filter drop-shadow-sm">{cat.icono}</span>
                {cat.titulo}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}