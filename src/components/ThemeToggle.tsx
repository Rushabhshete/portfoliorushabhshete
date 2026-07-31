"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ inNavbar = false }: { inNavbar?: boolean }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-10 h-10" />; // placeholder
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`p-2 bg-neo-secondary dark:bg-neo-darkCanvas border-4 border-black dark:border-white rounded-none shadow-neo-sm dark:shadow-neo-light-sm hover:shadow-neo-md dark:hover:shadow-neo-light-md active:translate-x-[4px] active:translate-y-[4px] active:shadow-none dark:active:shadow-none transition-all duration-100 ease-linear ${inNavbar ? 'relative' : 'fixed top-4 right-4 md:top-8 md:right-8 z-50'}`}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-white" />
      ) : (
        <Moon className="h-5 w-5 text-black" />
      )}
    </button>
  );
}
