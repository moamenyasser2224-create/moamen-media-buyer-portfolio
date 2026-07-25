"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/site-data";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#creatives", label: "Creative Work" },
  { href: "#process", label: "Process" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || menuOpen ? "border-b border-line bg-base/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-primary hidden text-xs lg:inline-flex">
          Let&apos;s Work Together
        </a>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
        >
          <div className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-[2px] w-5 bg-white transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-[2px] w-5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[14px] h-[2px] w-5 bg-white transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <nav className="container-x flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-2 py-3 text-sm text-muted hover:bg-panel hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary mt-2 justify-center text-xs">
                Let&apos;s Work Together
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
