import Link from 'next/link';
import { EXTERNAL_LINKS, HOME_GALLERY } from '@/data/siteData';
import { Music2, Users } from 'lucide-react';

export const metadata = {
  title: 'Home',
  description: 'Welcome to the Strawberry Crest High School Music Department - home of the Marching Chargers.',
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#5f0910_0%,#8d1018_28%,#b3131b_58%,#d54e3a_100%)] text-white">
        <div className="absolute left-0 top-0 h-2 w-full bg-black/85" />
        <div className="absolute left-0 top-0 h-1 w-full bg-charger-gold" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_34%)]" />
        <div className="hero-note hero-note-giant giant-1">{"\u266C"}</div>
        <div className="hero-note hero-note-giant giant-2">{"\u266B"}</div>
        <div className="hero-note hero-note-giant giant-3">{"\u266F"}</div>
        <div className="hero-note note-1">{"\u266B"}</div>
        <div className="hero-note note-2">{"\u266A"}</div>
        <div className="hero-note note-3">{"\u266C"}</div>
        <div className="hero-note note-4">{"\u266B"}</div>
        <div className="hero-note note-5">{"\u266A"}</div>
        <div className="hero-note note-6">{"\u2669"}</div>
        <div className="hero-note note-7">{"\u266F"}</div>
        <div className="hero-note note-8">{"\u266C"}</div>
        <div className="hero-note note-9">{"\u266B"}</div>
        <div className="hero-note note-10">{"\u266A"}</div>
        <div className="hero-note note-11">{"\u266F"}</div>
        <div className="hero-note note-12">{"\u2669"}</div>
        <div className="hero-note note-13">{"\u266C"}</div>
        <div className="hero-note note-14">{"\u266B"}</div>
        <div className="hero-note note-15">{"\u266F"}</div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.18)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center md:py-36">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/92">
            Strawberry Crest High School &middot; Dover, FL
          </p>
          <h1 className="mb-6 text-5xl font-display font-bold leading-tight md:text-7xl">
            Music is <span className="text-charger-gold">ALIVE</span>
            <br />at Strawberry Crest!
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/88 md:text-xl">
            An award-winning music program featuring the Marching Charger Band, Orchestra, Color Guard, Percussion, and more.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={EXTERNAL_LINKS.bandJoinForm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-white/70 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#7f0c12] shadow-[0_16px_30px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f1f4f8]"
            >
              Join the Band
            </a>
            <Link
              href="/band/the-vault"
              className="inline-flex items-center justify-center rounded-sm border border-white/60 bg-black/20 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#7f0c12]"
            >
              Watch Performances
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="h-12 w-full fill-current text-white" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      <section className="section-dark py-10 shadow-sm">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6 px-6 text-center">
          {[
            { value: '2009', label: 'Founded' },
            { value: '126', label: 'Members at Peak' },
            { value: '15+', label: 'Seasons Performed' },
          ].map((s) => (
            <div key={s.label} className="panel-dark px-4 py-5">
              <div className="font-display text-3xl font-bold text-charger-gold md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm uppercase tracking-wide text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-dark px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-charger-gold">
              <Music2 className="h-4 w-4" /> Featured Program
            </p>
            <h2 className="section-heading text-white">SCHS Marching Charger Band</h2>
            <span className="gold-divider" />
            <p className="mb-4 leading-relaxed text-gray-300">
              The Strawberry Crest Marching Chargers perform all throughout the year, at football games, parades and festive events, pep rallies, and concerts.
            </p>
            <p className="mb-4 leading-relaxed text-gray-300">
              Their halftime show theme this year is <strong className="text-white">Feelin&apos; The Funk</strong>, centered around funk music through the ages, from James Brown&apos;s <em>I Feel Good</em> to Bruno Mars&apos; <em>Uptown Funk</em>.
            </p>
            <p className="mb-8 leading-relaxed text-gray-300">
              All students are welcome to join the Marching Charger band, regardless of prior band experience or musical background. Students are expected to attend Summer Band Camp during the last 2 weeks of summer break.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/band" className="btn-primary">
                Learn More
              </Link>
              <a href={EXTERNAL_LINKS.bandJoinForm} target="_blank" rel="noopener noreferrer" className="btn-outline">
                I Want to Join!
              </a>
            </div>
          </div>
          <div className="relative h-80 min-h-[320px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_22px_55px_rgba(0,0,0,0.28)] md:h-full">
            <img
              src="https://static.wixstatic.com/media/407ce4_5f35c39d7fa54ac38710796e3a2492e7~mv2.jpg/v1/fill/w_496,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/407ce4_5f35c39d7fa54ac38710796e3a2492e7~mv2.jpg"
              alt="SCHS Marching Charger Band"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>
        </div>
      </section>

      <section className="section-dark px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div className="relative order-2 h-80 overflow-hidden rounded-2xl border border-white/10 shadow-[0_22px_55px_rgba(0,0,0,0.28)] md:order-1">
            <img
              src="https://static.wixstatic.com/media/407ce4_c857c103a15e446c86324e61c6cfc83f~mv2.jpg/v1/fill/w_496,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/407ce4_c857c103a15e446c86324e61c6cfc83f~mv2.jpg"
              alt="SCHS Orchestra"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-charger-gold">
              <Music2 className="h-4 w-4" /> Featured Program
            </p>
            <h2 className="section-heading text-white">SCHS Orchestra</h2>
            <span className="gold-divider" />
            <p className="mb-4 leading-relaxed text-gray-300">
              The Strawberry Crest orchestra program consists of several different ensembles: concert orchestra, symphonic orchestra, chamber orchestra, and full orchestra.
            </p>
            <p className="mb-8 leading-relaxed text-gray-300">
              These ensembles perform at school concerts and events, district and state-level music conferences, as well as festive events and special occasions. The concert and symphonic orchestras are open to all students, however the chamber orchestra is audition-based.
            </p>
            <Link href="/orchestra" className="btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="section-dark px-6 py-20 text-white">
        <div className="absolute left-0 top-0 h-full w-2 bg-[#b3131b]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Users className="mx-auto mb-4 h-10 w-10 text-charger-gold" />
          <h2 className="mb-4 text-3xl font-display font-bold md:text-4xl">Support Us!</h2>
          <span className="gold-divider mx-auto" />
          <p className="mb-10 text-lg leading-relaxed text-gray-300">
            The Strawberry Crest Music Program could not be possible without the incredible continued support from the music boosters, sponsors, and friends and family. Support the program by purchasing SCHS music merch, donating, and coming out to concerts and performances.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={EXTERNAL_LINKS.merch} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Buy Merch
            </a>
            <a href={EXTERNAL_LINKS.donate} target="_blank" rel="noopener noreferrer" className="btn-white">
              Donate
            </a>
            <a href={EXTERNAL_LINKS.tickets} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Buy Tickets
            </a>
          </div>
        </div>
      </section>

      <section className="section-dark px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="section-heading text-white">Pictures</h2>
            <span className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {HOME_GALLERY.map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                <img
                  src={src}
                  alt={`Band photo ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/multimedia" className="btn-outline">
              View All Photos
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#edf1f6_0%,#d5dbe4_100%)] px-6 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: 'Calendar', href: EXTERNAL_LINKS.cuttime, external: true },
            { label: 'Concert Tickets', href: EXTERNAL_LINKS.tickets, external: true },
            { label: 'The Vault', href: '/band/the-vault', external: false },
            { label: 'Contact Us', href: '/contact', external: false },
          ].map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-black/10 bg-charger-navy px-3 py-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_14px_28px_rgba(17,17,17,0.12)] transition-colors hover:bg-charger-navy-light"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-2xl border border-black/10 bg-charger-navy px-3 py-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_14px_28px_rgba(17,17,17,0.12)] transition-colors hover:bg-charger-navy-light"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </section>
    </>
  );
}
