import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/constants/company";

export const metadata: Metadata = {
  title: `Политика конфиденциальности — ${COMPANY.name}`,
  description: "Политика обработки персональных данных компании RemontPro",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="container-main section-padding pt-32">
      <h1 className="heading-display mb-8 text-3xl text-graphite-950 md:text-4xl">
        Политика конфиденциальности
      </h1>
      <div className="prose prose-graphite max-w-3xl space-y-6 text-graphite-600">
        <p>
          Настоящая Политика конфиденциальности определяет порядок обработки и
          защиты персональных данных пользователей сайта {COMPANY.name}.
        </p>
        <h2 className="text-xl font-semibold text-graphite-950">
          1. Сбор информации
        </h2>
        <p>
          Мы собираем информацию, которую вы добровольно предоставляете при
          заполнении форм на сайте: имя, номер телефона, тип ремонта, площадь
          объекта и комментарий.
        </p>
        <h2 className="text-xl font-semibold text-graphite-950">
          2. Использование информации
        </h2>
        <p>
          Персональные данные используются исключительно для связи с вами,
          подготовки сметы и организации замера. Мы не передаём данные третьим
          лицам без вашего согласия.
        </p>
        <h2 className="text-xl font-semibold text-graphite-950">
          3. Защита данных
        </h2>
        <p>
          Мы принимаем необходимые организационные и технические меры для защиты
          персональных данных от несанкционированного доступа.
        </p>
        <h2 className="text-xl font-semibold text-graphite-950">
          4. Контакты
        </h2>
        <p>
          По вопросам обработки персональных данных обращайтесь:{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-copper-600 hover:underline">
            {COMPANY.email}
          </a>
        </p>
      </div>
      <Link
        href="/"
        className="mt-8 inline-block text-sm font-medium text-copper-600 hover:underline"
      >
        ← Вернуться на главную
      </Link>
    </div>
  );
}
