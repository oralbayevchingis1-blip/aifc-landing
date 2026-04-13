import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n";

const steps = [
  {
    n: "01",
    titleRu: "Консультация",
    titleEn: "Consultation",
    bodyRu: "30 минут с партнёром. Оцениваем вашу ситуацию бесплатно.",
    bodyEn: "30-minute partner consultation with initial case assessment.",
  },
  {
    n: "02",
    titleRu: "Анализ",
    titleEn: "Assessment",
    bodyRu: "Подбираем структуру и рассчитываем стоимость и сроки.",
    bodyEn: "We select legal structure and provide timeline and budget estimate.",
  },
  {
    n: "03",
    titleRu: "Документы",
    titleEn: "Documents",
    bodyRu: "Готовим полный пакет документов обычно за 5 рабочих дней.",
    bodyEn: "We usually prepare the full set of documents within 5 business days.",
  },
  {
    n: "04",
    titleRu: "Подача",
    titleEn: "Submission",
    bodyRu: "Подаём документы в AFSA и сопровождаем проверку.",
    bodyEn: "We file with AFSA and handle the review process.",
  },
  {
    n: "05",
    titleRu: "Регистрация",
    titleEn: "Registration",
    bodyRu: "Получаете Certificate of Incorporation и реквизиты компании.",
    bodyEn: "You receive the Certificate of Incorporation and company details.",
  },
];

export function Process() {
  const { language } = useLanguage();
  const isRu = language === "ru";

  return (
    <section className="border-t border-border/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-12 font-playfair text-3xl font-bold text-text md:text-4xl"
        >
          {isRu ? "Как мы работаем" : "How we work"}
        </motion.h2>

        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, i) => (
            <motion.article
              key={step.titleRu}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="relative rounded-xl border border-border/60 bg-surface p-5"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{step.n}</p>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-text">{isRu ? step.titleRu : step.titleEn}</h3>
              <p className="text-sm leading-relaxed text-muted">{isRu ? step.bodyRu : step.bodyEn}</p>
              {i < steps.length - 1 ? (
                <ChevronRight className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-accent/55 md:block" />
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
