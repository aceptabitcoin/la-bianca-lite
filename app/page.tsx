import Navbar from "@/components/layout/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { MenuSection } from "@/components/landing/MenuSection"; // ✅ IMPORTANTE: Agregar esto
import { BookingSection } from "@/components/landing/BookingSection";
import { Cartelera } from "@/components/sections/Cartelera";
import { LightningQR } from "@/components/landing/LightningQR";
import { TrustBadge } from "@/components/landing/TrustBadge";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { PagaAquiFloat } from "@/components/ui/paga-aqui-float";
import { EventMarquee } from "@/components/sections/EventMarquee"; // ⚡ NUEVO
import { EventFeature } from "@/components/sections/EventFeature"; // ⚡ NUEVO

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAF7F2] dark:bg-[#12121A] transition-colors duration-500">
      <Navbar />
      
      {/* 1. Hero */}
      <HeroSection />
      
      {/* 2. ⚡ MARQUESINA: Evento especial (gancho visual) */}
      <EventMarquee />
      
      {/* 3. Menú */}
      <MenuSection /> 
      
      {/* 4. Booking (Telegram Bot) */}
      <BookingSection />
      
      {/* 5. ⚡ EVENTO: Sección dedicada Bull Bitcoin Tour */}
      <EventFeature />
      
      {/* 6. Cartelera semanal */}
      <Cartelera />
      
      {/* 7. Pagos */}
      <LightningQR />
      
      {/* 8. Trust & Footer */}
      <TrustBadge />
      <Footer />
      
      {/* Flotantes */}
      <PagaAquiFloat />
      <WhatsAppFloat />
    </main>
  );
}