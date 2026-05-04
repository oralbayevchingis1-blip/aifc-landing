import { motion } from "motion/react";
import { Languages, Scale, ShieldCheck, UserRound } from "lucide-react";
import { useLanguage } from "../i18n";

const cards = [
  {
    icon: Scale,
    titleRu: "Практика МФЦА с 2019 года",
    titleEn: "AIFC practice since 2019",
    bodyRu: "Допущены к практике в AIFC Court. Сопровождаем проекты в МФЦА с 2019 года.",
    bodyEn: "Admitted to practice before AIFC Court. Advising on AIFC matters since 2019.",
  },
  {
    icon: Languages,
    titleRu: "Работаем в правовой модели МФЦА",
    titleEn: "Working within AIFC legal framework",
    bodyRu: "Подготовка документов и процедур в соответствии с требованиями юрисдикции.",
    bodyEn: "Documents and procedures are prepared according to the jurisdiction standards.",
  },
  {
    icon: ShieldCheck,
    titleRu: "Специализация: ИТ и цифровые активы",
    titleEn: "Focus: IT and digital assets",
    bodyRu: "Учитываем специфику ИТ-бизнеса, цифровых активов и финтех-проектов.",
    bodyEn: "We understand the specifics of IT businesses, digital assets, and fintech projects.",
  },
  {
    icon: UserRound,
    titleRu: "Один контакт — весь проект",
    titleEn: "One contact throughout the project",
    bodyRu: "Партнёр ведёт проект лично на всех ключевых этапах.",
    bodyEn: "A partner personally leads all key project stages.",
  },
];

export function WhyUs() {
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
          {isRu ? "Почему Solis Partners" : "Why Solis Partners"}
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.article
                key={c.titleRu}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="group rounded-lg border border-border/50 bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_12px_36px_-14px_rgba(100,168,185,0.14)]"
              >
                <div className="mb-4 inline-flex rounded-md border border-accent/30 bg-accent/10 p-2 text-accent transition-colors duration-300 group-hover:bg-accent/15">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text">{isRu ? c.titleRu : c.titleEn}</h3>
                <p className="text-sm leading-relaxed text-muted">{isRu ? c.bodyRu : c.bodyEn}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
