# 🌴✨ Design System: "Tropical Luxe" (v1.0)

**Proyecto:** La Bianca Tropical (Lite & SaaS)  
**Estética:** Mediterranean Boho × Neon Nights × Colonial Chic  
**Filosofía:** "Del horno de leña a la pista de salsa — Bitcoin friendly, alma italiana, corazón tropical."

## 🎨 1. Paleta de Colores

### Colores Base (Día — Mediterráneo)
- **Fondo Principal:** `#FAF7F2` (Crema/Off-white cálido)
- **Texto General:** `#2C2419` (Marrón café profundo)

### Paleta de Marca (HSL)
| Nombre | Hex | Función | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Terracota** | `#E07A5F` | Color primario, calidez | CTAs, precios, hover states |
| **Verde Selva** | `#3D5A51` | Naturaleza, frescura | Badges "Bitcoin Accepted", vegetación |
| **Dorado** | `#D4AF37` | Elegancia, lujo | Bordes decorativos, títulos especiales |

### Paleta Nocturna (Neon Nights)
*Se activa automáticamente después de las 6 PM o por toggle manual.*
- **Fondo Nocturno:** `#0F0F1E` (Azul noche profundo)
- **Texto Nocturno:** `#FFFFFF`

| Nombre | Hex | Función | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Neón Fucsia** | `#FF2E93` | Energía, fiesta | Glows, badges "En Vivo", CTAs secundarios |
| **Neón Cian** | `#00F5D4` | Tecnología, Bitcoin | QR codes, pagos Lightning, glows tech |
| **Púrpura** | `#9B5DE5` | Misterio, profundidad | Gradientes nocturnos, fondos de sección |

## ⌨️ 2. Tipografía

| Fuente | Estilo | Uso |
| :--- | :--- | :--- |
| **Playfair Display** | Serif | Títulos principales (H1, H2), nombres de platos. |
| **Cormorant Garamond** | Serif Italic | Acentos italianos ("Buon Appetito"), subtítulos románticos. |
| **Montserrat** | Sans-Serif | UI general, navegación, descripciones, precios. |
| **Space Grotesk** | Mono | Datos técnicos, direcciones Lightning, montos en sats. |

## 🖼️ 3. Efectos Visuales y UI

### Glassmorphism "Tropical Luxe"
- **Día:** `bg-white/90 backdrop-blur-md border-terracota/30`
- **Noche:** `bg-[#0F0F1E]/95 backdrop-blur-xl border-neon-cian/40`

### Animaciones Clave (`globals.css`)
1.  **`steam-rise`:** Vapor subiendo del horno (partículas blancas blur).
2.  **`palm-sway`:** Hojas de palmera meciéndose suavemente (rotación -3deg a 3deg).
3.  **`lightning-pulse`:** Brillo eléctrico para elementos Bitcoin (opacity/brightness pulse).
4.  **`gradient-rotate:`** Borde animado para el contenedor del QR.

## 🧩 4. Componentes Bitcoin-Friendly
- **Badge "⚡ Bitcoin Accepted":** Siempre visible en verde selva (día) o neón cian (noche).
- **QR Codes:** Borde dorado (día) o neón cian (noche). Fondo blanco para máxima legibilidad.
- **Direcciones Wallet:** Fuente `Space Grotesk`, tamaño pequeño, selectable.

## 📱 5. Reglas de Accesibilidad
- Contraste mínimo 4.5:1 para texto normal.
- Focus visible: `outline-2 outline-neon-cian offset-2`.
- Iconos siempre con `aria-label`.

---
*Última actualización: Mayo 2026*