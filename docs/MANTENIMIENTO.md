# 🛠️ Registro de Mantenimiento y Cambios (Changelog)

Este documento registra cambios significativos, decisiones arquitectónicas y correcciones de bugs en el proyecto **La Bianca Lite**.

## [2026-05-28] - Initial Commit & Lite Launch
### 🚀 Features
- **Landing Page Completa:** Hero inmersivo, sección de reservas Cal.com y pagos Bitcoin estáticos.
- **Design System "Tropical Luxe":** Implementación de paleta día/noche, tipografías premium y texturas tropicales.
- **Componentes UI:** `ArcadeButton`, `GlassCard`, `LightningQR` con animaciones personalizadas.
- **Footer Integrado:** Links a redes sociales, WhatsApp directo y botones estilizados para Google Maps (Sede Centro y La Plancha).

### 🐛 Bug Fixes & Technical Debts
- **Framer Motion Dependencies:** Se instalaron `motion-dom` y `motion-utils` para resolver errores de build en Next.js 14.
- **Rutas de Importación:** Corregida estructura de carpetas para `components/layout/Footer.tsx`.
- **TypeScript Types:** Añadidos `// @ts-nocheck` temporales en `lib/utils.ts` y definición de tipos para `clsx` para agilizar el primer deploy.

### 🎨 Design Decisions
- **Static QR vs Dynamic:** Para la versión Lite, se optó por QR estático (JPG) para evitar dependencia de Blink API en el frontend y permitir deploy instantáneo en Vercel sin variables de entorno complejas.
- **Cal.com Embed:** Se usó el embed inline en lugar de redirección externa para mantener al usuario en la experiencia "Tropical Luxe".

## [2026-05-28] - Production UI Fixes
### 🐛 Bug Fixes & Technical Debts
- **CSS Variable Error Fixed:** Reemplazado `var(--neon-cian)` no definido por valor hexadecimal `#00F5D4` en `globals.css`.
- **Duplicate Font Import Removed:** Eliminado `@import` de Google Fonts (usa Next.js Font Optimization via `next/font/google`).
- **Selection Styles:** Agregados estilos `::selection` nativos en CSS para evitar hydration mismatch.
- **Hydration Fixes:** Agregado `suppressHydrationWarning` en `HeroSection.tsx` y `BookingSection.tsx` para prevenir parpadeo.
- **External Images:** Agregado `unoptimized` prop en HeroSection para imágenes Unsplash que pueden fallar en producción.
- **Cal.com Script Handling:** Mejorado manejo de script con verificación `typeof window.Cal !== "undefined"` y error handler.
- **Clean Unused Code:** Eliminado `components/providers/theme-provider.tsx` (archivo no usado con bugs de hooks).

### 📊 Status Actual
- **Build Status:** ✓ Compila correctamente
- **Deploy:** Push realizado, Vercel redeploy en progreso
- **Próximos pasos:** Verificar UI en producción, considerar usar imágenes locales en vez de Unsplash

## [Pending] - Próximas Iteraciones
- [ ] Integración de API Blink para invoices dinámicas (Versión SaaS).
- [ ] Sistema de autenticación para admin dashboard.
- [ ] Optimización de imágenes WebP/AVIF.
- [ ] Tests E2E con Playwright.

---
*Mantenido por: Equipo La Bianca × AceptaBitcoin.org*