import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { EXTERNAL_LINKS } from '@/data/siteData';

export const metadata = {
  title: 'Band',
  description: 'Learn about the SCHS Marching Charger Band program.',
};

export default function BandPage() {
  return (
    <>
      <PageHero
        title="SCHS Marching Charger Band"
        subtitle="Where musical excellence meets high-energy performance."
      />

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
        {/* Main content */}
        <div>
          <img
            src="https://static.wixstatic.com/media/407ce4_5e405ee51101466087b3af552674b19a~mv2.jpg/v1/fill/w_600,h_400,al_c,lg_1,q_80,enc_avif,quality_auto/407ce4_5e405ee51101466087b3af552674b19a~mv2.jpg"
            alt="SCHS Marching Charger Band"
            className="w-full rounded-sm shadow-lg mb-8"
          />

          <h2 className="section-heading">About the Program</h2>
          <span className="gold-divider" />

          <p className="text-gray-300 leading-relaxed mb-4">
            The Strawberry Crest Marching Chargers perform all throughout the year, at football games, parades and festive events, pep rallies, and concerts.{' '}
            <a
              href="https://youtu.be/-hIlobbIsNM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charger-gold hover:underline font-medium"
            >
              Watch last year&apos;s performance here.
            </a>
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            Their halftime show theme this year is <strong className="text-white">Feelin&apos; The Funk</strong>, centered around funk music through the ages, from James Brown&apos;s <em>I Feel Good</em> to Bruno Mars&apos; <em>Uptown Funk</em>.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            All students are welcome to join the Marching Charger band, regardless of prior band experience or musical background. Students are expected to attend Summer Band Camp, which takes place during the last 2 weeks of summer break.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={EXTERNAL_LINKS.bandJoinForm}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              I Want to Join!
            </a>
            <Link href="/band/leadership" className="btn-outline">
              Meet the Leadership
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* The Vault CTA */}
          <Link
            href="/band/the-vault"
            className="block bg-charger-navy text-white p-8 rounded-sm hover:bg-charger-navy-light transition-colors group text-center"
          >
            <div className="text-charger-gold text-4xl mb-2">🏛</div>
            <h3 className="text-xl font-display font-bold mb-2 group-hover:text-charger-gold transition-colors">
              The Vault
            </h3>
            <p className="text-gray-300 text-sm">
              Explore the full history of the Marching Chargers — 15+ years of performances.
            </p>
          </Link>

          {/* Quick links */}
          <div className="bg-black rounded-sm border border-white/10 p-6 space-y-3">
            <h3 className="font-bold text-white uppercase tracking-wide text-sm border-b border-charger-gold pb-2 mb-4">
              Quick Links
            </h3>
            <a
              href={EXTERNAL_LINKS.cuttime}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-charger-gold transition-colors"
            >
              📅 View Calendar (CutTime)
            </a>
            <a
              href={EXTERNAL_LINKS.tickets}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-charger-gold transition-colors"
            >
              🎟 Purchase Concert Tickets
            </a>
            <Link
              href="/multimedia"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-charger-gold transition-colors"
            >
              📷 Photo Galleries
            </Link>
            <a
              href={EXTERNAL_LINKS.donate}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-charger-gold transition-colors"
            >
              💛 View Fundraisers / Donate
            </a>
          </div>

          {/* Band photos */}
          <div className="grid grid-cols-2 gap-2">
            {[
              'https://static.wixstatic.com/media/d5f339_5c9d6a1041454a85b406115ec890a8bc~mv2.jpg/v1/fill/w_206,h_194,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5f339_5c9d6a1041454a85b406115ec890a8bc~mv2.jpg',
              'https://static.wixstatic.com/media/d5f339_dff8e46d4ecf49c98d3b0f8e6b394c93~mv2.jpg/v1/fill/w_415,h_154,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5f339_dff8e46d4ecf49c98d3b0f8e6b394c93~mv2.jpg',
              'https://static.wixstatic.com/media/d5f339_b91bda36e22b4464bcc430a51e594e4f~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_256,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5f339_b91bda36e22b4464bcc430a51e594e4f~mv2_d_4032_3024_s_4_2.jpg',
            ].map((src, i) => (
              <div key={i} className={`rounded-sm overflow-hidden ${i === 1 ? 'col-span-2' : ''}`}>
                <img src={src} alt={`Band photo ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
