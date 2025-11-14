"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Polished Futuristic Neon-Aura Homepage (Next.js + Tailwind + Framer Motion)
 *
 * Save as: app/page.tsx
 *
 * Notes:
 * - Requires Tailwind CSS and framer-motion
 * - Adjust colors in Tailwind config or here (utility classes used)
 */

/* ---------- Animation Variants (reusable) ---------- */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { delay: d, duration: 0.7, ease: "easeOut" } }),
};

const floatSlow: Variants = {
  animate: {
    y: ["0%", "-6%", "0%"],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

const marquee = {
  animate: { x: ["100%", "-100%"], transition: { repeat: Infinity, duration: 14, ease: "linear" } },
};

const cardInView: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

/* ---------- Deterministic particle positions so SSR/CSR agree ---------- */
const PARTICLES = Array.from({ length: 24 }).map((_, i) => {
  // deterministic positions spread across viewport
  const top = 60 + (i * 37) % 520; // px
  const left = 40 + (i * 83) % 980; // px
  const size = [1, 1.5, 2, 2.5][i % 4];
  const delay = (i % 6) * 0.25;
  return { id: i, top, left, size, delay };
});

/* ---------- Helper: Gradient Button ---------- */
function CTAButton({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost" }) {
  if (variant === "primary") {
    return (
      <Link
        href={href}
        className="inline-flex items-center gap-3 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-xl shadow-purple-600/30 transform-gpu will-change-transform"
      >
        {children}
        <ArrowRight size={18} />
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-3 px-8 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-white font-semibold"
    >
      {children}
      <ArrowRight size={18} />
    </Link>
  );
}

/* ---------- Main Page Component ---------- */
export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-[#06060a] to-[#0f0f13] text-white overflow-hidden font-sans antialiased">

      {/* ----------------- Ambient Aura Blobs ----------------- */}
      <div aria-hidden className="pointer-events-none absolute -top-48 -left-40 w-[42rem] h-[42rem] rounded-full bg-purple-600/20 blur-[140px] animate-pulse" />
      <div aria-hidden className="pointer-events-none absolute top-28 -right-48 w-[36rem] h-[36rem] rounded-full bg-blue-600/18 blur-[140px] animate-pulse" />

      {/* ----------------- Subtle Scan Grid (depth) ----------------- */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle,#ffffff10 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.04,
        }}
      />

      {/* ----------------- HERO ----------------- */}
      <section className="relative z-10 pt-40 pb-24 px-6 flex flex-col items-center text-center">
        {/* floating code glyphs */}
        <motion.div
          aria-hidden
          variants={floatSlow}
          animate="animate"
          className="absolute top-28 left-16 text-7xl text-purple-400/65 drop-shadow-[0_0_26px_rgba(168,85,247,0.5)] select-none"
        >
          {"</>"}
        </motion.div>

        <motion.div
          aria-hidden
          variants={floatSlow}
          animate="animate"
          className="absolute top-36 right-20 text-7xl text-blue-400/65 drop-shadow-[0_0_26px_rgba(96,165,250,0.45)] select-none"
        >
          {"{ TS }"}
        </motion.div>

        {/* particles */}
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            style={{ top: p.top, left: p.left, width: p.size * 2, height: p.size * 2 }}
            className="absolute rounded-full bg-white/35"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.45, 0], y: ["0%", "-18%", "0%"] }}
            transition={{ duration: 5 + (p.id % 5), repeat: Infinity, delay: p.delay }}
          />
        ))}

        {/* title group */}
        <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" custom={0} className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-4xl">
          <span className="block text-lg md:text-xl text-white/60 mb-2 tracking-wide">Hi, I’m</span>
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent inline-block mr-2">Amruth</span>
          <span className="text-white block">I Engineer Futuristic Digital Experiences.</span>
        </motion.h1>

        <motion.p variants={fadeInUp} initial="hidden" animate="visible" custom={0.15} className="mt-6 max-w-3xl text-lg text-gray-300">
          I build scalable, maintainable systems using TypeScript, Next.js and Clean Architecture — blending engineering rigor with imaginative UI and delightful interactions.
        </motion.p>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.35} className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <CTAButton href="#projects">Explore My Work</CTAButton>
          <CTAButton href="#ai" variant="ghost">Ask My AI Assistant</CTAButton>
        </motion.div>

        {/* subtle divider glow */}
        <div className="mt-12 w-[180px] h-[2px] mx-auto rounded-full bg-gradient-to-r from-purple-400/40 via-white/30 to-blue-400/40" />
      </section>

      {/* ----------------- SKILLS MARQUEE ----------------- */}
      <section className="relative z-10 py-8 px-6">
        {/* soft glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-10 w-[260px] h-[260px] bg-purple-500/16 blur-3xl" />
          <div className="absolute bottom-0 right-10 w-[220px] h-[220px] bg-blue-500/12 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <div className="absolute inset-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <motion.div variants={marquee} animate="animate" className="whitespace-nowrap flex items-center gap-12 text-lg font-semibold text-white/80">
            {[
              "⚡ TypeScript",
              "🚀 Next.js",
              "🏗 Clean Architecture",
              "🧠 SOLID Principles",
              "🧩 Reusable Components",
              "🎨 UI Engineering",
              "📐 System Design",
              "🔧 API Engineering",
              "🛰 Scalable Systems",
            ].map((s, idx) => (
              <span key={idx} className="mx-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 hover:brightness-125 transition">
                {s}
              </span>
            ))}
            {/* duplicate set to make marquee seamless */}
            {[
              "⚡ TypeScript",
              "🚀 Next.js",
              "🏗 Clean Architecture",
              "🧠 SOLID Principles",
              "🧩 Reusable Components",
              "🎨 UI Engineering",
              "📐 System Design",
              "🔧 API Engineering",
              "🛰 Scalable Systems",
            ].map((s, idx) => (
              <span key={"dup-" + idx} className="mx-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                {s}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ----------------- PROJECTS ----------------- */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} initial="hidden" animate="visible" custom={0} className="text-3xl md:text-4xl font-bold text-center mb-12">
            Projects That Reflect My Engineering Style
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.article
              variants={cardInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative overflow-hidden rounded-2xl p-8 bg-white/5 backdrop-blur-md border border-white/8 shadow-xl group"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-purple-600/6 to-blue-600/6 blur-xl opacity-0 group-hover:opacity-60 transition-opacity" />
              <h3 className="text-2xl font-semibold">Stratify — Company Management System</h3>
              <p className="mt-4 text-gray-300">
                A multi-role enterprise platform built with Clean Architecture, domain-driven patterns,
                reusable DTOs & validators, and enterprise-grade TypeScript patterns for long-term maintainability.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Link href="#" className="relative inline-flex items-center gap-2 text-purple-300 font-medium group">
                  View Case Study
                  <span className="block w-0 h-[1px] bg-purple-400 group-hover:w-full transition-all duration-300 absolute left-0 -bottom-0.5" />
                </Link>
                <span className="ml-auto text-sm text-white/60">• Role-based auth • Scalable</span>
              </div>
            </motion.article>

            <motion.article
              variants={cardInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl p-8 bg-white/5 backdrop-blur-md border border-white/8 shadow-xl group"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-600/6 to-purple-600/6 blur-xl opacity-0 group-hover:opacity-60 transition-opacity" />
              <h3 className="text-2xl font-semibold">Interactive Portfolio — AI Assistant</h3>
              <p className="mt-4 text-gray-300">
                Integrated AI assistant that explains architecture decisions, summarizes projects, and demonstrates system-level thinking — all within the portfolio experience.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Link href="#" className="relative inline-flex items-center gap-2 text-blue-300 font-medium group">
                  View Case Study
                  <span className="block w-0 h-[1px] bg-blue-400 group-hover:w-full transition-all duration-300 absolute left-0 -bottom-0.5" />
                </Link>
                <span className="ml-auto text-sm text-white/60">• Vector Q&A • Realtime</span>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ----------------- AI ASSISTANT TEASER ----------------- */}
      <section id="ai" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* soft orbs */}
          <div className="absolute -left-28 -top-12 w-44 h-44 bg-purple-500/12 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-28 bottom-4 w-60 h-60 bg-blue-500/12 rounded-full blur-3xl pointer-events-none" />

          <motion.h2 variants={fadeInUp} initial="hidden" animate="visible" custom={0} className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Ask My AI Assistant
          </motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" custom={0.12} className="mt-4 text-gray-300">
            Curious how I structure systems, choose architecture boundaries, or implement robust validation & DTOs?
            Chat with the assistant to get concise, technical answers and small code examples.
          </motion.p>

          <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.28} className="mt-8 flex justify-center gap-4">
            <CTAButton href="/ai">Chat With AI</CTAButton>
            <CTAButton href="#contact" variant="ghost">Contact Me</CTAButton>
          </motion.div>

          {/* example card (teaser) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 mx-6 md:mx-0 rounded-xl p-4 bg-white/3 backdrop-blur-md border border-white/8"
          >
            <div className="text-left text-sm text-white/90 font-medium">Assistant preview</div>
            <div className="mt-2 text-left text-sm text-gray-300">
              <strong>Q:</strong> How would you design role-based auth for a multi-tenant app?
              <div className="mt-2 text-sm text-white/80">A: Start with tenant isolation at the DB layer, define role boundaries in the domain, map DTOs for transport, and validate policies at the service boundary...</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ----------------- FINAL CTA ----------------- */}
      <section className="relative z-10 py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2 variants={fadeInUp} initial="hidden" animate="visible" custom={0} className="text-4xl md:text-5xl font-bold">
            Let’s Build Something Unforgettable.
          </motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" custom={0.12} className="mt-4 text-gray-300">
            I focus on products where architecture, scale and UX matter. If that resonates — let’s talk.
          </motion.p>

          <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.28} className="mt-8 flex justify-center gap-4">
            <CTAButton href="/contact">Contact Me</CTAButton>
            <CTAButton href="#projects" variant="ghost">See Projects</CTAButton>
          </motion.div>

          <div className="mt-12 text-xs text-white/50">© {new Date().getFullYear()} Amruth • Built with TypeScript & Next.js</div>
        </div>
      </section>
    </main>
  );
}
