import { scrollToSection } from "../lib/scrollTo";
import { useLanguage } from "../i18n";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const isRu = language === "ru";

  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-border/30 bg-[rgba(8,8,8,0.88)] shadow-[0_1px_0_0_rgba(100,168,185,0.12),inset_0_-1px_0_0_rgba(201,168,76,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-baseline gap-2 text-left transition-opacity hover:opacity-90"
        >
          <span className="font-playfair text-xl font-semibold tracking-tight text-text sm:text-2xl">
            SOLIS
          </span>
          <span className="text-accent">|</span>
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-muted sm:text-xs">
            Partners
          </span>
        </button>
        <nav className="flex flex-1 items-center justify-end gap-1 sm:gap-4" aria-label={isRu ? "Навигация по странице" : "Page navigation"}>
          <a
            href="https://www.solispartners.kz"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-xs font-medium text-muted transition-colors hover:text-accent lg:inline"
          >
            {isRu ? "Основной сайт" : "Main site"}
          </a>
          <button
            type="button"
            onClick={() => scrollToSection("team")}
            className="hidden text-xs font-medium text-muted transition-colors hover:text-accent sm:inline sm:text-sm"
          >
            {isRu ? "Команда" : "Team"}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("cases")}
            className="hidden text-xs font-medium text-muted transition-colors hover:text-accent sm:inline sm:text-sm"
          >
            {isRu ? "Кейсы" : "Cases"}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("pricing")}
            className="hidden text-xs font-medium text-muted transition-colors hover:text-accent md:inline sm:text-sm"
          >
            {isRu ? "Стоимость" : "Pricing"}
          </button>
          <div className="flex items-center rounded-md border border-border/70 bg-surface/70 p-0.5">
            <button
              type="button"
              onClick={() => setLanguage("ru")}
              className={`rounded px-1.5 py-1 text-[10px] sm:px-2 sm:text-xs ${isRu ? "bg-accent/20 text-accent" : "text-muted"}`}
              aria-label="Russian"
            >
              RU
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded px-1.5 py-1 text-[10px] sm:px-2 sm:text-xs ${!isRu ? "bg-accent/20 text-accent" : "text-muted"}`}
              aria-label="English"
            >
              EN
            </button>
          </div>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="btn-premium-sm"
          >
            <span className="sm:hidden">{isRu ? "Заявка" : "Apply"}</span>
            <span className="hidden sm:inline">{isRu ? "Обсудить проект" : "Discuss project"}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
