export const COMPANY = {
  name: "RemontPro",
  tagline: "Ремонт квартир под ключ в Москве и МО",
  phone: "+7 (495) 123-45-67",
  phoneHref: "tel:+74951234567",
  email: "info@remontpro.ru",
  address: "г. Москва, ул. Строителей, д. 15, офис 302",
  workingHours: "Пн–Сб: 9:00–20:00",
  whatsapp: "https://wa.me/74951234567",
  telegram: "https://t.me/remontpro",
  experienceYears: 12,
  completedProjects: 500,
  warrantyYears: 3,
} as const;

export const NAV_ITEMS = [
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Этапы", href: "#process" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contact" },
] as const;

export const HERO_STATS = [
  { value: "500+", label: "объектов сдано" },
  { value: "12 лет", label: "на рынке" },
  { value: "3 года", label: "гарантия" },
] as const;
