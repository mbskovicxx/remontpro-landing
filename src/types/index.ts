export interface NavItem {
  label: string;
  href: string;
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  priceFrom: string;
  image: string;
  features: string[];
}

export type PortfolioCategory = "all" | "studio" | "one-room" | "two-room";

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "all">;
  area: number;
  duration: string;
  style: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  duration: string;
}

export interface Review {
  id: string;
  name: string;
  objectType: string;
  area: number;
  rating: number;
  text: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingTier {
  id: string;
  title: string;
  pricePerSqm: number;
  description: string;
  includes: string[];
}

export interface ContactFormData {
  name: string;
  phone: string;
  repairType: string;
  area: string;
  comment: string;
}

export interface StatItem {
  value: string;
  label: string;
}
