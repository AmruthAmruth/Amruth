"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Background Blur + Border */}
      <div className="backdrop-blur-xl bg-black/20 border-b border-white/10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          
          {/* Logo */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent cursor-pointer"
            href="/"
          >
            Amruth.dev
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-gray-200 font-medium">
            <NavLink href="/">Home</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#ai">AI</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-200"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[68px] left-0 w-full bg-black/70 backdrop-blur-xl border-b border-white/10 text-center py-6"
          >
            <div className="flex flex-col gap-6 text-gray-200 text-lg font-medium">
              <MobileLink href="/" onClick={() => setOpen(false)}>Home</MobileLink>
              <MobileLink href="#projects" onClick={() => setOpen(false)}>Projects</MobileLink>
              <MobileLink href="#ai" onClick={() => setOpen(false)}>AI Assistant</MobileLink>
              <MobileLink href="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------------------- Sub Components ---------------------- */

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.08, opacity: 1 }}
      className="relative opacity-70 hover:opacity-100 transition cursor-pointer"
    >
      {children}

      {/* Underline hover animation */}
      <motion.span
        className="absolute bottom-[-4px] left-0 h-[2px] w-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer"
    >
      {children}
    </motion.a>
  );
}
