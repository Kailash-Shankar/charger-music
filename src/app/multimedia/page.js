import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Multimedia',
  description: 'Photo galleries and video footage from SCHS Band performances.',
};

const GALLERIES = [
  {
    label: 'MPA 2024',
    description: 'Professional photos from Music Performance Assessment day 2024.',
    href: '/multimedia/mpa-2024',
    emoji: '\uD83C\uDFC6',
  },
  {
    label: 'Marching Season 2024',
    description: 'Booster photos from the full 2024 marching season - camp through concert.',
    href: '/multimedia/marching-season-2024',
    emoji: '\uD83C\uDFBA',
  },
  {
    label: 'Marching Season 2020',
    description: 'Photos from the 2020 marching season.',
    href: '/multimedia/marching-season-2020',
    emoji: '\uD83D\uDCF7',
  },
  {
    label: 'Marching Season 2019',
    description: 'Photos from the 2019 marching season.',
    href: '/multimedia/marching-season-2019',
    emoji: '\uD83D\uDCF7',
  },
];

export default function MultimediaPage() {
  return (
    <>
      <PageHero
        title="Multimedia"
        subtitle="Photo galleries and video footage from across the years."
      />

      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="section-heading text-white">Photo Galleries</h2>
            <span className="gold-divider" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {GALLERIES.map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="group rounded-sm border border-white/10 bg-[#161616] p-6 text-center transition-colors hover:border-charger-gold"
                >
                  <div className="mb-3 text-4xl">{g.emoji}</div>
                  <h3 className="mb-2 text-lg font-display font-bold text-white transition-colors group-hover:text-charger-gold">
                    {g.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">{g.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="section-heading text-white">Video Performances</h2>
            <span className="gold-divider" />
            <div className="mt-8 rounded-sm border border-white/10 bg-[#161616] p-10 text-center text-white">
              <div className="mb-4 text-5xl">{"\u25B6\uFE0F"}</div>
              <h3 className="mb-3 text-xl font-display font-bold">Watch Marching Charger Performances</h3>
              <p className="mb-6 text-gray-300">
                Visit <strong>The Vault</strong> to watch over 15 years of SCHS halftime show recordings on YouTube - every show from 2009 through 2024.
              </p>
              <Link href="/band/the-vault" className="btn-primary">
                Open The Vault
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
