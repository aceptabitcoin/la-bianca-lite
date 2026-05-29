"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { getCalApi } from "@calcom/embed-react";

// 🔧 REEMPLAZAR POR EL LINK REAL DEL NEGOCIO CUANDO ESTÉ LISTO
// Demo actual: Usa la cuenta personal de Pablo
// Producción: https://cal.com/la-bianca-tropical/reserva-mesa
const CAL_LINK = "https://cal.com/pablo-cortes-7cwjtu/reserva-mesa";

export function BookingSection() {
  const calContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!calContainerRef.current) return;

    const initCal = async () => {
      try {
        setIsLoading(true);
        const cal = await getCalApi({ namespace: "30min" });
        
        // Configuración visual
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          theme: document.documentElement.classList.contains("dark") ? "dark" : "light",
          styles: {
            branding: { brandColor: "#E07A5F" }, // Terracota como color principal
          },
        });
        
        // Renderizar inline
        cal("inline", {
          elementOrSelector: "#my-cal-inline",
          calLink: CAL_LINK,
          config: {
            layout: "month_view",
            theme: document.documentElement.classList.contains("dark") ? "dark" : "light",
          },
        });

        setError(null);
      } catch (err) {
        console.error("Error initializing Cal.com:", err);
        setError("No pudimos cargar el calendario. Por favor, intenta más tarde o escríbenos por WhatsApp.");
      } finally {
        setIsLoading(false);
      }
    };

    initCal();
  }, []);

  // Sincronizar tema oscuro/claro automáticamente
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark");
          if (typeof window !== "undefined" && window.Cal) {
            window.Cal("ui", {
              theme: isDark ? "dark" : "light",
            });
            // Re-renderizar inline con nuevo tema
            window.Cal("inline", {
              elementOrSelector: "#my-cal-inline",
              calLink: CAL_LINK,
              config: {
                layout: "month_view",
                theme: isDark ? "dark" : "light",
              },
            });
          }
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="booking" 
      className="relative py-20 px-4 bg-crema dark:bg-azul-noche transition-colors duration-500"
      suppressHydrationWarning
    >
      {/* Textura decorativa */}
      <div className="absolute inset-0 brick-overlay opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Encabezado de la sección */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-cafe dark:text-dorado mb-4">
            Reserva tu Mesa
          </h2>
          <p className="font-cormorant text-xl text-terracota dark:text-amber-salsa italic mb-3">
            "La vita è bella quando si mangia insieme"
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-terracota/10 dark:bg-amber-salsa/10 text-cafe dark:text-white/80">
              🪑 Hasta 10 personas
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-terracota/10 dark:bg-amber-salsa/10 text-cafe dark:text-white/80">
              ⚡ Confirmación inmediata
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-terracota/10 dark:bg-amber-salsa/10 text-cafe dark:text-white/80">
              💬 Vía WhatsApp/Email
            </span>
          </div>
        </motion.div>

        {/* Contenedor del calendario con loading y error handling */}
        <motion.div 
          className="glass-card-day dark:glass-card-night rounded-2xl p-3 md:p-4 shadow-xl overflow-hidden min-h-[550px]"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {isLoading && (
            <div className="flex items-center justify-center h-[550px]">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-terracota border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="font-inter text-cafe dark:text-white/70">Cargando disponibilidad...</p>
              </div>
            </div>
          )}
          
          {error && (
            <div className="flex items-center justify-center h-[550px]">
              <div className="text-center max-w-md">
                <p className="text-red-600 dark:text-red-400 mb-4">⚠️ {error}</p>
                <a 
                  href="https://wa.me/529991234567?text=Hola%2C%20quisiera%20reservar%20una%20mesa"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-verde-selva text-white rounded-full hover:opacity-90 transition"
                >
                  📱 Reservar por WhatsApp
                </a>
              </div>
            </div>
          )}

          <div 
            id="my-cal-inline" 
            ref={calContainerRef}
            className={`w-full rounded-xl overflow-hidden bg-white dark:bg-azul-profundo transition-all duration-300
              ${isLoading || error ? 'hidden' : 'block'}`}
            style={{ minHeight: '550px' }}
          />
        </motion.div>

        {/* Texto adicional con Bitcoin */}
        <motion.p 
          className="text-center mt-6 text-xs font-space-grotesk text-cafe/60 dark:text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          ⚡ Pagos con Bitcoin Lightning disponibles al llegar • 
          <span className="ml-1 inline-flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 bg-verde-selva rounded-full" />
            Descuento especial pagando con sats
          </span>
        </motion.p>
      </div>
    </section>
  );
}

