import { useLanguage } from "../i18n";
import { TELEGRAM_URL, WHATSAPP_URL } from "../lib/marketingLinks";

const PRIMARY_EMAIL = "ch.oralbayev@solispartners.kz";
const GENERAL_EMAIL = "info@solispartners.kz";

export function Footer() {
  const { language } = useLanguage();
  const isRu = language === "ru";

  return (
    <footer className="border-t border-border/50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-2">
          <p className="font-playfair text-xl font-semibold tracking-tight text-text">
            SOLIS <span className="text-accent">|</span>{" "}
            <span className="text-sm font-normal uppercase tracking-[0.25em] text-muted">Partners</span>
          </p>
        </div>
        <div className="grid gap-8 text-sm text-muted sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <p>
              <a href={`mailto:${PRIMARY_EMAIL}`} className="text-text hover:text-accent">
                {PRIMARY_EMAIL}
              </a>
            </p>
            <p>
              <a href={`mailto:${GENERAL_EMAIL}`} className="text-text hover:text-accent">
                {GENERAL_EMAIL}
              </a>
            </p>
            <p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent">
                WhatsApp
              </a>
            </p>
            <p>
              <a href="tel:+77020385068" className="text-text hover:text-accent">
                +7 (702) 038-50-68
              </a>
            </p>
            <p>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-accent"
              >
                @SOLISlegal
              </a>
            </p>
          </div>
          <p className="max-w-xs leading-relaxed">
            {isRu ? "Астана, ул. А. Токпанова, 33, оф. 402/4" : "Astana, 33 A. Tokpanova st., office 402/4"}
          </p>
          <div className="space-y-2">
            <p>
              {isRu ? "Основной сайт:" : "Main website:"}{" "}
              <a
                href="https://www.solispartners.kz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                solispartners.kz
              </a>
            </p>
            <p>
              <a
                href="https://www.solispartners.kz/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
              >
                {isRu ? "О фирме SOLIS Partners" : "About SOLIS Partners"} →
              </a>
            </p>
            <p>
              <a
                href="https://www.solispartners.kz/team"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
              >
                {isRu ? "Вся команда на основном сайте" : "Full team on main site"} →
              </a>
            </p>
            <p className="text-xs leading-relaxed">
              {isRu ? "© 2026 SOLIS PARTNERS • ТОО • БИН 240840009308" : "© 2026 SOLIS PARTNERS • LLP • BIN 240840009308"}
            </p>
            <p className="flex flex-wrap gap-4 text-xs">
              <a
                href="https://www.solispartners.kz/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent"
              >
                {isRu ? "Конфиденциальность" : "Privacy"}
              </a>
              <a
                href="https://www.solispartners.kz/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent"
              >
                {isRu ? "Условия" : "Terms"}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
