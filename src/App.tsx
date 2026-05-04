import { AmbientBackground } from "./components/AmbientBackground";
import { Cases } from "./sections/Cases";
import { Contact } from "./sections/Contact";
import { CtaBand } from "./sections/CtaBand";
import { FAQ } from "./sections/FAQ";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Partners } from "./sections/Partners";
import { Pricing } from "./sections/Pricing";
import { Problem } from "./sections/Problem";
import { Process } from "./sections/Process";
import { RegulatoryChecklist } from "./sections/RegulatoryChecklist";
import { Solution } from "./sections/Solution";
import { Testimonials } from "./sections/Testimonials";
import { WhyUs } from "./sections/WhyUs";
import { useLanguage } from "./i18n";
import { useEffect } from "react";
import { initYandexMetrika } from "./lib/analytics";

export default function App() {
  const { language } = useLanguage();
  const isRu = language === "ru";
  const ymId = import.meta.env.VITE_YANDEX_METRIKA_ID;

  useEffect(() => {
    initYandexMetrika(ymId);
  }, [ymId]);

  useEffect(() => {
    document.title = isRu
      ? "SOLIS Partners — Регистрация компании в МФЦА (AIFC)"
      : "SOLIS Partners — AIFC Company Registration";
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        "content",
        isRu
          ? "Юридическое сопровождение регистрации компании в МФЦА, лицензирования AFSA и корпоративного структурирования."
          : "Legal support for AIFC company registration, AFSA licensing, and corporate structuring."
      );
    }
  }, [isRu]);

  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="relative z-[1]">
        <Hero />
        <Problem />
        <Solution />
        <RegulatoryChecklist />
        <WhyUs />
        <Partners />
        <Testimonials />
        <Cases />
        <CtaBand
          title={
            isRu
              ? "Готовы обсудить регистрацию или лицензию в МФЦА?"
              : "Ready to discuss registration or licensing in AIFC?"
          }
          subtitle={
            isRu
              ? "30 минут с партнёром — бесплатно, без обязательств. Подскажем структуру и ориентир по срокам."
              : "30-minute partner call, free and without obligations. We will suggest the legal structure and timeline."
          }
          buttonLabel={isRu ? "Получить бесплатную консультацию" : "Get free consultation"}
        />
        <Process />
        <Pricing />
        <CtaBand
          title={isRu ? "Нужен расчёт под вашу структуру?" : "Need a budget estimate for your structure?"}
          subtitle={
            isRu
              ? "Опишите проект — пришлём фиксированную смету в течение одного рабочего дня. Без почасовых сюрпризов."
              : "Describe your project and get a fixed estimate within one business day. No hourly surprises."
          }
          buttonLabel={isRu ? "Получить расчёт" : "Get estimate"}
        />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
