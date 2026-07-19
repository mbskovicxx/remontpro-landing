"use client";

import { motion } from "framer-motion";
import { REVIEWS } from "@/constants/reviews";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ReviewCard } from "@/components/reviews/ReviewCard";

export function Reviews() {
  return (
    <section
      id="reviews"
      className="section-padding bg-graphite-50"
      aria-labelledby="reviews-title"
    >
      <div className="container-main">
        <SectionTitle
          id="reviews-title"
          label="Отзывы"
          title="Что говорят клиенты"
          subtitle="127 отзывов со средней оценкой 4.9 — реальные истории наших заказчиков"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.id} review={review} delay={i * 0.08} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-8"
        >
          <div className="text-center">
            <p className="heading-display text-4xl text-copper-600">4.9</p>
            <div className="mt-1 flex justify-center gap-0.5" aria-label="Рейтинг 4.9 из 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-copper-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="mt-1 text-sm text-graphite-500">127 отзывов</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
