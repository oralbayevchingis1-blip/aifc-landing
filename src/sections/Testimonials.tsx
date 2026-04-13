import { motion } from "motion/react";
import { useLanguage } from "../i18n";

const allReviews = [
  {
    quoteRu:
      "Собрали структуру под лицензию и довели до одобрения AFSA без лишних итераций. Понятные сроки и один канал связи — для нас это было критично.",
    quoteEn:
      "They built the licensing structure and led the AFSA approval process without unnecessary iterations. Clear timing and one communication channel were critical for us.",
    authorRu: "Управляющий директор",
    authorEn: "Managing Director",
    contextRu: "IT-холдинг, Казахстан",
    contextEn: "IT holding, Kazakhstan",
  },
  {
    quoteRu:
      "Документы на английском праве выглядели так, как ждёт регулятор. Мы экономили время команды на переписке с AFSA — юристы брали это на себя.",
    quoteEn:
      "The legal documents were prepared in the format expected by the regulator. Our team saved time because counsel handled AFSA communication.",
    authorRu: "Генеральный директор",
    authorEn: "CEO",
    contextRu: "SaaS-платформа",
    contextEn: "SaaS platform",
  },
  {
    quoteRu:
      "Нужен был холдинг в МФЦА перед раундом. Получили понятный план по стоимости и этапам, без разберемся по ходу.",
    quoteEn:
      "We needed an AIFC holding before an investment round. We received a clear plan on budget and milestones from the start.",
    authorRu: "Сооснователь",
    authorEn: "Co-founder",
    contextRu: "IT-холдинг",
    contextEn: "IT holding",
  },
  {
    quoteRu:
      "Прошли AFSA compliance за один цикл — без возвратов. Структура UBO и AML-политики подготовлены корректно с первого раза.",
    quoteEn:
      "We passed AFSA compliance in one cycle without returns. UBO structure and AML policies were prepared correctly from the first submission.",
    authorRu: "Технический директор",
    authorEn: "CTO",
    contextRu: "AI-платформа",
    contextEn: "AI platform",
  },
  {
    quoteRu:
      "SHA и корпоративный пакет под английское право — всё готово к дедлайну по синдикации. Партнер вел проект лично.",
    quoteEn:
      "The shareholders agreement and corporate package were ready before syndication deadline. The partner led the project personally.",
    authorRu: "Основатель",
    authorEn: "Founder",
    contextRu: "Финтех-проект",
    contextEn: "Fintech project",
  },
  {
    quoteRu:
      "Открытие счета при нерезидентной структуре — прошли без отказов. Знают, какие банки реально работают с AIFC.",
    quoteEn:
      "Bank account opening for a non-resident structure was completed without rejections. They know which banks actually work with AIFC entities.",
    authorRu: "Финансовый директор",
    authorEn: "CFO",
    contextRu: "Инвестиционная структура",
    contextEn: "Investment structure",
  },
];

function TestimonialsColumn({
  reviews,
  isRu,
  duration = 15,
  className = "",
}: {
  reviews: typeof allReviews;
  isRu: boolean;
  duration?: number;
  className?: string;
}) {
  return (
    <div
      className={`flex min-w-0 flex-1 flex-col gap-4 overflow-hidden ${className}`}
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <div className="flex flex-col gap-4" style={{ animation: `scroll-up ${duration}s linear infinite` }}>
        {[...reviews, ...reviews].map((r, i) => (
          <figure
            key={i}
            className="relative flex flex-col rounded-xl border border-border/60 bg-surface p-5 transition-colors duration-300 hover:border-accent/25"
          >
            <span
              className="pointer-events-none absolute right-4 top-1 font-playfair text-6xl leading-none text-accent/10"
              aria-hidden
            >
              "
            </span>
            <blockquote className="flex-1 text-sm leading-relaxed text-text/80">
              {isRu ? r.quoteRu : r.quoteEn}
            </blockquote>
            <figcaption className="mt-4 border-t border-border/40 pt-3 text-xs text-muted">
              <span className="font-medium text-text/70">{isRu ? r.authorRu : r.authorEn}</span>
              <span className="mx-2 text-border/80">-</span>
              {isRu ? r.contextRu : r.contextEn}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const { language } = useLanguage();
  const isRu = language === "ru";
  const col1 = allReviews.slice(0, 2);
  const col2 = allReviews.slice(2, 4);
  const col3 = allReviews.slice(4, 6);

  return (
    <section className="border-t border-border/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 font-playfair text-3xl font-bold text-text md:text-4xl"
        >
          {isRu ? "Отзывы клиентов" : "Client feedback"}
        </motion.h2>
        <div className="flex max-h-[520px] gap-4 overflow-hidden">
          <TestimonialsColumn reviews={col1} isRu={isRu} duration={14} />
          <TestimonialsColumn reviews={col2} isRu={isRu} duration={20} className="hidden md:flex" />
          <TestimonialsColumn reviews={col3} isRu={isRu} duration={17} className="hidden lg:flex" />
        </div>
      </div>
    </section>
  );
}
