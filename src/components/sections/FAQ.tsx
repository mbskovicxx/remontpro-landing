"use client";

import { FAQ_ITEMS } from "@/constants/faq";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FAQItem } from "@/components/faq/FAQItem";

export function FAQ() {
  return (
    <section id="faq" className="section-padding" aria-labelledby="faq-title">
      <div className="container-main">
        <SectionTitle
          label="FAQ"
          title="Частые вопросы"
          subtitle="Ответы на то, что чаще всего спрашивают перед началом ремонта"
        />

        <div className="mx-auto max-w-3xl divide-y divide-graphite-100">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
