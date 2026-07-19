"use client";

import { motion } from "framer-motion";
import type { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
  delay?: number;
}

export function ReviewCard({ review, delay = 0 }: ReviewCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="flex flex-col rounded-2xl border border-graphite-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-graphite-950/5 md:p-8"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-graphite-950">{review.name}</h3>
          <p className="text-sm text-graphite-500">{review.objectType}</p>
        </div>
        <div
          className="flex gap-0.5"
          aria-label={`Оценка: ${review.rating} из 5`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`h-4 w-4 ${i < review.rating ? "text-copper-500" : "text-graphite-200"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <blockquote className="flex-1 text-sm leading-relaxed text-graphite-600">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <p className="mt-4 text-xs text-graphite-400">{review.date}</p>
    </motion.article>
  );
}
