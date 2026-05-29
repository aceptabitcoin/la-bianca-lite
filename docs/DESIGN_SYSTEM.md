# 🌴✨ Design System: "Tropical Luxe Salsa Edition" (v1.1)

**Proyecto:** La Bianca Tropical (Lite & SaaS)  
**Estética:** Mediterranean Boho × Salsa Nights × Colonial Chic  
**Filosofía:** "Del horno de leña a la pista de salsa — Bitcoin friendly, alma italiana, corazón tropical, pies al ritmo."

---

## 🎨 1. Paleta de Colores

### Colores Base (Día — Mediterráneo Colombiano)
| Uso | Hex | Descripción |
| :--- | :--- | :--- |
| Fondo Principal | `#FAF7F2` | Crema cálido tipo papel envejecido |
| Texto General | `#2C2419` | Marrón café profundo |
| Acento Suave | `#E8DDD0` | Para inputs y bordes sutiles |

### Paleta de Marca (Día/Noche compartida)
| Nombre | Hex | Función | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Terracota** | `#E07A5F` | Primario, calidez italiana | CTAs, precios, hover, bordes activos |
| **Verde Selva** | `#3D5A51` | Naturaleza, frescura | Badges "Bitcoin Accepted", estado "Disponible" |
| **Dorado** | `#D4AF37` | Elegancia, lujo | Bordes decorativos, títulos de platillos, acentos premium |

### Paleta Nocturna (Salsa Nights)
*Se activa automáticamente desde 18:30 o por toggle manual.*
| Uso | Hex | Descripción |
| :--- | :--- | :--- |
| Fondo Nocturno | `#12121A` | Azul medianoche (menos frío que #0F0F1E) |
| Texto Nocturno | `#FFFFFF` | Blanco puro para contraste |
| Superficies | `#1A1A24` | Tarjetas, modales, formularios |

| Nombre | Hex | Función | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Amber Salsa** | `#FFB347` | Calor, fiesta, energía | Badges "En Vivo Hoy", CTAs secundarios, borders activos nocturnos |
| **Rosa Guayaba** | `#FF6B9E` | Tropical festivo | Glows sutiles, hoverstates, fechas de eventos |
| **Púrpura Profundo** | `#6B3FA0` | Misterio, profundidad | Gradientes de fondo, separadores, no usar en texto |

### Colores Funcionales (Ambos modos)
| Nombre | Hex | Uso |
| :--- | :--- | :--- |
| Éxito | `#2E7D64` | Confirmaciones, "Mesa reservada" |
| Error | `#D6453D` | Validaciones, "No disponible" |
| Advertencia | `#F4A261` | "Últimas mesas" |

---

## ⌨️ 2. Tipografía

| Fuente | Estilo | Uso | Tamaños base |
| :--- | :--- | :--- | :--- |
| **Anton** | Sans-Serif (Compact) | Títulos H1, H2 de cartelera, eventos, promociones | H1: 3.5rem, H2: 2.5rem |
| **Playfair Display** | Serif | Nombres de platillos, títulos de sección elegantes (ej. "Nuestra Cocina") | H3: 1.8rem |
| **Inter** | Sans-Serif | UI general, navegación, descripciones, precios, formularios | Base: 1rem, UI: 0.875rem |
| **Space Grotesk** | Mono | Direcciones Lightning, montos en sats, códigos de reserva | 0.75rem - 0.875rem |
| **Cormorant Garamond** | Serif Italic | Acentos románticos ("Dolce Vita", "Buon Appetito") | 1.2rem itálica |

### Escala Tipográfica (rem)
| Nivel | Tamaño | Uso |
| :--- | :--- | :--- |
| H1 | 3.5rem (56px) | Hero, "Baila y Cena" |
| H2 | 2.5rem (40px) | Cartelera, eventos |
| H3 | 1.8rem (28.8px) | Nombres de platillos |
| Body L | 1.125rem (18px) | Descripciones destacadas |
| Body | 1rem (16px) | Texto general |
| Small | 0.875rem (14px) | UI, precios, fechas |
| Tiny | 0.75rem (12px) | Direcciones wallet, notas legales |

---

## 🖼️ 3. Efectos Visuales y UI

### Glassmorphism "Tropical Salsa"
| Modo | Clase Tailwind sugerida |
| :--- | :--- |
| Día | `bg-white/80 backdrop-blur-md border border-terracota/20` |
| Noche | `bg-[#1A1A24]/90 backdrop-blur-xl border border-amber-salsa/30` |

### Sombras
| Nombre | Valor | Uso |
| :--- | :--- | :--- |
| Salsa Glow (Noche) | `0 0 12px rgba(255, 179, 71, 0.3)` | Badges "En Vivo" |
| Terracota Soft (Día) | `0 4px 12px rgba(224, 122, 95, 0.15)` | Tarjetas, botones |
| Dorado Border | `inset 0 0 0 1px rgba(212, 175, 55, 0.4)` | Elementos premium |

### Animaciones Clave (`globals.css`)
1. **`steam-rise`** : Vapor del horno (partículas blancas con blur, Y: 0→ -20px)
2. **`palm-sway`** : Palmeras (rotación -2deg a 2deg, easing in-out)
3. **`salsa-shine`** : Brillo pasante para eventos destacados (gradiente deslizante)
4. **`pulse-slow`** : Para QR de Bitcoin (opacity 0.7 → 1)
5. **`gradient-rotate`** : Borde animado para contenedor de QR (solo noche)

---

## 🧩 4. Componentes Específicos

### 4.1 Badge "⚡ Bitcoin Accepted"
- **Día:** Fondo `Verde Selva` + texto blanco
- **Noche:** Fondo `Verde Selva` + borde `Amber Salsa` glow
- **Posición:** Header (siempre visible) + Footer

### 4.2 Badge "🎵 EN VIVO HOY"
- **Color:** `Amber Salsa` con `pulse-slow`
- **Tooltip:** "Clases de salsa • Mar/Mie • 18:30"
- **Rotación horaria:** Si hay múltiples eventos

### 4.3 Sede Selector (Centro / La Plancha)
```css
/* Estilo base */
.sede-card {
  background: rgba(224, 122, 95, 0.08);
  border-left: 4px solid #D4AF37;
  transition: all 0.25s ease;
  cursor: pointer;
}
.sede-card:hover {
  background: rgba(224, 122, 95, 0.15);
  transform: translateX(6px);
  border-left-width: 6px;
}
.sede-card.active {
  background: rgba(224, 122, 95, 0.2);
  border-left-color: #E07A5F;
}