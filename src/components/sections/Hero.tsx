"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { COMPANY, HERO_STATS } from "@/constants/company";
import { IMAGES } from "@/constants/images";
import { useReducedMotion, useMediaQuery } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (reducedMotion || !isDesktop || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion, isDesktop]);

  const motionProps = reducedMotion
    ? {}
    : {
        initial: "hidden" as const,
        animate: "visible" as const,
        variants: heroContainer,
      };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Главный экран"
    >
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="Современный интерьер квартиры после ремонта под ключ"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-graphite-950/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/90 via-graphite-950/80 to-graphite-950/50" />
      </div>

      <div className="container-main relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div className="max-w-2xl text-white" {...motionProps}>
          <motion.span
            variants={reducedMotion ? undefined : heroItem}
            className="mb-3 inline-block rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
          >
            Москва и Московская область
          </motion.span>

          <motion.h1
            variants={reducedMotion ? undefined : heroItem}
            className="heading-display hero-text-shadow text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Ремонт квартир под ключ — сдаём точно в срок
          </motion.h1>

          <motion.p
            variants={reducedMotion ? undefined : heroItem}
            className="hero-text-shadow mt-4 text-sm leading-relaxed text-white md:text-base"
          >
            Фиксированная смета, официальный договор и гарантия{" "}
            {COMPANY.warrantyYears} года. Бесплатный замер и 3D-визуализация
            вашего будущего интерьера.
          </motion.p>

          <motion.div
            variants={reducedMotion ? undefined : heroItem}
            className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center"
          >
            <Button href="#contact" size="md">
              Получить расчёт сметы
            </Button>
            <Button
              href={COMPANY.whatsapp}
              variant="outline"
              size="md"
              external
              className="border-white/50 text-white hover:border-white hover:bg-white/10 hover:text-white"
            >
              WhatsApp
            </Button>
            <Button
              href={COMPANY.telegram}
              variant="outline"
              size="md"
              external
              className="border-white/50 text-white hover:border-white hover:bg-white/10 hover:text-white"
            >
              Telegram
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-3 gap-3 md:mt-14 md:max-w-lg md:gap-6"
          {...(reducedMotion
            ? {}
            : {
                initial: "hidden",
                animate: "visible",
                variants: {
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.08, delayChildren: 0.55 },
                  },
                },
              })}
        >
          {HERO_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={reducedMotion ? undefined : heroItem}
              className="text-center md:text-left"
            >
              <p className="heading-display hero-text-shadow text-xl text-white md:text-2xl">
                {stat.value}
              </p>
              <p className="hero-text-shadow mt-0.5 text-xs text-white md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
