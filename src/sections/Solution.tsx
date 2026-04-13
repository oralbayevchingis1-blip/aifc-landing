import { motion } from "motion/react";
import { Banknote, Building2, CheckCircle2, FileBadge2, Landmark, MessagesSquare } from "lucide-react";
import { useLanguage } from "../i18n";

const items = [
  {
    icon: Building2,
    titleRu: "Анализ структуры и юрисдикции",
    titleEn: "Structure and jurisdiction analysis",
    bodyRu: "Подбираем оптимальный тип юрлица (Private Company, LLP, Branch и др.) под вашу модель и налоговые цели.",
    bodyEn: "We determine the optimal legal form (Private Company, LLP, Branch, etc.) for your model and tax objectives.",
  },
  {
    icon: FileBadge2,
    titleRu: "Подготовка пакета документов",
    titleEn: "Full document package",
    bodyRu: "Готовим корпоративные и договорные документы для подачи в AFSA.",
    bodyEn: "We prepare corporate and contractual documentation suitable for AFSA filing.",
  },
  {
    icon: MessagesSquare,
    titleRu: "Коммуникация с AFSA",
    titleEn: "AFSA communication",
    bodyRu: "Ведём переписку и ответы на запросы регулятора.",
    bodyEn: "We handle correspondence and responses to regulator requests.",
  },
  {
    icon: CheckCircle2,
    titleRu: "Регистрация и легализация документов",
    titleEn: "Registration and legalization",
    bodyRu: "Сопровождаем регистрацию, нотариальные действия, апостиль и легализацию.",
    bodyEn: "We support registration, notarization, apostille, and document legalization.",
  },
  {
    icon: Banknote,
    titleRu: "Открытие счёта",
    titleEn: "Bank account opening",
    bodyRu: "Помогаем с выбором банка и прохождением KYC/AML-проверок.",
    bodyEn: "We support bank selection and KYC/AML checks.",
  },
  {
    icon: Landmark,
    titleRu: "Постсопровождение и соответствие требованиям",
    titleEn: "Post-registration compliance",
    bodyRu: "Годовая отчётность, поддержание good standing, изменения структуры и корпоративные вопросы.",
    bodyEn: "Annual filings, good standing maintenance, structure changes, and corporate governance matters.",
  },
];

export function Solution() {
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
          className="mb-10 font-playfair text-3xl font-bold text-text md:text-4xl"
        >
          {isRu ? "Что мы берём на себя" : "What we handle"}
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.titleRu}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="group rounded-xl border border-border/60 bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_12px_38px_-14px_rgba(100,168,185,0.16)]"
              >
                <div className="mb-4 inline-flex rounded-lg border border-accent/30 bg-accent/10 p-2 text-accent transition-colors duration-300 group-hover:bg-accent/15">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-text">{isRu ? item.titleRu : item.titleEn}</h3>
                <p className="text-sm leading-relaxed text-muted">{isRu ? item.bodyRu : item.bodyEn}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
