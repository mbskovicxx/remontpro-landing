import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("ru-RU").format(value);
}

export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 0) return "";

  let formatted = "+7";
  const rest = digits.startsWith("7") ? digits.slice(1) : digits.startsWith("8") ? digits.slice(1) : digits;

  if (rest.length > 0) formatted += ` (${rest.slice(0, 3)}`;
  if (rest.length >= 3) formatted += `) ${rest.slice(3, 6)}`;
  if (rest.length >= 6) formatted += `-${rest.slice(6, 8)}`;
  if (rest.length >= 8) formatted += `-${rest.slice(8, 10)}`;

  return formatted;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
