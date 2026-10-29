"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { webStorage } from "./LanguageContext";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = webStorage.getString("beststar_theme") as Theme | null;
    if (savedTheme === "light" || savedTheme === "dark") {
      setThemeState(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
      document.documentElement.style.colorScheme = savedTheme;
    } else {
      // Default to light luxury mode
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.style.colorScheme = "light";
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    webStorage.set("beststar_theme", newTheme);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", newTheme);
      document.documentElement.style.colorScheme = newTheme;
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
