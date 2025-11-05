"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-border-light dark:border-border-dark z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl font-bold text-text-light dark:text-text-dark"
        >
          <span className="text-primary">Amruth</span>.dev
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition font-medium ${
                pathname === href
                  ? "text-primary"
                  : "text-subtext-light dark:text-subtext-dark hover:text-primary"
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-4 p-2 rounded-md hover:bg-border-light dark:hover:bg-border-dark transition"
          >
            {theme === "light" ? (
              <Moon size={18} className="text-subtext-light" />
            ) : (
              <Sun size={18} className="text-subtext-dark" />
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-text-light dark:text-text-dark"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark flex flex-col items-center py-4 space-y-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`transition ${
                pathname === href
                  ? "text-primary"
                  : "text-subtext-light dark:text-subtext-dark hover:text-primary"
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Theme Toggle in mobile */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-md hover:bg-border-light dark:hover:bg-border-dark transition"
          >
            {theme === "light" ? (
              <Moon size={18} className="text-subtext-light" />
            ) : (
              <Sun size={18} className="text-subtext-dark" />
            )} 
          </button>
        </div>
      )}
    </nav>
  );
}
