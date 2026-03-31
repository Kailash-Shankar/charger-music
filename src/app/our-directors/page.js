import InfoSection from '@/components/InfoSection';
import { DIRECTORS } from '@/data/siteData';

export const metadata = {
  title: 'Our Directors',
  description: 'Meet the directors and instructional team of the music department.',
};

export default function DirectorsPage() {
  return (
    <InfoSection title="Our Directors" intro="Meet the team behind the Strawberry Crest music program.">
      <div className="grid gap-6 md:grid-cols-2">
        {DIRECTORS.map((director) => (
          <article key={director.name} className={`rounded-sm border border-white/10 bg-[#161616] p-6 ${director.wide ? 'md:col-span-2' : ''}`}>
            <div className="mb-4 aspect-[4/3] overflow-hidden rounded-sm bg-black/40">
              <img src={director.image} alt={director.name} className="h-full w-full object-cover" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white">{director.name}</h2>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-charger-gold">{director.title}</p>
            <p className="whitespace-pre-line text-gray-300 leading-relaxed">{director.bio}</p>
          </article>
        ))}
      </div>
    </InfoSection>
  );
}
