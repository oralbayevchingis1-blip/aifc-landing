import { Reveal } from "../components/Reveal";
import { useLanguage } from "../i18n";

const stats = [
  { value: "2019", labelRu: "Начало практики в МФЦА", labelEn: "AIFC practice started" },
  { value: "6+", labelRu: "Лет практики в МФЦА", labelEn: "Years of AIFC practice" },
  { value: "23+", labelRu: "Лет совокупного опыта партнёров", labelEn: "Years of combined partner experience" },
];

const cases = [
  {
    titleRu: "Smart-контракты для найма IT-команды в МФЦА",
    titleEn: "Smart contracts for hiring IT team in AIFC",
    resultRu: "Work for Hire • AIFC",
    resultEn: "Work for Hire • AIFC",
  },
  {
    titleRu: "Вход стратегического инвестора в IT-стартап (M&A Deal)",
    titleEn: "Strategic investor entry into IT startup (M&A Deal)",
    resultRu: "$250K • SHA • AIFC Court",
    resultEn: "$250K • SHA • AIFC Court",
  },
  {
    titleRu: "Внедрение национальной AI-модели ($5 млн) по праву МФЦА",
    titleEn: "National AI model deployment ($5M) under AIFC law",
    resultRu: "$5M • LLM • AIFC",
    resultEn: "$5M • LLM • AIFC",
  },
  {
    titleRu: "Опционная программа (ESOP) для международного IT-холдинга",
    titleEn: "ESOP option programme for international IT holding",
    resultRu: "10% ESOP • Buy-Back • AIFC",
    resultEn: "10% ESOP • Buy-Back • AIFC",
  },
  {
    titleRu: "Регистрация IT-холдинга и прохождение комплаенса AFSA",
    titleEn: "IT holding registration and AFSA compliance",
    resultRu: "AFSA • UBO • KYC",
    resultEn: "AFSA • UBO • KYC",
  },
  {
    titleRu: "Система найма и Smart-контракты (AIFC Employment Regulations)",
    titleEn: "Hiring system and Smart contracts (AIFC Employment Regulations)",
    resultRu: "Work for Hire • AIFC Court",
    resultEn: "Work for Hire • AIFC Court",
  },
  {
    titleRu: "Регистрация HR-tech стартапа в МФЦА: инкорпорация под ключ",
    titleEn: "HR-tech startup registration in AIFC: end-to-end incorporation",
    resultRu: "МФЦА · 100 000 акций · 3 недели",
    resultEn: "AIFC · 100,000 shares · 3 weeks",
  },
];

const clients = ["NAIMI", "TAPHR", "TRUST.ME", "RELOG", "LAYHER", "DAUINVEST"];
const clientStrip = clients.join(" • ");

export function Cases() {
  const { language } = useLanguage();
  const isRu = language === "ru";

  return (
    <section id="cases" className="border-t border-border/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 grid gap-6 rounded-xl border border-border bg-surface/80 p-8 sm:grid-cols-3 sm:p-10">
            {stats.map((s, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <p className="font-playfair text-4xl text-accent md:text-5xl">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted">
                  {isRu ? s.labelRu : s.labelEn}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mb-10">
            <h2 className="font-playfair text-3xl font-bold text-text md:text-4xl">{isRu ? "Релевантный опыт" : "Selected matters"}</h2>
            <a href="https://www.solispartners.kz/cases" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
              {isRu ? "Все кейсы" : "All cases"} →
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((c) => (
              <article key={c.titleRu} className="rounded-xl border border-border bg-surface p-6 hover:border-accent/30 transition-colors">
                <p className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Case Study</p>
                <h3 className="mb-6 text-lg font-semibold text-text leading-snug">{isRu ? c.titleRu : c.titleEn}</h3>
                <div className="pt-4 border-t border-border/50 flex justify-between items-center text-sm text-muted">
                  <span>Result:</span>
                  <span className="text-text font-mono text-xs">{isRu ? c.resultRu : c.resultEn}</span>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 overflow-hidden border-y border-border/40 py-8">
          <div className="flex w-max animate-marquee opacity-40 transition-opacity duration-300 hover:opacity-80">
            <span className="shrink-0 px-12 text-sm font-semibold uppercase tracking-widest text-muted">
              {clientStrip}
            </span>
            <span className="shrink-0 px-12 text-sm font-semibold uppercase tracking-widest text-muted" aria-hidden>
              {clientStrip}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
