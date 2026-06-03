"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuData from "@/data/menu.json";
import { MenuCategoryNav } from "@/components/ui/MenuCategoryNav";
import { MenuItemCard } from "@/components/ui/MenuItemCard";
import { cn } from "@/lib/utils";

type SubcategoriaCoctel = "clasicos" | "tropicales" | "mezcals-tequilas" | "sin-alcohol";

const subcategoriasCoctel: { id: SubcategoriaCoctel; label: string }[] = [
  { id: "clasicos", label: "Clásicos" },
  { id: "tropicales", label: "Tropicales" },
  { id: "mezcals-tequilas", label: "Mezcals / Tequilas" },
  { id: "sin-alcohol", label: "Sin Alcohol" },
];

export function MenuSection() {
  const secciones = (menuData as { secciones: any[] }).secciones;
  const [activeCategory, setActiveCategory] = useState(secciones[0]?.id ?? "");

  const categoriaActiva = secciones.find((s) => s.id === activeCategory);
  const itemsFiltrados = categoriaActiva?.items ?? [];

  const esSeccionCocteles = activeCategory === "cocteles";
  const [subcatActiva, setSubcatActiva] = useState<SubcategoriaCoctel>("clasicos");

  // Filtrado inteligente de cócteles
  const itemsCoctelesRecomendados = itemsFiltrados.filter(
    (it: any) => it.recomendado && (!it.subcategoria || it.subcategoria === subcatActiva)
  );
  const itemsCoctelesResto = itemsFiltrados.filter(
    (it: any) => !it.recomendado && (!it.subcategoria || it.subcategoria === subcatActiva)
  );

  return (
    <section 
      id="menu" 
      className="relative py-24 px-4 bg-[#FAF7F2] dark:bg-[#12121A] transition-colors duration-500 overflow-hidden"
    >
      {/* Decoración sutil de fondo (opcional, si tienes el asset de palmeras) */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none select-none text-9xl -mr-16 -mt-16 rotate-12">🌴</div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="font-playfair text-4xl md:text-6xl text-[#2C2419] dark:text-[#D4AF37] drop-shadow-sm">
            Nuestro Menú
          </h2>
          <p className="mt-3 font-cormorant italic text-xl md:text-2xl text-[#E07A5F] dark:text-[#FF6B9E]">
            Delicias para cada momento
          </p>
        </motion.div>

        <MenuCategoryNav
          categorias={secciones.map((s) => ({ id: s.id, titulo: s.titulo, icono: s.icono }))}
          activeId={activeCategory}
          onChange={(id) => {
            setActiveCategory(id);
            setSubcatActiva("clasicos");
          }}
        />

        <AnimatePresence mode="wait">
          {itemsFiltrados.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl border-2 border-dashed border-[#E07A5F]/30 dark:border-[#FFB347]/30 bg-white/40 dark:bg-[#1A1A24]/50 p-12 text-center backdrop-blur-sm"
            >
              <span className="text-5xl block mb-4">✨</span>
              <p className="font-playfair text-lg text-[#2C2419] dark:text-white/80">
                Próximamente más delicias...
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {esSeccionCocteles && (
                <div className="col-span-full mb-2 flex justify-center">
                  <div className="flex flex-wrap justify-center gap-2 p-2 rounded-2xl bg-white/50 dark:bg-[#1A1A24]/50 backdrop-blur-md border border-[#E8DDD0] dark:border-[#FFB347]/20">
                    {subcategoriasCoctel.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setSubcatActiva(sub.id)}
                        className={cn(
                          "rounded-xl px-4 py-2 text-sm font-inter font-semibold transition-all duration-300",
                          subcatActiva === sub.id
                            ? "bg-[#E07A5F] text-white dark:bg-[#FFB347] dark:text-[#12121A] shadow-[0_4px_12px_rgba(224,122,95,0.2)] dark:shadow-[0_0_12px_rgba(255,179,71,0.3)] scale-105"
                            : "bg-transparent text-[#2C2419] dark:text-white/70 hover:bg-[#E07A5F]/10 dark:hover:bg-[#FFB347]/10 hover:text-[#E07A5F] dark:hover:text-[#FFB347]"
                        )}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {esSeccionCocteles
                ? [...itemsCoctelesRecomendados, ...itemsCoctelesResto].map((item: any, idx: number) => (
                    <MenuItemCard key={`${item.nombre}-${idx}`} {...item} />
                  ))
                : itemsFiltrados.map((item: any, idx: number) => (
                    <MenuItemCard key={`${item.nombre}-${idx}`} {...item} />
                  ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}