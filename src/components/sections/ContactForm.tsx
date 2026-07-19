"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { REPAIR_TYPES } from "@/constants/pricing";
import { COMPANY } from "@/constants/company";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { MessengerLink } from "@/components/ui/MessengerLink";
import { formatPhone } from "@/lib/utils";
import type { ContactFormData } from "@/types";

interface FormErrors {
  name?: string;
  phone?: string;
  repairType?: string;
  area?: string;
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    phone: "",
    repairType: "",
    area: "",
    comment: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Введите имя (минимум 2 символа)";
    }

    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 11) {
      newErrors.phone = "Введите корректный номер телефона";
    }

    if (!form.repairType) {
      newErrors.repairType = "Выберите тип ремонта";
    }

    if (form.area && (Number(form.area) < 10 || Number(form.area) > 500)) {
      newErrors.area = "Площадь должна быть от 10 до 500 м²";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const updateField = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-graphite-50"
      aria-labelledby="contact-title"
    >
      <div className="container-main">
        <SectionTitle
          label="Контакты"
          title="Бесплатный замер и расчёт сметы"
          subtitle="Оставьте заявку — инженер свяжется с вами в течение 30 минут и согласует удобное время для замера"
        />

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-graphite-400">
                  Телефон
                </h3>
                <a
                  href={COMPANY.phoneHref}
                  className="text-xl font-semibold text-graphite-950 hover:text-copper-600"
                >
                  {COMPANY.phone}
                </a>
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-graphite-400">
                  Email
                </h3>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-graphite-700 hover:text-copper-600"
                >
                  {COMPANY.email}
                </a>
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-graphite-400">
                  Адрес
                </h3>
                <p className="text-graphite-700">{COMPANY.address}</p>
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-graphite-400">
                  Мессенджеры
                </h3>
                <div className="flex flex-wrap gap-3">
                  <MessengerLink
                    type="whatsapp"
                    href={COMPANY.whatsapp}
                    variant="contact"
                  />
                  <MessengerLink
                    type="telegram"
                    href={COMPANY.telegram}
                    variant="contact"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center md:p-12"
                  role="status"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
                    ✓
                  </div>
                  <h3 className="heading-display text-2xl text-graphite-950">
                    Заявка отправлена!
                  </h3>
                  <p className="mt-2 text-graphite-600">
                    Мы свяжемся с вами в течение 30 минут в рабочее время.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => {
                      setIsSubmitted(false);
                      setForm({
                        name: "",
                        phone: "",
                        repairType: "",
                        area: "",
                        comment: "",
                      });
                    }}
                  >
                    Отправить ещё одну заявку
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-2xl border border-graphite-100 bg-white p-6 shadow-sm md:p-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      label="Ваше имя"
                      id="name"
                      error={errors.name}
                      required
                    >
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className="form-input"
                        placeholder="Иван"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                    </FormField>

                    <FormField
                      label="Телефон"
                      id="phone"
                      error={errors.phone}
                      required
                    >
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          updateField("phone", formatPhone(e.target.value))
                        }
                        className="form-input"
                        placeholder="+7 (999) 123-45-67"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                    </FormField>

                    <FormField
                      label="Тип ремонта"
                      id="repairType"
                      error={errors.repairType}
                      required
                    >
                      <select
                        id="repairType"
                        value={form.repairType}
                        onChange={(e) => updateField("repairType", e.target.value)}
                        className="form-input"
                        aria-invalid={!!errors.repairType}
                        aria-describedby={
                          errors.repairType ? "repairType-error" : undefined
                        }
                      >
                        {REPAIR_TYPES.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </FormField>

                    <FormField label="Площадь, м²" id="area" error={errors.area}>
                      <input
                        id="area"
                        type="number"
                        min={10}
                        max={500}
                        value={form.area}
                        onChange={(e) => updateField("area", e.target.value)}
                        className="form-input"
                        placeholder="50"
                        aria-invalid={!!errors.area}
                        aria-describedby={errors.area ? "area-error" : undefined}
                      />
                    </FormField>
                  </div>

                  <FormField label="Комментарий" id="comment" className="mt-5">
                    <textarea
                      id="comment"
                      rows={3}
                      value={form.comment}
                      onChange={(e) => updateField("comment", e.target.value)}
                      className="form-input resize-none"
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </FormField>

                  <Button
                    type="submit"
                    size="lg"
                    className="mt-6 w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  </Button>

                  <p className="mt-4 text-xs text-graphite-400">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="/privacy" className="underline hover:text-copper-600">
                      политикой конфиденциальности
                    </a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  id,
  error,
  required,
  children,
  className,
}: {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-graphite-700">
        {label}
        {required && <span className="text-copper-600"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
