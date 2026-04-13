import { motion } from "motion/react";
import { AlertTriangle, FileWarning, SearchCheck, Timer } from "lucide-react";
import { useLanguage } from "../i18n";

const items = [
  {
    icon: FileWarning,
    titleRu: "Документация на английском языке",
    titleEn: "Documentation in English",
    bodyRu: "Документы МФЦА оформляются на английском языке и по стандартам юрисдикции. Ошибка в уставных документах может привести к возврату заявки.",
    bodyEn: "AIFC documents are prepared in English and under jurisdiction standards. Errors in constitutional documents can lead to application return.",
  },
  {
    icon: AlertTriangle,
    titleRu: "Риск возврата при неверной структуре",
    titleEn: "Risk of return due to wrong structure",
    bodyRu: "AFSA вправе отказать или запросить доработку, если вид юрлица не соответствует модели бизнеса.",
    bodyEn: "AFSA may reject or request revisions if the legal form does not match the business model.",
  },
  {
    icon: SearchCheck,
    titleRu: "Требования к UBO и AML",
    titleEn: "UBO and AML requirements",
    bodyRu: "Раскрытие бенефициаров, AML-проверки и подтверждение источника капитала требуют точной структуры данных.",
    bodyEn: "Beneficial ownership disclosure, AML checks, and source-of-funds evidence require precise documentation structure.",
  },
  {
    icon: Timer,
    titleRu: "Сроки растягиваются без сопровождения",
    titleEn: "Timelines extend without counsel",
    bodyRu: "Без юридического сопровождения процесс часто затягивается из-за повторных запросов и исправлений документов.",
    bodyEn: "Without legal support, timelines often extend due to repeated regulator queries and document corrections.",
  },
];

export function Problem() {
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
          {isRu ? "Почему это непросто" : "Why this is complex"}
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.titleRu}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="rounded-lg border border-border/50 bg-surface p-6 transition-all duration-300 hover:border-accent/30"
              >
                <p className="mb-3 flex items-center gap-3 text-lg font-semibold text-text">
                  <span className="inline-flex rounded-md border border-accent/30 bg-accent/10 p-1.5 text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  {isRu ? item.titleRu : item.titleEn}
                </p>
                <p className="text-sm leading-relaxed text-muted">{isRu ? item.bodyRu : item.bodyEn}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
