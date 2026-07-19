"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PRICING_TIERS } from "@/constants/pricing";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { formatPrice, cn } from "@/lib/utils";

export function PricingCalculator() {
  const [area, setArea] = useState(50);
  const [selectedTier, setSelectedTier] = useState(PRICING_TIERS[2].id);

  const tier = PRICING_TIERS.find((t) => t.id === selectedTier) ?? PRICING_TIERS[2];
  const totalPrice = area * tier.pricePerSqm;

  return (
    <section
      id="pricing"
      className="section-padding bg-graphite-950 text-white"
      aria-labelledby="pricing-title"
    >
      <div className="container-main">
        <SectionTitle
          id="pricing-title"
          label="Стоимость"
          title="Ориентировочный расчёт"
          subtitle="Точная смета зависит от состояния объекта и выбранных материалов. Замер и расчёт — бесплатно."
          className="[&_h2]:text-white [&_p]:text-graphite-400 [&_span]:text-copper-400"
        />

        <div className="mx-auto max-w-4xl">
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            {PRICING_TIERS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelectedTier(t.id)}
                className={cn(
                  "rounded-xl border-2 p-4 text-left transition-all",
                  selectedTier === t.id
                    ? "border-copper-500 bg-copper-500/10"
                    : "border-graphite-700 bg-graphite-900 hover:border-graphite-600"
                )}
                aria-pressed={selectedTier === t.id}
              >
                <p className="font-semibold">{t.title}</p>
                <p className="mt-1 text-sm text-copper-400">
                  от {formatPrice(t.pricePerSqm)} ₽/м²
                </p>
              </button>
            ))}
          </div>

          <Card hover={false} className="bg-graphite-900 border-graphite-800">
            <div className="mb-8">
              <label
                htmlFor="area-slider"
                className="mb-3 block text-sm font-medium text-graphite-300"
              >
                Площадь квартиры:{" "}
                <span className="text-copper-400">{area} м²</span>
              </label>
              <input
                id="area-slider"
                type="range"
                min={20}
                max={150}
                step={1}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-graphite-700 accent-copper-500"
                aria-valuemin={20}
                aria-valuemax={150}
                aria-valuenow={area}
              />
              <div className="mt-1 flex justify-between text-xs text-graphite-500">
                <span>20 м²</span>
                <span>150 м²</span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-graphite-400">{tier.description}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {tier.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-graphite-300"
                  >
                    <svg
                      className="h-4 w-4 shrink-0 text-copper-500"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center justify-between gap-4 border-t border-graphite-700 pt-6 sm:flex-row">
              <div>
                <p className="text-sm text-graphite-400">Ориентировочная стоимость</p>
                <motion.p
                  key={totalPrice}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="heading-display text-3xl text-copper-400 md:text-4xl"
                >
                  от {formatPrice(totalPrice)} ₽
                </motion.p>
              </div>
              <Button href="#contact" size="lg">
                Получить точный расчёт
              </Button>
            </div>
          </Card>

          <p className="mt-4 text-center text-xs text-graphite-500">
            * Цены указаны ориентировочно и не являются публичной офертой. Точная
            стоимость определяется после бесплатного замера.
          </p>
        </div>
      </div>
    </section>
  );
}
