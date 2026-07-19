import { COMPANY, NAV_ITEMS } from "@/constants/company";
import { MessengerLink } from "@/components/ui/MessengerLink";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-graphite-950 text-graphite-300">
      <div className="container-main section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-copper-600 text-sm font-bold text-white">
                RP
              </span>
              <span className="heading-display text-xl text-white">
                {COMPANY.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-graphite-400">
              {COMPANY.tagline}. Более {COMPANY.completedProjects} объектов за{" "}
              {COMPANY.experienceYears} лет работы.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Навигация
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm transition-colors hover:text-copper-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Контакты
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="transition-colors hover:text-copper-400"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-copper-400"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="text-graphite-400">{COMPANY.address}</li>
              <li className="text-graphite-400">{COMPANY.workingHours}</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Мессенджеры
            </h3>
            <div className="flex gap-3">
              <MessengerLink
                type="telegram"
                href={COMPANY.telegram}
                variant="footer"
              />
              <MessengerLink
                type="whatsapp"
                href={COMPANY.whatsapp}
                variant="footer"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl bg-graphite-900">
          <div
            className="flex h-48 items-center justify-center text-graphite-500 md:h-56"
            role="img"
            aria-label="Карта расположения офиса — placeholder"
          >
            <div className="text-center">
              <p className="text-sm font-medium">Карта</p>
              <p className="mt-1 text-xs text-graphite-600">
                {COMPANY.address}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-graphite-800 pt-8 text-xs text-graphite-500 md:flex-row">
          <p>
            © {currentYear} {COMPANY.name}. Все права защищены.
          </p>
          <a
            href="/privacy"
            className="transition-colors hover:text-copper-400"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
