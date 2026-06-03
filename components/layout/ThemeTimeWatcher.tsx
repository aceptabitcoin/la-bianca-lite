"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeTimeWatcher() {
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const MANUAL_OVERRIDE_KEY = "la-bianca-theme-manual-override";
    
    const checkTimeAndSetTheme = () => {
      // Respetar override manual - solo si estamos en el cliente
      if (typeof window !== 'undefined' && localStorage.getItem(MANUAL_OVERRIDE_KEY) === "true") return;

      const now = new Date();
      const currentMinutesInDay = now.getHours() * 60 + now.getMinutes();
      const sunsetMinutes = 18 * 60 + 30;
      const sunriseMinutes = 6 * 60;
      
      const shouldBeDark = currentMinutesInDay >= sunsetMinutes || currentMinutesInDay < sunriseMinutes;
      const targetTheme = shouldBeDark ? "dark" : "light";

      // Solo actualizar si difiere del tema resuelto actual
      if (resolvedTheme !== targetTheme) {
        setTheme(targetTheme);
      }
    };

    // Ejecutar al montar (para capturar cambios de hora si la pestaña lleva mucho abierta)
    // Solo si estamos en el cliente
    if (typeof window !== 'undefined') {
      checkTimeAndSetTheme();

      const interval = setInterval(checkTimeAndSetTheme, 30000);
      return () => clearInterval(interval);
    }
  }, [setTheme, resolvedTheme]);

  return null;
}