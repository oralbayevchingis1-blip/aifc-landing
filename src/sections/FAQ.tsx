import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../i18n";

const faqs = [
  {
    qRu: "Как долго длится регистрация в МФЦА?",
    qEn: "How long does AIFC registration take?",
    aRu: "Срок зависит от типа юрлица и необходимости лицензии AFSA. Регистрация без лицензии, как правило, проходит быстрее. Если лицензия нужна, срок зависит от вида деятельности и может составлять несколько месяцев.",
    aEn: "Timing depends on legal form and whether an AFSA license is required. Registration without licensing is usually faster. If licensing is required, timing may extend to several months depending on activity type.",
  },
  {
    qRu: "Какие виды юридических лиц доступны в МФЦА?",
    qEn: "What legal forms are available in AIFC?",
    aRu: "Доступны: Private Company Limited by Shares, LLP, SPV, Public Company и Branch (филиал иностранной компании). Для регулируемой деятельности требуется лицензия AFSA. Подходящую форму определяем после анализа модели бизнеса.",
    aEn: "Available forms include: Private Company Limited by Shares, LLP, SPV, Public Company, and Branch of a foreign company. Regulated activities require an AFSA license. The suitable form is selected after reviewing your business model.",
  },
  {
    qRu: "Нужно ли физически присутствовать в Астане?",
    qEn: "Is physical presence in Astana required?",
    aRu: "Как правило, нет. Большинство этапов возможно пройти дистанционно. Нотариальные действия оформляются через апостиль в вашей стране. По банковскому счёту требования зависят от банка и профиля клиента.",
    aEn: "Usually no. Most stages can be completed remotely. Notarial formalities are handled through apostille in your country. Banking requirements depend on the bank and client profile.",
  },
  {
    qRu: "Сколько стоит регистрация?",
    qEn: "What is the registration cost?",
    aRu: "Государственная пошлина МФЦА — $500. Ежегодное продление обычно составляет $1 000-$2 000 в зависимости от вида юрлица. Стоимость юридического сопровождения рассчитывается после первичного анализа.",
    aEn: "AIFC government registration fee is $500. Annual renewal is usually $1,000-$2,000 depending on legal form. Legal support fees are calculated after the initial review.",
  },
  {
    qRu: "Что обычно входит в пакет для лицензирования AFSA?",
    qEn: "What is usually included in an AFSA licensing package?",
    aRu: "Как правило, пакет включает описание бизнес-модели, документы по структуре владения, AML/KYC-политики, внутренние процедуры контроля и ответы на запросы регулятора в рамках рассмотрения.",
    aEn: "The package usually includes business model documentation, ownership structure materials, AML/KYC policies, internal control procedures, and regulator query responses during review.",
  },
  {
    qRu: "Что важно после регистрации компании в МФЦА?",
    qEn: "What is important after company registration in AIFC?",
    aRu: "Важно поддерживать корпоративные реестры и обязательную отчётность, своевременно обновлять данные по структуре и бенефициарам, а также соблюдать требования комплаенса и банковских проверок.",
    aEn: "It is important to maintain statutory registers and required filings, keep ownership and beneficial owner information up to date, and follow compliance and bank due diligence requirements.",
  },
];

export function FAQ() {
  const { language } = useLanguage();
  const isRu = language === "ru";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-border/50 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-10 font-playfair text-3xl font-bold text-text md:text-4xl">{isRu ? "Частые вопросы" : "FAQ"}</h2>
          <ul className="space-y-3">
            {faqs.map((item, index) => {
              const open = openIndex === index;
              return (
                <li key={item.qRu} className="rounded-lg border border-border/50 bg-surface">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                  >
                    <span className="font-medium text-text">{isRu ? item.qRu : item.qEn}</span>
                    <span className="shrink-0 text-accent">{open ? "−" : "+"}</span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-border/40 px-5 pb-5 pt-4 text-sm leading-relaxed text-muted">
                        {isRu ? item.aRu : item.aEn}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
