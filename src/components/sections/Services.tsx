"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES } from "@/constants/services";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Services() {
  return (
    <section id="services" className="section-padding" aria-labelledby="services-title">
      <div className="container-main">
        <SectionTitle
          id="services-title"
          label="Услуги"
          title="Ремонт любой сложности"
          subtitle="От косметического обновления до полного цикла работ с дизайн-проектом"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-2xl border border-graphite-100 bg-white shadow-sm transition-shadow hover:shadow-lg hover:shadow-graphite-950/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} — пример работ RemontPro`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/60 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-lg bg-copper-600 px-3 py-1 text-sm font-semibold text-white">
                  {service.priceFrom}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-graphite-950">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-graphite-500">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-graphite-600"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-copper-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button href="#contact" size="lg">
            Обсудить ваш проект
          </Button>
        </div>
      </div>
    </section>
  );
}
