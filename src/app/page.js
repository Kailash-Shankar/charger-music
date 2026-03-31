import Link from 'next/link';
import Image from 'next/image';
import { EXTERNAL_LINKS, HOME_GALLERY } from '@/data/siteData';
import { Music2, Star, Users } from 'lucide-react';

export const metadata = {
  title: 'Home',
  description: 'Welcome to the Strawberry Crest High School Music Department — home of the Marching Chargers.',
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#b3131b] text-white">
        <div className="absolute top-0 left-0 h-2 w-full bg-black" />
        {/* Gold top accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-charger-gold" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 text-center">
          <p className="text-white uppercase tracking-widest text-sm font-semibold mb-4">
            Strawberry Crest High School · Dover, FL
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Music is <span className="text-charger-gold">ALIVE</span>
            <br />at Strawberry Crest!
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            An award-winning music program featuring the Marching Charger Band, Orchestra, Color Guard, Percussion, and more.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={EXTERNAL_LINKS.bandJoinForm} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Join the Band
            </a>
            <Link href="/band/the-vault" className="btn-outline">
              Watch Performances
            </Link>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="w-full h-12 text-white fill-current" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-black py-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 gap-6 text-center">
          {[
            { value: '2009', label: 'Founded' },
            { value: '126', label: 'Members at Peak' },
            { value: '15+', label: 'Seasons Performed' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-display font-bold text-charger-gold">{s.value}</div>
              <div className="text-sm text-gray-400 mt-1 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BAND SECTION ── */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-charger-gold uppercase tracking-widest text-xs font-semibold mb-3 flex items-center gap-2">
              <Music2 className="w-4 h-4" /> Featured Program
            </p>
            <h2 className="section-heading">SCHS Marching Charger Band</h2>
            <span className="gold-divider" />
            <p className="text-gray-300 leading-relaxed mb-4">
              The Strawberry Crest Marching Chargers perform all throughout the year, at football games, parades and festive events, pep rallies, and concerts.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Their halftime show theme this year is <strong className="text-white">Feelin&apos; The Funk</strong>, centered around funk music through the ages, from James Brown&apos;s <em>I Feel Good</em> to Bruno Mars&apos; <em>Uptown Funk</em>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              All students are welcome to join the Marching Charger band, regardless of prior band experience or musical background. Students are expected to attend Summer Band Camp during the last 2 weeks of summer break.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/band" className="btn-primary">Learn More</Link>
              <a href={EXTERNAL_LINKS.bandJoinForm} target="_blank" rel="noopener noreferrer" className="btn-outline">
                I Want to Join!
              </a>
            </div>
          </div>
          <div className="relative h-80 md:h-full min-h-[320px] rounded-sm overflow-hidden shadow-xl">
            <img
              src="https://static.wixstatic.com/media/407ce4_5f35c39d7fa54ac38710796e3a2492e7~mv2.jpg/v1/fill/w_496,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/407ce4_5f35c39d7fa54ac38710796e3a2492e7~mv2.jpg"
              alt="SCHS Marching Charger Band"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>
        </div>
      </section>

      {/* ── ORCHESTRA SECTION ── */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-80 rounded-sm overflow-hidden shadow-xl">
            <img
              src="https://static.wixstatic.com/media/407ce4_c857c103a15e446c86324e61c6cfc83f~mv2.jpg/v1/fill/w_496,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/407ce4_c857c103a15e446c86324e61c6cfc83f~mv2.jpg"
              alt="SCHS Orchestra"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-charger-gold uppercase tracking-widest text-xs font-semibold mb-3 flex items-center gap-2">
              <Music2 className="w-4 h-4" /> Featured Program
            </p>
            <h2 className="section-heading">SCHS Orchestra</h2>
            <span className="gold-divider" />
            <p className="text-gray-300 leading-relaxed mb-4">
              The Strawberry Crest orchestra program consists of several different ensembles: concert orchestra, symphonic orchestra, chamber orchestra, and full orchestra.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              These ensembles perform at school concerts and events, district and state-level music conferences, as well as festive events and special occasions.
              The concert and symphonic orchestras are open to all students, however the chamber orchestra is audition-based.
            </p>
            <Link href="/orchestra" className="btn-primary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* ── SUPPORT / CTA ── */}
      <section className="relative bg-black text-white py-20 px-6 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-2 bg-[#b3131b]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <Users className="w-10 h-10 text-charger-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Support Us!</h2>
          <span className="gold-divider mx-auto" />
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
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

      {/* ── PHOTO GALLERY ── */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Pictures</h2>
            <span className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {HOME_GALLERY.map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={src}
                  alt={`Band photo ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/multimedia" className="btn-outline">
              View All Photos
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="bg-charger-gold py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
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
                className="bg-charger-navy text-white text-center py-4 px-3 font-bold text-sm uppercase tracking-wide hover:bg-charger-navy-light transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="bg-charger-navy text-white text-center py-4 px-3 font-bold text-sm uppercase tracking-wide hover:bg-charger-navy-light transition-colors"
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

