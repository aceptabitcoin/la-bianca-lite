import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // Habilita modo oscuro manual/automático
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Base (Día - Mediterráneo)
        crema: "#FAF7F2",
        cafe: "#2C2419",
        terracota: "#E07A5F",
        "verde-selva": "#3D5A51",
        dorado: "#D4AF37",
        
        // Paleta Nocturna (Salsa Nights - v1.1)
        "amber-salsa": "#FFB347",    // Reemplaza neon-cian
        "rosa-guayaba": "#FF6B9E",   // Reemplaza neon-fucsia
        "purpura-profundo": "#6B3FA0", // Versión más cálida del púrpura
        "azul-noche": "#12121A",      // Fondo nocturno (más cálido que #0F0F1E)
        "azul-profundo": "#1A1A24",   // Superficies nocturnas
        
        // Legacy (mantengo temporalmente para compatibilidad)
        // TODO: Eliminar después de migrar componentes
        "neon-fucsia": "#FF6B9E",   // Ahora apunta a rosa-guayaba
        "neon-cian": "#FFB347",     // Ahora apunta a amber-salsa
        purpura: "#6B3FA0",         // Ahora apunta a purpura-profundo
      },
      fontFamily: {
        // Nuevo: Anton para títulos festivos
        anton: ["var(--font-anton)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        "space-grotesk": ["var(--font-space-grotesk)", "monospace"],
        
        // Legacy (mantengo para compatibilidad)
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],  // Cambiado de Montserrat a Inter
        mono: ["var(--font-space-grotesk)", "monospace"],
      },
      animation: {
        // Animaciones originales
        "steam-rise": "steam-rise 3s ease-out infinite",
        "palm-sway": "palm-sway 4s ease-in-out infinite",
        "lightning-pulse": "lightning-pulse 3s infinite", // Legacy, usar salsa-shine
        "gradient-rotate": "gradient-rotate 4s ease infinite",
        "bounce-slow": "bounce 3s infinite",
        
        // Nuevas animaciones v1.1
        "salsa-shine": "salsa-shine 3s infinite",
        "pulse-slow": "pulse-slow 2s ease-in-out infinite",
      },
      keyframes: {
        // Animaciones originales
        "steam-rise": {
          "0%": { transform: "translateY(0) scaleX(1)", opacity: "0" },
          "15%": { opacity: "0.8" },
          "50%": { transform: "translateY(-40px) scaleX(1.5)", opacity: "0.5" },
          "100%": { transform: "translateY(-80px) scaleX(2)", opacity: "0" },
        },
        "palm-sway": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "lightning-pulse": {
          "0%, 95%": { opacity: "0.5" },
          "5%, 10%": { opacity: "1", filter: "brightness(2)" },
        },
        "gradient-rotate": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        
        // Nuevas animaciones v1.1
        "salsa-shine": {
          "0%, 95%": { opacity: "0.6", filter: "brightness(1)" },
          "5%, 10%": { opacity: "1", filter: "brightness(1.8)", boxShadow: "0 0 15px #FFB347" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;