import type { PricingTier } from "@/types";

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "cosmetic",
    title: "Косметический",
    pricePerSqm: 6500,
    description: "Обновление отделки без замены коммуникаций",
    includes: [
      "Покраска или обои",
      "Замена напольного покрытия",
      "Обновление плинтусов",
      "Замена розеток и выключателей",
    ],
  },
  {
    id: "capital",
    title: "Капитальный",
    pricePerSqm: 12000,
    description: "Полная замена отделки и инженерных систем",
    includes: [
      "Демонтаж и выравнивание",
      "Новая электрика и сантехника",
      "Стяжка и штукатурка",
      "Чистовая отделка",
    ],
  },
  {
    id: "turnkey",
    title: "Под ключ",
    pricePerSqm: 18000,
    description: "Полный цикл от демонтажа до финальной уборки",
    includes: [
      "Дизайн-проект в подарок",
      "Все виды работ",
      "Закупка материалов",
      "Мебель и декор по желанию",
    ],
  },
];

export const REPAIR_TYPES = [
  { value: "", label: "Выберите тип ремонта" },
  { value: "cosmetic", label: "Косметический" },
  { value: "capital", label: "Капитальный" },
  { value: "turnkey", label: "Под ключ" },
  { value: "design", label: "Дизайн-проект" },
  { value: "other", label: "Другое" },
];
