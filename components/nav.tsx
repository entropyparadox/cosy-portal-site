"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "Vision", href: "#problem" },
  { label: "5 Pillars", href: "#pillars" },
  { label: "Infrastructure", href: "#infra" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "JV", href: "#jv" },
  { label: "Moat", href: "#moat" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight">
            COSY<span className="text-cosy-accent">.</span>Portal
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="text-xs font-mono text-muted-foreground">
          EP &times; GlowUpRise
        </div>
      </div>
    </nav>
  );
}
