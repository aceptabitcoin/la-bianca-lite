"use client";

import { motion } from "framer-motion";
import { EventCard } from "../ui/EventCard";

interface Evento {
  id: number;
  titulo: string;
  descripcion: string;
  dia: string;
  hora: string;
  imagenPlaceholder: string;
  categoria: string;
  icono: string;
}

const eventos: Evento[] = [
  {
    id: 1,
    titulo: "Clases de Salsa",
    descripcion: "Aprende los pasos básicos y suéltate en la pista con nuestros instructores profesionales.",
    dia: "Martes",
    hora: "18:30 - 20:00",
    imagenPlaceholder: "",
    categoria: "Clase",
    icono: "💃"
  },
  {
    id: 2,
    titulo: "Noche Italiana",
    descripcion: "Pasta hecha a mano y vino tinto. Música de cantautores italianos en vivo.",
    dia: "Miércoles",
    hora: "19:00 - 22:00",
    imagenPlaceholder: "",
    categoria: "Cena Espectáculo",
    icono: "🍝"
  },
  {
    id: 3,
    titulo: "Salsa en Vivo",
    descripcion: "Banda en vivo con los mejores éxitos de salsa y timba. ¡Trae tus zapatos de baile!",
    dia: "Viernes",
    hora: "20:00 - 00:00",
    imagenPlaceholder: "",
    categoria: "Música en Vivo",
    icono: "🎺"
  },
  {
    id: 4,
    titulo: "Domingo Tropical",
    descripcion: "Clase de salsa + brunch italiano. El plan perfecto para cerrar la semana.",
    dia: "Domingo",
    hora: "13:00 - 17:00",
    imagenPlaceholder: "",
    categoria: "Brunch Bailanatero",
    icono: "🌴"
  }
];

export function Cartelera() {
  return (
    <section id="cartelera" className="relative py-20 px-4 bg-gradient-to-b from-white to-crema dark:from-azul-noche dark:to-azul-profundo transition-colors duration-500">
      
      <div className="absolute inset-0 palm-overlay opacity-20 pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-anton text-5xl md:text-6xl text-cafe dark:text-dorado mb-4 tracking-wide">
            🎵 CARTELERA
          </h2>
          <p className="font-cormorant text-xl text-terracota dark:text-amber-salsa italic mb-3">
            "La noche empieza con ritmo y buena mesa"
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracota/10 dark:bg-amber-salsa/10">
            <span className="text-sm font-inter text-cafe dark:text-white/80">
              📍 Eventos semanales — Martes a Domingo desde las 18:30
            </span>
          </div>
        </motion.div>

        {eventos.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-inter text-cafe/60 dark:text-white/50">
              Próximamente más eventos. Síguenos en redes sociales para no perderte nada.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventos.map((evento, idx) => (
              <EventCard key={evento.id} {...evento} index={idx} />
            ))}
          </div>
        )}

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-inter text-sm text-cafe/60 dark:text-white/50 mb-3">
            ¿Quieres anunciar tu evento en La Bianca?
          </p>
          <a 
            href="https://wa.me/5219997503458"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-terracota dark:border-amber-salsa 
                       text-terracota dark:text-amber-salsa hover:bg-terracota hover:text-white 
                       dark:hover:bg-amber-salsa dark:hover:text-azul-noche transition-all duration-300
                       font-inter text-sm font-semibold"
          >
            📢 Contacta a nuestro organizador
          </a>
        </motion.div>

      </div>
    </section>
  );
}