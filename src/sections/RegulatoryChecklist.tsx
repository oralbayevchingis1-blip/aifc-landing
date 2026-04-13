import { motion } from "motion/react";
import { ClipboardCheck, FileStack, Landmark, ShieldCheck, UserCheck, WalletCards } from "lucide-react";
import { useLanguage } from "../i18n";

const licensePrep = [
  {
    icon: ClipboardCheck,
    titleRu: "Описание бизнес-модели",
    titleEn: "Business model description",
    bodyRu: "Структура деятельности, целевые рынки, сценарии операций и управленческие роли.",
    bodyEn: "Operating model, target markets, transaction scenarios, and governance roles.",
  },
  {
    icon: ShieldCheck,
    titleRu: "AML/KYC-политики",
    titleEn: "AML/KYC policies",
    bodyRu: "Порядок идентификации клиентов, контроль операций, внутренние процедуры по ПОД/ФТ.",
    bodyEn: "Client onboarding controls, transaction monitoring, and internal AML/CFT procedures.",
  },
  {
    icon: FileStack,
    titleRu: "Корпоративный пакет",
    titleEn: "Corporate documentation",
    bodyRu: "Уставные документы, структура владения, раскрытие UBO и матрица полномочий.",
    bodyEn: "Constitutional documents, ownership structure, UBO disclosure, and authority matrix.",
  },
  {
    icon: UserCheck,
    titleRu: "Взаимодействие с AFSA",
    titleEn: "AFSA interaction",
    bodyRu: "Ответы на запросы регулятора, пояснения по модели и сопровождение коммуникации.",
    bodyEn: "Regulator queries handling, model clarifications, and communication support.",
  },
];

const afterRegistration = [
  {
    icon: Landmark,
    titleRu: "Корпоративный контур",
    titleEn: "Corporate governance",
    bodyRu: "Ведение внутренних реестров, корпоративных решений и обязательной отчётности.",
    bodyEn: "Maintenance of statutory registers, corporate resolutions, and mandatory filings.",
  },
  {
    icon: WalletCards,
    titleRu: "Банковский и комплаенс-контур",
    titleEn: "Banking and compliance setup",
    bodyRu: "Подготовка к банковским проверкам, поддержание KYC-профиля и исполнение комплаенс-требований.",
    bodyEn: "Bank onboarding support, KYC profile maintenance, and ongoing compliance requirements.",
  },
];

export function RegulatoryChecklist() {
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
          className="mb-4 font-playfair text-3xl font-bold text-text md:text-4xl"
        >
          {isRu ? "Что важно для AFSA и после регистрации" : "What matters for AFSA and after registration"}
        </motion.h2>
        <p className="mb-10 max-w-3xl text-sm leading-relaxed text-muted">
          {isRu
            ? "Практический чек-лист без рекламных обещаний: какие документы и процессы обычно требуются для регулятора и для стабильной работы компании после регистрации."
            : "Practical checklist without promotional claims: what documentation and processes are usually required by the regulator and for stable post-registration operations."}
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-surface p-6">
            <h3 className="mb-5 text-lg font-semibold text-text">
              {isRu ? "Подготовка к лицензированию AFSA" : "Preparation for AFSA licensing"}
            </h3>
            <div className="space-y-4">
              {licensePrep.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.titleRu}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="rounded-lg border border-border/50 bg-bg/40 p-4"
                  >
                    <p className="mb-2 flex items-center gap-2 font-medium text-text">
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

          <div className="rounded-xl border border-border/60 bg-surface p-6">
            <h3 className="mb-5 text-lg font-semibold text-text">
              {isRu ? "После регистрации: обязательный минимум" : "After registration: baseline obligations"}
            </h3>
            <div className="space-y-4">
              {afterRegistration.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.titleRu}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    viewport={{ once: true }}
                    className="rounded-lg border border-border/50 bg-bg/40 p-4"
                  >
                    <p className="mb-2 flex items-center gap-2 font-medium text-text">
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
        </div>
      </div>
    </section>
  );
}
