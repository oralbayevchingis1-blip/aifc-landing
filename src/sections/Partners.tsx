import { Reveal } from "../components/Reveal";
import { partners } from "../data/partners";
import { useLanguage } from "../i18n";

function IconMail() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.657-.029-3.784-2.308-3.784-2.308 0-2.663 1.801-2.663 3.658v5.695H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.605 0 4.267 2.385 4.267 5.455v6.286zM5.337 7.433a2.07 2.07 0 1 1 0 4.14 2.07 2.07 0 0 1 0-4.14zM3.555 20.452h3.564V9H3.555v11.452z" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export function Partners() {
  const { language } = useLanguage();
  const isRu = language === "ru";

  return (
    <section id="team" className="relative overflow-hidden border-t border-border/50 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[min(100vw,720px)] w-[min(100vw,720px)] rounded-full bg-accent/[0.07] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[min(80vw,520px)] w-[min(80vw,520px)] rounded-full bg-gold/[0.06] blur-[90px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              {isRu ? "Партнёры фирмы" : "Firm partners"}
            </p>
            <h2 className="font-playfair text-3xl font-bold leading-tight text-text sm:text-4xl md:text-5xl">
              {isRu ? "Партнёры, которые ведут" : "Partners leading"}{" "}
              <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                {isRu ? "ваш проект" : "your matter"}
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {isRu
                ? "Проект ведут именно партнёры: практика в МФЦА, судебная и регуляторная работа, прямое взаимодействие с клиентом без передачи ключевых этапов младшим юристам."
                : "Projects are led directly by partners: AIFC practice, court and regulatory work, and direct client communication without delegation of key stages."}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {partners.map((p) => (
              <article
                key={p.id}
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-surface/40 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-500 hover:border-accent/35 hover:shadow-[0_8px_48px_-8px_rgba(100,168,185,0.12)]"
              >
                <div className="grid gap-0 md:grid-cols-12">
                  <a
                    href={p.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/photo relative block aspect-[4/5] overflow-hidden md:col-span-5"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      width={480}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover/photo:scale-[1.04] grayscale-[0.35] group-hover/photo:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent opacity-90 md:bg-gradient-to-r md:from-transparent md:via-bg/30 md:to-bg/90" />
                    <div className="absolute inset-x-0 bottom-0 p-5 md:hidden">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold">{isRu ? p.role : (p.roleEn ?? p.role)}</p>
                      <h3 className="mt-1 font-playfair text-2xl font-semibold text-text">{isRu ? p.name : (p.nameEn ?? p.name)}</h3>
                    </div>
                  </a>

                  <div className="flex flex-col justify-between p-6 sm:p-8 md:col-span-7">
                    <div>
                      <p className="mb-2 hidden text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold md:block">
                        {isRu ? p.role : (p.roleEn ?? p.role)}
                      </p>
                      <h3 className="mb-4 hidden font-playfair text-2xl font-semibold text-text md:block lg:text-3xl">
                        {isRu ? p.name : (p.nameEn ?? p.name)}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted md:text-[0.9375rem]">{isRu ? p.bioRu : p.bioEn}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {(isRu ? p.tags : (p.tagsEn ?? p.tags)).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-accent/25 bg-accent/5 px-3 py-1 text-xs font-medium text-accent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border/40 pt-6">
                      <a
                        href={p.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/cta inline-flex items-center gap-2 text-sm font-semibold text-text transition-colors hover:text-accent"
                      >
                        {isRu ? "Профиль на сайте" : "Profile on main site"}
                        <IconArrow />
                      </a>
                      <div className="ml-auto flex items-center gap-3">
                        <a
                          href={`mailto:${p.email}`}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 text-muted transition-colors hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                          aria-label={`Email ${p.name}`}
                        >
                          <IconMail />
                        </a>
                        <a
                          href={p.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 text-muted transition-colors hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                          aria-label={`LinkedIn ${p.name}`}
                        >
                          <IconLinkedIn />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
