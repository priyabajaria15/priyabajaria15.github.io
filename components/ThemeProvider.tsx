"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

const ThemeCtx = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

export const useTheme = () => useContext(ThemeCtx);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Starts as "dark" to match the server-rendered HTML, then syncs to whatever
  // the blocking script in layout.tsx already applied. Reading localStorage
  // during render would cause a hydration mismatch.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    if (current === "light" || current === "dark") setTheme(current);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {
        // Private browsing blocks writes; the toggle still works for this visit.
      }
      return next;
    });
  }, []);

  return <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>;
}

/** Footer text toggle. */
export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button className="linklike" type="button" onClick={toggle}>
      Switch to {theme === "dark" ? "light" : "dark"}
    </button>
  );
}

/** Compact icon toggle for the mobile header. */
export function ThemeIconButton() {
  const { theme, toggle } = useTheme();
  return (
    <button className="iconbtn" type="button" onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}
