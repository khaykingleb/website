"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdAutoMode, MdDarkMode, MdLightMode } from "react-icons/md";

/**
 * Component to toggle between light, dark, and system themes.
 *
 * @returns The ThemeToggle component.
 */
export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /**
   *
   */
  const handleThemeToggle = () => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };

  const Icon =
    theme === "light"
      ? MdLightMode
      : theme === "dark"
        ? MdDarkMode
        : MdAutoMode;

  if (!mounted) {
    return <div aria-hidden="true" className="h-4 w-4" />;
  }

  return (
    <button
      type="button"
      onClick={handleThemeToggle}
      aria-label={`Theme: ${theme}. Click to change.`}
      className={`
        cursor-pointer text-base-content/45 transition-colors
        hover:text-base-content
      `}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}

/**
 * Footer component.
 *
 * @returns The Footer component.
 */
export const Footer = () => {
  const startYear = 2024;
  const currentYear = new Date().getFullYear();
  const yearLabel =
    startYear === currentYear
      ? `${currentYear}`
      : `${startYear}–${currentYear}`;

  return (
    <footer
      className={`
        relative z-10 flex flex-col items-center gap-2 py-6 text-xs
        text-base-content/40
      `}
    >
      <ThemeToggle />
      <span>© {yearLabel}, Gleb Khaykin</span>
    </footer>
  );
};
