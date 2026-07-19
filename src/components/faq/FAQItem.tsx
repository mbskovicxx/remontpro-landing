"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQItem as FAQItemType } from "@/types";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  item: FAQItemType;
  index: number;
}

export function FAQItem({ item, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <button
        type="button"
        id={`faq-question-${item.id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-graphite-950 md:text-lg">
          {item.question}
        </span>
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-graphite-100 text-graphite-600 transition-transform",
            isOpen && "rotate-45 bg-copper-100 text-copper-700"
          )}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div className="overflow-hidden">
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <p className="pb-5 text-sm leading-relaxed text-graphite-500 md:text-base">
                {item.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
