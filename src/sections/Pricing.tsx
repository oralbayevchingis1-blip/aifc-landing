import { Reveal } from "../components/Reveal";
import { scrollToSection } from "../lib/scrollTo";
import { useLanguage } from "../i18n";

const tiers = [
  {
    titleRu: "Государственные сборы МФЦА",
    titleEn: "AIFC government fees",
    price: "$500",
    descRu: "Регистрационная пошлина: $500 единовременно, продление — $1 000–$2 000/год в зависимости от вида юрлица. Фиксируем состав платежей до старта.",
    descEn: "Registration fee: $500 one-time, annual renewal: $1,000-$2,000 depending on legal form. We define all payments before start.",
    bulletsRu: ["Регистрация компании", "Варианты уставного капитала", "Ежегодное продление в МФЦА"],
    bulletsEn: ["Company registration", "Share capital options", "Annual AIFC renewal"],
  },
  {
    titleRu: "Юридическое сопровождение",
    titleEn: "Legal support",
    priceRu: "после анализа",
    priceEn: "after review",
    descRu: "Фиксированная стоимость пакета под вашу модель — без почасовых сюрпризов. Смету даём после первичного разбора.",
    descEn: "Fixed-fee package tailored to your model, without hourly billing surprises. Estimate provided after initial review.",
    bulletsRu: ["Структура и документы", "Взаимодействие с AFSA", "Постсопровождение по запросу"],
    bulletsEn: ["Structure and documents", "AFSA communication", "Post-registration support"],
  },
  {
    titleRu: "Первичная консультация",
    titleEn: "Initial consultation",
    priceRu: "бесплатно",
    priceEn: "free",
    descRu: "30 минут с партнёром: оценка ситуации и следующий шаг — без обязательства заключать договор.",
    descEn: "30-minute partner consultation: case review and next-step recommendation, without engagement commitment.",
    bulletsRu: ["Онлайн или созвон", "Рекомендации по структуре", "Ориентир по срокам"],
    bulletsEn: ["Online meeting", "Structure recommendations", "Timeline estimate"],
  },
];

export function Pricing() {
  const { language } = useLanguage();
  const isRu = language === "ru";

  return (
    <section id="pricing" className="border-t border-border/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-4 font-playfair text-3xl font-bold text-text md:text-4xl">
            {isRu ? "Стоимость и формат работы" : "Pricing and engagement model"}
          </h2>
          <p className="mb-12 max-w-2xl text-muted">
            {isRu
              ? "Прозрачные условия: заранее понимаете, за что платите и какой результат получите."
              : "Transparent terms: you know what you pay for and what outcome to expect."}
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <article
                key={t.titleRu}
                className={`flex flex-col rounded-xl border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(100,168,185,0.12)] lg:p-8 ${
                  i === 2
                    ? "border-accent/50 shadow-[0_0_0_1px_rgba(100,168,185,0.15)] relative"
                    : "border-border/80 hover:border-accent/30"
                }`}
              >
                {i === 2 && (
                  <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                    {isRu ? "Начать здесь" : "Start here"}
                  </span>
                )}
                <h3 className="text-lg font-semibold text-text">{isRu ? t.titleRu : t.titleEn}</h3>
                <p className="mt-3 font-playfair text-3xl text-accent">{isRu ? (t.priceRu ?? t.price) : (t.priceEn ?? t.price)}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{isRu ? t.descRu : t.descEn}</p>
                <ul className="mt-6 space-y-2 text-sm text-text/80">
                  {(isRu ? t.bulletsRu : t.bulletsEn).map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-accent">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="btn-premium w-full sm:w-auto"
            >
              {isRu ? "Получить расчёт" : "Get estimate"} →
            </button>
            <p className="text-center text-xs text-muted sm:text-left">
              {isRu
                ? "Оставьте заявку — направим ориентир по бюджету и срокам в течение 2 рабочих часов."
                : "Submit a request and receive a budget and timeline estimate within 2 business hours."}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
