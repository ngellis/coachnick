"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#1F3A12] shadow-md transition-all duration-300"
    >
      <nav className="container mx-auto px-12 md:px-16 py-8 flex items-center justify-between">
        <Link href="/" className="text-3xl md:text-5xl font-bold tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "white" }}>
          Coach Nick
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="block w-7 h-0.5 transition-all"
                style={{ backgroundColor: "white" }} />
          <span className="block w-7 h-0.5 transition-all"
                style={{ backgroundColor: "white" }} />
          <span className="block w-7 h-0.5 transition-all"
                style={{ backgroundColor: "white" }} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-base font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition-colors hover:text-[var(--princeton-orange)] group"
              style={{ color: "white" }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "var(--princeton-orange)" }} />
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="md:hidden border-t bg-white"
             style={{ borderColor: "var(--cream)" }}>
          <div className="container mx-auto px-12 md:px-16 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium transition-colors hover:text-[var(--princeton-orange)]"
                style={{ color: "var(--charcoal)" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
