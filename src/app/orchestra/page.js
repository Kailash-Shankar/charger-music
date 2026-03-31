import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { EXTERNAL_LINKS } from '@/data/siteData';

export const metadata = {
  title: 'Orchestra',
  description: 'Learn about the SCHS Orchestra program.',
};

export default function OrchestraPage() {
  return (
    <>
      <PageHero
        title="SCHS Orchestra"
        subtitle="A tradition of musical excellence in strings, woodwinds, brass, and more."
      />

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <img
            src="https://static.wixstatic.com/media/407ce4_c83b34e487ee4bb8a49eea15f71f391b~mv2.jpg/v1/fill/w_600,h_338,al_c,lg_1,q_80,enc_avif,quality_auto/407ce4_c83b34e487ee4bb8a49eea15f71f391b~mv2.jpg"
            alt="SCHS Orchestra"
            className="w-full rounded-sm shadow-lg mb-8"
          />

          <h2 className="section-heading">About the Program</h2>
          <span className="gold-divider" />

          <p className="text-gray-300 leading-relaxed mb-4">
            The Strawberry Crest orchestra program consists of several different ensembles, such as the <strong>concert orchestra</strong>, <strong>symphonic orchestra</strong>, <strong>chamber orchestra</strong>, and <strong>full orchestra</strong>.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            These ensembles perform at school concerts and events, district and state-level music conferences, as well as festive events and special occasions.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            The concert and symphonic orchestras are open to all students. The chamber orchestra is audition-based, and the full orchestra is upon discretion of the orchestra director.
          </p>

          <a
            href={EXTERNAL_LINKS.tickets}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Purchase Upcoming Concert Tickets
          </a>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-charger-navy text-white p-8 rounded-sm">
            <h3 className="text-xl font-display font-bold mb-4 text-charger-gold">Ensembles</h3>
            <ul className="space-y-3">
              {[
                { name: 'Concert Orchestra', note: 'Open to all students' },
                { name: 'Symphonic Orchestra', note: 'Open to all students' },
                { name: 'Chamber Orchestra', note: 'Audition-based' },
                { name: 'Full Orchestra', note: 'Director discretion' },
              ].map((e) => (
                <li key={e.name} className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  <span className="font-medium">{e.name}</span>
                  <span className="text-xs text-charger-gold bg-charger-gold/10 px-2 py-1 rounded">{e.note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-black rounded-sm border border-white/10 p-6 space-y-3">
            <h3 className="font-bold text-white uppercase tracking-wide text-sm border-b border-charger-gold pb-2 mb-4">
              Orchestra Links
            </h3>
            <Link href="/orchestra/leadership" className="flex items-center gap-2 text-sm text-gray-300 hover:text-charger-gold transition-colors">
              🎻 Meet the Leadership
            </Link>
            <Link href="/orchestra/photo-gallery" className="flex items-center gap-2 text-sm text-gray-300 hover:text-charger-gold transition-colors">
              📷 Photo Gallery
            </Link>
            <a href={EXTERNAL_LINKS.tickets} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-charger-gold transition-colors">
              🎟 Buy Concert Tickets
            </a>
            <a href={EXTERNAL_LINKS.cuttime} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-charger-gold transition-colors">
              📅 View Calendar
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
