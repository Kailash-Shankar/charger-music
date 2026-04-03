import InfoSection from '@/components/InfoSection';
import { DIRECTORS } from '@/data/siteData';

export const metadata = {
  title: 'Our Directors',
  description: 'Meet the directors and instructional team of the music department.',
};

export default function DirectorsPage() {
  const featuredDirectors = [
    DIRECTORS.find((director) => director.name === 'Timothy Trice'),
    DIRECTORS.find((director) => director.name === 'Damian Johnson'),
    DIRECTORS.find((director) => director.title === 'Percussion Instructors/Arrangers'),
    DIRECTORS.find((director) => director.name === 'Darla Wing'),
  ].filter(Boolean);

  const foundingDirector = DIRECTORS.find((director) => director.founding);

  return (
    <InfoSection title="Our Directors" intro="Meet the team behind the Strawberry Crest music program.">
      <div className="grid gap-6 md:grid-cols-2">
        {featuredDirectors.map((director) => (
          <article
            key={director.name}
            className={`rounded-sm border border-white/10 bg-[#161616] p-6 ${director.wide ? 'md:col-span-2 md:grid md:grid-cols-[minmax(260px,340px)_1fr] md:gap-6 md:items-start' : ''}`}
          >
            <div className={`mb-4 overflow-hidden rounded-sm bg-black/40 ${director.wide ? 'md:mb-0 md:h-full' : 'aspect-[4/3]'}`}>
              <img
                src={director.image}
                alt={director.name}
                className={`w-full object-cover ${director.wide ? 'h-full min-h-[260px] md:min-h-[320px]' : 'h-[280px] sm:h-[320px]'}`}
              />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-white sm:text-2xl">{director.name}</h2>
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-charger-gold sm:text-sm sm:tracking-[0.2em]">{director.title}</p>
              <p className="whitespace-pre-line text-gray-300 leading-relaxed">{director.bio}</p>
            </div>
          </article>
        ))}
      </div>

      {foundingDirector ? (
        <>
          <div className="mx-auto my-10 h-px max-w-6xl bg-white/10" />
          <article className="rounded-sm border border-white/10 bg-[#161616] p-6 md:grid md:grid-cols-[minmax(260px,340px)_1fr] md:gap-6 md:items-start">
            <div className="mb-4 overflow-hidden rounded-sm bg-black/40 md:mb-0 md:h-full">
              <img
                src={foundingDirector.image}
                alt={foundingDirector.name}
                className="h-full min-h-[280px] w-full object-cover md:min-h-[360px]"
              />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-white sm:text-2xl">{foundingDirector.name}</h2>
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-charger-gold sm:text-sm sm:tracking-[0.2em]">{foundingDirector.title}</p>
              <p className="whitespace-pre-line text-gray-300 leading-relaxed">{foundingDirector.bio}</p>
            </div>
          </article>
        </>
      ) : null}
    </InfoSection>
  );
}
