import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { EXTERNAL_LINKS } from '@/data/siteData';

export const metadata = {
  title: 'Multimedia',
  description: 'Photo galleries and video footage from SCHS Band performances.',
};

const GALLERIES = [
  {
    label: 'MPA 2024',
    description: 'Professional photos from Music Performance Assessment day 2024.',
    href: '/multimedia/mpa-2024',
    emoji: '🏆',
  },
  {
    label: 'Marching Season 2024',
    description: 'Booster photos from the full 2024 marching season — camp through concert.',
    href: '/multimedia/marching-season-2024',
    emoji: '🎺',
  },
  {
    label: 'Marching Season 2020',
    description: 'Photos from the 2020 marching season.',
    href: '/multimedia/marching-season-2020',
    emoji: '📷',
  },
  {
    label: 'Marching Season 2019',
    description: 'Photos from the 2019 marching season.',
    href: '/multimedia/marching-season-2019',
    emoji: '📷',
  },
];

export default function MultimediaPage() {
  return (
    <>
      <PageHero
        title="Multimedia"
        subtitle="Photo galleries and video footage from across the years."
      />

      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Photo galleries */}
        <div className="mb-16">
          <h2 className="section-heading">Photo Galleries</h2>
          <span className="gold-divider" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {GALLERIES.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="card p-6 text-center group hover:border-charger-gold border-2 border-transparent transition-colors"
              >
                <div className="text-4xl mb-3">{g.emoji}</div>
                <h3 className="font-display font-bold text-charger-navy text-lg mb-2 group-hover:text-charger-gold transition-colors">
                  {g.label}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{g.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Video performances */}
        <div>
          <h2 className="section-heading">Video Performances</h2>
          <span className="gold-divider" />
          <div className="mt-8 bg-charger-navy text-white rounded-sm p-10 text-center">
            <div className="text-5xl mb-4">▶️</div>
            <h3 className="text-xl font-display font-bold mb-3">Watch Marching Charger Performances</h3>
            <p className="text-gray-300 mb-6">
              Visit <strong>The Vault</strong> to watch over 15 years of SCHS halftime show recordings on YouTube — every show from 2009 through 2024.
            </p>
            <Link href="/band/the-vault" className="btn-primary">
              Open The Vault
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
