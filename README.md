🌴 La Bianca Tropical | Lightning Landing (Lite)
"Del horno de leña a la pista de salsa — Bitcoin friendly, alma italiana, corazón tropical."
Esta es la versión Lite de la plataforma La Bianca: una landing page estática, ultra-rápida y optimizada para conversión, diseñada para validar la aceptación de pagos Bitcoin Lightning y gestionar reservas vía Cal.com sin depender de bases de datos complejas.
Deployada en Vercel con Next.js 14 App Router y el sistema de diseño "Tropical Luxe".





✨ Características Principales
⚡ Pagos Bitcoin Lightning: Integración de QR estático (Blink Wallet) con UI animada y dirección copiable.
📅 Reservas Inteligentes: Embed nativo de Cal.com estilizado con glassmorphism.
🌙 Modo Día/Noche Automático: Transición suave entre estética "Mediterránea" (Día) y "Neon Nights" (Noche) basada en la hora local.
🎨 Design System "Tropical Luxe": Paleta personalizada (Terracota, Neón Cian, Dorado), tipografías premium (Playfair, Cormorant) y texturas tropicales.
🚀 Performance Extrema: Arquitectura estática, imágenes optimizadas y cero dependencias de backend pesado.
📱 Mobile-First: Experiencia táctil optimizada con "Thumb Zone" para pagos rápidos.
🛠️ Tech Stack
Capa
Tecnología
Framework
Next.js 14 (App Router)
Estilos
Tailwind CSS + Framer Motion
Temas
next-themes (Auto-detección horaria)
Pagos
Blink Wallet (Static QR)
Reservas
Cal.com (Inline Embed)
Deploy
Vercel Edge Network
🚀 Quick Start
1. Clonar e Instalar
bash
123
2. Configurar Variables de Entorno
Copia el archivo de ejemplo y añade tus credenciales:
bash
1
Edita .env.local:
env
12345678
3. Añadir Assets
Asegúrate de tener estas imágenes en public/images/:
oven-day.jpg (Foto del horno/ambiente diurno)
dance-night.jpg (Foto de la pista/ambiente nocturno)
bitcoin-qr.jpg (Tu QR estático generado desde Blink)
4. Correr en Desarrollo
bash
1
Abre http://localhost:3000 para ver la magia. 🌴
🎨 Design System: Tropical Luxe
Este proyecto sigue estrictamente las guías de DESIGN_SYSTEM.md:
Colores Día: Crema (#FAF7F2), Terracota (#E07A5F), Verde Selva (#3D5A51).
Colores Noche: Azul Profundo (#0F0F1E), Neón Cian (#00F5D4), Neón Fucsia (#FF2E93).
Tipografía:
Títulos: Playfair Display
Acentos Italianos: Cormorant Garamond
UI/Datos: Montserrat & Space Grotesk (para Bitcoin).
📂 Estructura del Proyecto
text
123456789101112131415
🌍 Deploy en Vercel
La forma más rápida de publicar tu propia instancia:
Sube este repo a GitHub.
Ve a Vercel e importa el proyecto.
Añade las variables de entorno (NEXT_PUBLIC_CAL_LINK, etc.) en el dashboard de Vercel.
¡Listo! Tu landing estará live en segundos.
🤝 Créditos
Diseño & Desarrollo: AceptaBitcoin.org
Inspiración: La Bianca Tropical Mérida
Infraestructura Lightning: Blink API
📄 Licencia
Commercial Use Only. © 2026 La Bianca Tropical.
