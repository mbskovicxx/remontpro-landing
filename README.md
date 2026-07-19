# RemontPro — Лендинг компании по ремонту квартир

Современный одностраничный сайт для компании по ремонту квартир «под ключ». Кейс для портфолио на фриланс-бирже (Kwork / Upwork / Freelance.ru).

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## Описание проекта

**Задача:** создать продающий лендинг, который генерирует заявки на бесплатный замер и демонстрирует экспертность компании.

**Роль:** Full-stack frontend-разработчик — дизайн-система, вёрстка, анимации, SEO, адаптив.

**Результат:** полностью рабочий лендинг с 11 секциями, формой заявки, калькулятором стоимости, портфолио с lightbox и scroll-анимациями.

## Стек технологий

| Технология | Назначение |
|---|---|
| **Next.js 15** (App Router) | SSR, routing, оптимизация изображений |
| **TypeScript** | Типизация данных и компонентов |
| **Tailwind CSS 4** | Utility-first стилизация |
| **Framer Motion** | UI-анимации (появления, hover, transitions) |
| **GSAP + ScrollTrigger** | Hero parallax и пошаговая подсветка этапов |
| **next/image** | Оптимизированные изображения |
| **next/font** | Шрифты без layout shift (Cormorant Garamond + Manrope) |

## Структура проекта

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Главная страница (лендинг)
│   ├── globals.css         # Tailwind + кастомные стили
│   └── privacy/page.tsx    # Политика конфиденциальности
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Навигация, мобильное меню, CTA
│   │   └── Footer.tsx      # Контакты, соцсети, карта
│   ├── ui/
│   │   ├── Button.tsx      # Кнопка с вариантами и анимацией
│   │   ├── SectionTitle.tsx
│   │   └── Card.tsx
│   ├── sections/
│   │   ├── Hero.tsx        # GSAP parallax + fade-in
│   │   ├── Advantages.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── ProcessSteps.tsx # GSAP ScrollTrigger
│   │   ├── PricingCalculator.tsx
│   │   ├── Reviews.tsx
│   │   ├── FAQ.tsx
│   │   └── ContactForm.tsx
│   ├── portfolio/
│   │   └── PortfolioGrid.tsx  # Галерея + lightbox
│   ├── reviews/
│   │   └── ReviewCard.tsx
│   ├── faq/
│   │   └── FAQItem.tsx
│   └── seo/
│       └── JsonLd.tsx
├── constants/              # Данные: услуги, отзывы, FAQ, этапы
├── types/                  # TypeScript интерфейсы
├── hooks/
│   └── useReducedMotion.ts
└── lib/
    └── utils.ts
```

## Секции лендинга

1. **Header** — логотип, якорная навигация, телефон, CTA
2. **Hero** — заголовок, 2 CTA, ключевые цифры, фоновое фото
3. **Преимущества** — 6 карточек (смета, договор, сроки...)
4. **Услуги** — 5 карточек с ценами и фото
5. **Портфолио** — 9 проектов, фильтр, lightbox, до/после
6. **Этапы работ** — 7 шагов с GSAP ScrollTrigger
7. **Калькулятор** — расчёт стоимости за м²
8. **Отзывы** — 6 отзывов с рейтингом
9. **FAQ** — 8 вопросов, accordion
10. **Форма заявки** — валидация, success-состояние
11. **Footer** — контакты, соцсети, карта

## Запуск локально

```bash
# Установка зависимостей
npm install

# Dev-сервер
npm run dev

# Открыть http://localhost:3000
```

## Сборка и деплой на Vercel

```bash
# Production-сборка
npm run build

# Локальный preview
npm start
```

### Деплой на Vercel

1. Загрузите репозиторий на GitHub
2. Перейдите на [vercel.com](https://vercel.com) → Import Project
3. Vercel автоматически определит Next.js — нажмите Deploy
4. Готово — сайт доступен по URL вида `your-project.vercel.app`

Или через CLI:

```bash
npx vercel
```

## Для портфолио на фриланс-бирже

### Описание задачи (шаблон)

> Разработка современного лендинга для компании по ремонту квартир «под ключ». Одностраничный сайт с якорной навигацией, формой заявки, калькулятором стоимости, портфолио с фильтрацией и lightbox. Mobile-first, анимации на Framer Motion и GSAP, SEO-оптимизация.

### Что показать

- Скриншоты desktop (1440px) и mobile (375px)
- Lighthouse-отчёт (Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95)
- Ссылка на live demo (Vercel)
- Стек: Next.js 15, TypeScript, Tailwind, Framer Motion, GSAP

### Ключевые фичи для описания

- Фиксированная смета и калькулятор с интерактивным слайдером
- Портфолио с фильтрами и lightbox «до/после»
- GSAP ScrollTrigger для пошаговой анимации этапов работ
- Форма с валидацией и маской телефона
- JSON-LD разметка для LocalBusiness
- Поддержка `prefers-reduced-motion`

## Lighthouse-цели

| Метрика | Цель |
|---|---|
| Performance | ≥ 90 |
| Accessibility | ≥ 95 |
| SEO | ≥ 95 |
| LCP | < 2.5s |
| CLS | < 0.1 |

## Лицензия

Проект создан в учебных/портфолио целях. Свободно используйте как основу для своих проектов.
