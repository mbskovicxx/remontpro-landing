import type { Metadata } from "next";
import { Onest, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { COMPANY } from "@/constants/company";
import "./globals.css";

const siteUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: `${COMPANY.name} — Ремонт квартир под ключ в Москве и МО`,
  description:
    "Профессиональный ремонт квартир под ключ в Москве и области. Фиксированная смета, договор, гарантия 3 года. Бесплатный замер и расчёт. 500+ объектов за 12 лет.",
  keywords: [
    "ремонт квартир",
    "ремонт под ключ",
    "ремонт квартир Москва",
    "капитальный ремонт",
    "косметический ремонт",
    "дизайн-проект",
  ],
  authors: [{ name: COMPANY.name }],
  openGraph: {
    title: `${COMPANY.name} — Ремонт квартир под ключ`,
    description:
      "Фиксированная смета, договор, гарантия 3 года. Бесплатный замер в Москве и МО.",
    type: "website",
    locale: "ru_RU",
    siteName: COMPANY.name,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "RemontPro — современный интерьер после ремонта",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — Ремонт квартир под ключ`,
    description:
      "Фиксированная смета, договор, гарантия 3 года. Бесплатный замер.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${onest.variable} ${manrope.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
