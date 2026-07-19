"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY, NAV_ITEMS } from "@/constants/company";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-main">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a
            href="#"
            className="group flex items-center gap-2"
            aria-label={`${COMPANY.name} — на главную`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-copper-600 text-sm font-bold text-white transition-transform group-hover:scale-105">
              RP
            </span>
            <span
              className={cn(
                "heading-display text-lg transition-colors md:text-xl",
                isScrolled ? "text-graphite-950" : "text-white hero-text-shadow"
              )}
            >
              {COMPANY.name}
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Основная навигация"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isScrolled
                    ? "text-graphite-600 hover:text-copper-500"
                    : "text-white hero-text-shadow hover:text-white"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={COMPANY.phoneHref}
              className={cn(
                "text-sm font-semibold transition-colors",
                isScrolled
                  ? "text-graphite-800 hover:text-copper-500"
                  : "text-white hero-text-shadow hover:text-white"
              )}
              aria-label={`Позвонить: ${COMPANY.phone}`}
            >
              {COMPANY.phone}
            </a>
            <Button href="#contact" size="sm">
              Бесплатный замер
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "relative z-50 flex h-10 w-10 items-center justify-center rounded-lg lg:hidden",
              isScrolled || isMobileMenuOpen
                ? "text-graphite-800"
                : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            </span>
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={cn(
                  "block h-0.5 w-full bg-current transition-transform",
                  isMobileMenuOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-full bg-current transition-opacity",
                  isMobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-full bg-current transition-transform",
                  isMobileMenuOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-white lg:hidden"
          >
            <nav
              className="container-main flex flex-col gap-1 py-6"
              aria-label="Мобильная навигация"
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lg px-4 py-3 text-lg font-medium text-graphite-800 hover:bg-copper-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="mt-4 border-t border-graphite-100 pt-4">
                <a
                  href={COMPANY.phoneHref}
                  className="block px-4 py-2 text-lg font-semibold text-copper-600"
                >
                  {COMPANY.phone}
                </a>
                <div className="mt-4 px-4">
                  <Button
                    href="#contact"
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Бесплатный замер
                  </Button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
