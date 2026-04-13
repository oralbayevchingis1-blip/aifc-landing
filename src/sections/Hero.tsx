import { useInViewOnce } from "../hooks/useInViewOnce";
import { useCountUp } from "../hooks/useCountUp";
import { scrollToSection } from "../lib/scrollTo";
import { useLanguage } from "../i18n";
import { WHATSAPP_URL } from "../lib/marketingLinks";

export function Hero() {
  const { language } = useLanguage();
  const isRu = language === "ru";
  const { ref: statsRef, inView } = useInViewOnce(0.2);
  const since = useCountUp(2019, inView);
  const aifc = useCountUp(6, inView);
  const experience = useCountUp(23, inView);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute -left-[20%] top-[10%] h-[min(90vw,560px)] w-[min(90vw,560px)] rounded-full bg-accent/[0.12] blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[15%] bottom-[5%] h-[min(70vw,420px)] w-[min(70vw,420px)] rounded-full bg-gold/[0.07] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-8 lg:col-span-3">
            <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-accent">
              {isRu ? "ЮРИДИЧЕСКАЯ ФИРМА • МФЦА / AIFC" : "LAW FIRM • AIFC"}
            </p>
            <h1 className="font-playfair text-4xl font-bold leading-[1.08] text-text sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              {isRu ? "Регистрация" : "Company registration"}
              <br />
              {isRu ? "компании в МФЦА" : "in AIFC"}
            </h1>
            <p className="max-w-xl text-base font-medium leading-snug text-accent md:text-lg">
              {isRu
                ? "Берём на себя структуру, документы по праву МФЦА, переписку с AFSA, регистрацию и банковский счёт."
                : "We handle structure, AIFC-law documents, communication with AFSA, registration, and bank account setup."}
            </p>
            <p className="max-w-lg text-base font-light leading-relaxed text-muted">
              {isRu
                ? "Практика МФЦА с 2019 года. Полный пакет обычно готовим за 5 рабочих дней; один партнёр ведёт проект лично."
                : "AIFC practice since 2019. The full document package is usually prepared within 5 business days, with direct partner supervision."}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium text-center"
              >
                {isRu ? "Написать в WhatsApp" : "Write on WhatsApp"} →
              </a>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="btn-premium text-center"
              >
                {isRu ? "Получить бесплатную консультацию" : "Get free consultation"} →
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("cases")}
                className="btn-glass text-center"
              >
                {isRu ? "Смотреть кейсы" : "View matters"} ↓
              </button>
            </div>
          </div>

          <div ref={statsRef} className="lg:col-span-2">
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <p className="font-playfair text-5xl text-accent sm:text-6xl">
                  {since}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-muted">
                  {isRu ? "практика в МФЦА с" : "practice in AIFC since"}
                </p>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-playfair text-5xl text-accent sm:text-6xl">
                  {aifc}
                  <span className="align-top text-3xl sm:text-4xl">+</span>
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-muted">
                  {isRu ? "лет" : "years"}
                  <br />
                  {isRu ? "в AIFC" : "in AIFC"}
                </p>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-playfair text-5xl text-accent sm:text-6xl">
                  {experience}
                  <span className="align-top text-3xl sm:text-4xl">+</span>
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-muted">
                  {isRu ? "лет" : "years"}
                  <br />
                  {isRu ? "опыт партнёров" : "partners' combined experience"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
