import { Reveal } from "../components/Reveal";
import { scrollToSection } from "../lib/scrollTo";

type CtaBandProps = {
  title: string;
  subtitle?: string;
  buttonLabel?: string;
};

export function CtaBand({
  title,
  subtitle,
  buttonLabel = "Оставить заявку",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden border-y border-accent/20 bg-gradient-to-r from-accent/[0.08] via-surface/40 to-gold/[0.06] py-12 sm:py-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(rgba(100, 168, 185, 0.12) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div className="max-w-2xl">
              <p className="font-playfair text-2xl font-semibold leading-snug text-text md:text-3xl">
                {title}
              </p>
              {subtitle ? (
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{subtitle}</p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="btn-premium shrink-0"
            >
              {buttonLabel} →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
