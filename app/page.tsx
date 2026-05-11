import FeatureCarousel from '@/components/carousels/FeatureCarousel'
import HeroScreenshotCarousel from '@/components/carousels/HeroScreenshotCarousel'
import { featureCarouselContent, heroScreenshotSlides } from '@/content/carousels'
import HeroFeatureBadges from './HeroFeatureBadges'

const heroFeatures = [
  {
    id: 'local',
    label: 'Wszystko lokalnie',
    tooltip: 'Nie przechowujemy żadnych twoich danych w chmurze, wszystko dzieje się na twoim urządzeniu!',
  },
  {
    id: 'services',
    label: 'Najpopularniejsze serwisy',
    tooltip:
      'W darmowej wersji aplikacji staraliśmy się zawrzeć wszystkie najpopularniejsze serwisy używane w Polsce, jeżeli chcesz dodać coś czego brakuje to wypróbuj wersję premium ;)',
  },
  {
    id: 'budget',
    label: 'Panowanie nad budżetem',
    tooltip:
      'Płacąc za każdą subskrypcję oddzielnie często nie dostrzegamy jak bardzo obciąża to nas budżet. Wprowadź wszystkie swoje opłaty w aplikacji i uświadom sobie jak dużo pieniędzy ucieka Ci przez palce.',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-neutral)] text-[var(--color-text)]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--color-neutral)]/90 backdrop-blur">
        <div className="mx-auto flex min-h-16 w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
          <p className="brand-outline text-2xl text-[var(--color-primary)] sm:text-3xl">DusiKoszt</p>

          <button
            className="rounded-full bg-[var(--color-primary)] px-5 py-2 text-sm font-semibold text-[var(--color-neutral)] transition-transform hover:-translate-y-0.5"
            type="button"
          >
            pobierz
          </button>
        </div>
      </header>

      <section
        className="mx-auto grid w-full max-w-6xl gap-8 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:pt-14"
        data-parallax="soft"
      >
        <div
          className="section-animate rounded-3xl border border-[var(--color-secondary)]/40 bg-[var(--color-surface)] p-6 sm:p-8"
          data-animate="slot"
          style={{ animationDelay: '100ms' }}
        >
          <p className="title-outfit mb-3 text-sm uppercase tracking-[0.18em] text-[var(--color-primary)]">DusiKoszt</p>
          <h1 className="title-outfit mb-4 text-3xl leading-tight sm:text-4xl">
            Kontroluj wydatki prosto, szybko i bez chaosu
          </h1>
          <p className="mb-6 text-[var(--color-text-muted)]">
            DusiKoszt pomaga ogarnąć codzienne koszty, planować budżet i lepiej rozumieć na co realnie wydajesz pieniądze.
          </p>
          <HeroFeatureBadges items={heroFeatures} />
        </div>

        <div className="section-animate mx-auto w-full max-w-sm" data-animate="slot">
          <div
            className="relative rounded-[2.6rem] border-2 border-[var(--color-secondary)] bg-black p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_26px_rgba(0,209,178,0.38)]"
            data-float="hero-device"
          >
            <div className="relative aspect-[9/19] overflow-hidden rounded-[2.1rem] border border-white/10 bg-[var(--color-surface)] p-3">
              <span className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/30" />
              <HeroScreenshotCarousel slides={heroScreenshotSlides} />
            </div>
            <span className="pointer-events-none absolute -right-[5px] top-24 h-12 w-1 rounded-full bg-white/25" />
            <span className="pointer-events-none absolute -left-[5px] top-20 h-8 w-1 rounded-full bg-white/25" />
            <span className="pointer-events-none absolute -left-[5px] top-32 h-10 w-1 rounded-full bg-white/25" />
          </div>
        </div>
      </section>
      <div data-animate="slot" data-parallax="soft">
        <FeatureCarousel cards={featureCarouselContent.cards} subTitle={featureCarouselContent.subTitle} title={featureCarouselContent.title} />
      </div>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8" id="pobierz">
        <div
          className="section-animate rounded-3xl border border-[var(--color-secondary)]/40 bg-[var(--color-surface)] p-7 text-center sm:p-10"
          data-animate="slot"
          style={{ animationDelay: '360ms' }}
        >
          <h2 className="title-outfit mb-3 text-2xl sm:text-3xl">Pobierz DusiKoszt</h2>
          <p className="mx-auto mb-6 max-w-2xl text-[var(--color-text-muted)]">
            Okiełznaj swoje wydatki już dzisiaj!
          </p>
          <button
            className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-3 font-semibold text-[var(--color-neutral)] transition-transform hover:-translate-y-0.5"
            type="button"
          >
            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24">
              <path d="M3 2.5L13.2 12L3 21.5V2.5Z" fill="#4285F4" />
              <path d="M13.2 12L16.5 8.9L20.5 11.1C21.4 11.6 21.4 12.4 20.5 12.9L16.5 15.1L13.2 12Z" fill="#FBBC05" />
              <path d="M3 2.5L16.5 8.9L13.2 12L3 2.5Z" fill="#34A853" />
              <path d="M3 21.5L13.2 12L16.5 15.1L3 21.5Z" fill="#EA4335" />
            </svg>
            Pobierz
          </button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8" id="kontakt">
        <div
          className="section-animate rounded-3xl border border-white/10 bg-[var(--color-surface)] p-7 sm:p-10"
          data-animate="slot"
          style={{ animationDelay: '440ms' }}
        >
          <h2 className="mb-3 text-2xl font-semibold sm:text-3xl">Kontakt</h2>
          <p className="mb-5 text-[var(--color-text-muted)]">
            Masz pytania, pomysl na funkcje albo chcesz wspolpracowac? Wyslij wiadomosc przez formularz.
          </p>
          <form action="mailto:vill895@gmail.com" className="grid gap-4" encType="text/plain" method="post">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span className="text-[var(--color-text-muted)]">Imie</span>
                <input
                  className="rounded-xl border border-white/15 bg-[var(--color-neutral)] px-4 py-3 outline-none transition-colors placeholder:text-[var(--color-text-muted)]/70 focus:border-[var(--color-primary)]"
                  name="imie"
                  placeholder="Jan Kowalski"
                  required
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="text-[var(--color-text-muted)]">E-mail</span>
                <input
                  className="rounded-xl border border-white/15 bg-[var(--color-neutral)] px-4 py-3 outline-none transition-colors placeholder:text-[var(--color-text-muted)]/70 focus:border-[var(--color-primary)]"
                  name="email"
                  placeholder="jan.kowalski@mail.pl"
                  required
                  type="email"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm">
              <span className="text-[var(--color-text-muted)]">Wiadomość</span>
              <textarea
                className="min-h-36 rounded-xl border border-white/15 bg-[var(--color-neutral)] px-4 py-3 outline-none transition-colors placeholder:text-[var(--color-text-muted)]/70 focus:border-[var(--color-primary)]"
                name="wiadomosc"
                placeholder="Cześć, mam pytanie..."
                required
              />
            </label>
            <div className="flex flex-wrap items-center gap-3">
              <button
                className="rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-[var(--color-neutral)] transition-transform hover:-translate-y-0.5"
                type="submit"
              >
                Wyslij wiadomosc
              </button>
              <p className="text-xs text-[var(--color-text-muted)]">Po kliknieciu otworzy sie Twoj domyslny klient pocztowy.</p>
            </div>
          </form>
        </div>
      </section>

      <footer className="section-animate border-t border-white/10 py-8" style={{ animationDelay: '520ms' }}>
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-4 text-sm text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <a
              className="transition-colors hover:text-[var(--color-primary)]"
              href="https://github.com/vill8/dusikoszt_privacy_policy/blob/main/privacy_policy.md"
              rel="noopener noreferrer"
              target="_blank"
            >
              Polityka prywatnosci
            </a>
            <a className="transition-colors hover:text-[var(--color-primary)]" href="#kontakt">
              Kontakt
            </a>
          </div>
          <p>Autor: DeV1llek 2026</p>
        </div>
      </footer>
    </main>
  )
}