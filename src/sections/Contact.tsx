import { type FormEvent, useState } from "react";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../i18n";
import { TELEGRAM_URL, WHATSAPP_URL } from "../lib/marketingLinks";

const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL?.trim();
const PRIMARY_EMAIL = "ch.oralbayev@solispartners.kz";
const GENERAL_EMAIL = "info@solispartners.kz";
const EMAIL_RECIPIENTS = `${PRIMARY_EMAIL},${GENERAL_EMAIL}`;

function buildMailtoBody(data: Record<string, string>) {
  const lines = [
    `Имя: ${data.name}`,
    `Email: ${data.email}`,
    `Телефон / WhatsApp: ${data.phone}`,
    `Страна регистрации: ${data.country || "—"}`,
    "",
    "Комментарий:",
    data.message || "—",
  ];
  return encodeURIComponent(lines.join("\n"));
}

export function Contact() {
  const { language } = useLanguage();
  const isRu = language === "ru";
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mailtoNotice, setMailtoNotice] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setMailtoNotice(false);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const country = String(fd.get("country") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (formspreeUrl) {
      fd.append("_subject", isRu ? "Заявка: AIFC landing" : "Request: AIFC landing");
      fd.append("_replyto", email);
      try {
        const res = await fetch(formspreeUrl, {
          method: "POST",
          body: fd,
          headers: { Accept: "application/json" },
        });
        const json = (await res.json().catch(() => null)) as { error?: string } | null;
        if (res.ok) {
          setSubmitted(true);
          form.reset();
          return;
        }
        setError(json?.error ?? (isRu ? "Не удалось отправить форму. Попробуйте позже или напишите на обе почты." : "Could not submit form. Please try again later or write to both emails."));
      } catch {
        setError(
          isRu
            ? `Ошибка сети. Напишите на ${PRIMARY_EMAIL} и ${GENERAL_EMAIL}`
            : `Network error. Write to ${PRIMARY_EMAIL} and ${GENERAL_EMAIL}`
        );
      }
      return;
    }

    setMailtoNotice(true);
    const subject = encodeURIComponent(isRu ? "Заявка: регистрация в МФЦА (AIFC)" : "Request: AIFC company registration");
    const body = buildMailtoBody({ name, email, phone, country, message });
    window.location.href = `mailto:${EMAIL_RECIPIENTS}?subject=${subject}&body=${body}`;
  }

  const mapQuery = encodeURIComponent("ул. А. Токпанова, 33, Астана офис 402/4 SOLIS Partners");
  const mapEmbedSrc = `https://maps.google.com/maps?q=${mapQuery}&z=16&ie=UTF8&iwloc=&output=embed`;
  const mapLinkHref = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <section id="contact" className="border-t border-border/50 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-playfair text-4xl font-bold text-text">{isRu ? "Получить консультацию" : "Get a consultation"}</h2>
          <p className="mt-4 text-muted">{isRu ? "Партнёр лично проведёт предварительный анализ — бесплатно." : "A partner will personally conduct a preliminary review free of charge."}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium w-full text-center sm:w-auto"
            >
              {isRu ? "Написать в WhatsApp" : "Write on WhatsApp"}
            </a>
            <a
              href={`mailto:${EMAIL_RECIPIENTS}?subject=${encodeURIComponent(isRu ? "Запрос по регистрации в МФЦА" : "AIFC registration request")}`}
              className="btn-glass w-full text-center sm:w-auto"
            >
              {isRu ? "Написать на почту" : "Write by email"}
            </a>
          </div>

          {submitted ? (
            <p className="mt-10 rounded-lg border border-accent/40 bg-accent/10 p-6 text-center text-text">
              {isRu ? "Заявка отправлена! Мы свяжемся с вами в течение 2 часов." : "Request submitted. We will contact you within 2 hours."}
            </p>
          ) : (
            <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">{isRu ? "Ваше имя *" : "Your name *"}</span>
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="w-full rounded-lg border border-border bg-surface p-4 text-white outline-none transition-colors focus:border-accent"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">Email *</span>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="w-full rounded-lg border border-border bg-surface p-4 text-white outline-none transition-colors focus:border-accent"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">{isRu ? "Телефон / WhatsApp *" : "Phone / WhatsApp *"}</span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full rounded-lg border border-border bg-surface p-4 text-white outline-none transition-colors focus:border-accent"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">{isRu ? "Страна регистрации" : "Country of registration"}</span>
                  <input
                    name="country"
                    type="text"
                    autoComplete="country-name"
                    className="w-full rounded-lg border border-border bg-surface p-4 text-white outline-none transition-colors focus:border-accent"
                  />
                </label>
              </div>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm text-muted">{isRu ? "Комментарий — расскажите о вашем проекте" : "Comment — tell us about your project"}</span>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-lg border border-border bg-surface p-4 text-white outline-none transition-colors focus:border-accent"
                />
              </label>

              {error ? <p className="text-sm text-red-400">{error}</p> : null}
              {mailtoNotice ? (
                <p className="text-sm text-muted">
                  {isRu
                    ? `Откроется почтовый клиент с черновиком письма для ${PRIMARY_EMAIL} и ${GENERAL_EMAIL}.`
                    : `Your email client will open a draft to ${PRIMARY_EMAIL} and ${GENERAL_EMAIL}.`}
                </p>
              ) : null}

              <button
                type="submit"
                className="btn-premium w-full"
              >
                {isRu ? "Отправить заявку" : "Submit request"} →
              </button>
              <p className="text-center text-xs leading-relaxed text-muted">
                {isRu
                  ? "Отправляя форму, вы соглашаетесь с обработкой данных для обратной связи. Это не юридическая консультация и не создаёт договорных отношений до отдельного соглашения."
                  : "By submitting this form, you consent to data processing for communication purposes. This is not legal advice and does not create contractual relations until a separate agreement is signed."}
              </p>
                <p className="text-center text-xs text-muted">
                  {isRu
                    ? `Копия заявки направляется на две почты: ${PRIMARY_EMAIL} и ${GENERAL_EMAIL}.`
                    : `Lead processing uses two email inboxes: ${PRIMARY_EMAIL} and ${GENERAL_EMAIL}.`}
                </p>
            </form>
          )}

          <div className="mt-10 border-t border-border/40 pt-8 text-center text-sm text-muted">
            <p>{isRu ? "Отвечаем в течение одного рабочего дня. Или напишите напрямую:" : "We reply within one business day. Or contact us directly:"}</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-2 hover:underline"
              >
                WhatsApp
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-2 hover:underline"
              >
                Telegram
              </a>
              <a href={`mailto:${PRIMARY_EMAIL}`} className="text-accent underline-offset-2 hover:underline">
                {isRu ? "Почта партнёра" : "Partner email"}
              </a>
              <a href={`mailto:${GENERAL_EMAIL}`} className="text-accent underline-offset-2 hover:underline">
                {isRu ? "Общая почта" : "General email"}
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h3 className="mb-4 font-playfair text-xl font-semibold text-text">{isRu ? "Офис в Астане" : "Office in Astana"}</h3>
          <p className="mb-4 text-sm text-muted">
            {isRu ? "ул. А. Токпанова, 33, оф. 402/4 — " : "33 A. Tokpanova st., office 402/4 — "}
            <a
              href={mapLinkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-2 hover:underline"
            >
              {isRu ? "открыть в Google Картах" : "open in Google Maps"}
            </a>
          </p>
          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              title="Карта: SOLIS Partners, Астана"
              src={mapEmbedSrc}
              className="h-56 w-full border-0 sm:h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
