'use client';
import { useState } from 'react';
import { Play, ExternalLink, ChevronRight } from 'lucide-react';
import { MARCHING_SHOWS, VAULT_HIGHLIGHTS } from '@/data/siteData';

const YEARS = [...new Set(MARCHING_SHOWS.map(s => s.year))].sort((a, b) => a - b);

const STATS = [
  { value: '2009', label: 'Year Founded' },
  { value: '33', label: 'Founding Members' },
  { value: '126', label: 'Members at Peak' },
  { value: '16+', label: 'Seasons Performed' },
];

export default function VaultPage() {
  const [hoveredShow, setHoveredShow] = useState(null);
  const [filterYear, setFilterYear] = useState(null);

  const filteredShows = filterYear
    ? MARCHING_SHOWS.filter(s => s.year === filterYear)
    : MARCHING_SHOWS;

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative bg-charger-navy overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-charger-gold" />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'none',
            backgroundSize: '12px 12px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-charger-gold mb-6">
            <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
              <rect x="6" y="10" width="28" height="22" rx="2" stroke="#c8992a" strokeWidth="2"/>
              <circle cx="20" cy="21" r="5" stroke="#c8992a" strokeWidth="2"/>
              <circle cx="20" cy="21" r="2" fill="#c8992a"/>
              <line x1="20" y1="10" x2="20" y2="6" stroke="#c8992a" strokeWidth="2" strokeLinecap="round"/>
              <line x1="6" y1="21" x2="2" y2="21" stroke="#c8992a" strokeWidth="2" strokeLinecap="round"/>
              <line x1="38" y1="21" x2="34" y2="21" stroke="#c8992a" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-charger-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Strawberry Crest High School
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            The <span className="text-charger-gold">Vault</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A living archive of every halftime show, every season, and every unforgettable moment in Marching Charger history.
          </p>
        </div>

        {/* stats bar */}
        <div className="relative border-t border-white/10 bg-black/30">
          <div className="max-w-4xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="text-3xl font-display font-bold text-charger-gold">{s.value}</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-display font-bold text-charger-navy mb-4">SCHS Band History</h2>
        <div className="w-16 h-1 bg-charger-gold mx-auto mb-8" />
        <p className="text-gray-600 text-lg leading-relaxed">
          The Strawberry Crest Marching Chargers have a rich, incredible history of performing
          crowd-dazzling halftime shows and showcasing a tremendous degree of musical talent and
          prowess. Founded in <strong className="text-charger-navy">2009</strong>, the inaugural
          year&apos;s band was composed of only <strong className="text-charger-navy">33 students</strong> —
          30 freshmen, 2 sophomores, 1 junior, and no seniors. Even with such limitations, the
          Marching Chargers delivered a successful performance, and the band rapidly grew in both
          size and musical ability. At its largest, the SCHS band had{' '}
          <strong className="text-charger-navy">126 members!</strong> Over the years, the Marching
          Chargers have forged a monumental legacy of musical excellence and impressive performance
          on the field, and strive to uphold that legacy today.
        </p>
      </section>

      {/* MARCHING SHOWS */}
      <section className="bg-charger-navy py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-4xl font-display font-bold text-white">Marching Shows</h2>
            <div className="w-16 h-1 bg-charger-gold mx-auto mt-4 mb-4" />
            <p className="text-gray-400 text-sm">
              Throughout the years, the Marching Chargers have performed a variety of different shows, each with their own unique flair. Click on a show to watch the performance!
            </p>
          </div>

          {/* year filter pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 mt-8">
            <button
              onClick={() => setFilterYear(null)}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wide rounded-sm border transition-colors ${
                filterYear === null
                  ? 'bg-charger-gold text-charger-navy border-charger-gold'
                  : 'border-white/20 text-gray-400 hover:border-charger-gold hover:text-charger-gold'
              }`}
            >
              All Years
            </button>
            {YEARS.map(y => (
              <button
                key={y}
                onClick={() => setFilterYear(filterYear === y ? null : y)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wide rounded-sm border transition-colors ${
                  filterYear === y
                    ? 'bg-charger-gold text-charger-navy border-charger-gold'
                    : 'border-white/20 text-gray-400 hover:border-charger-gold hover:text-charger-gold'
                }`}
              >
                {y}
              </button>
            ))}
          </div>

          {/* show cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredShows.map((show, i) => {
              const isHovered = hoveredShow === i;
              const card = (
                <div
                  className={`relative group cursor-pointer rounded-sm overflow-hidden transition-all duration-300 ${
                    show.youtubeUrl
                      ? 'border-2 border-transparent hover:border-charger-gold hover:-translate-y-1'
                      : 'border border-white/10 opacity-60'
                  }`}
                  onMouseEnter={() => setHoveredShow(i)}
                  onMouseLeave={() => setHoveredShow(null)}
                >
                  {/* image */}
                  <div className="relative h-40 bg-charger-dark">
                    {show.image ? (
                      <img
                        src={show.image}
                        alt={show.title}
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          isHovered && show.youtubeUrl ? 'scale-105 brightness-50' : 'brightness-75'
                        }`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-charger-gold/30 text-4xl font-display font-bold">{show.year}</span>
                      </div>
                    )}

                    {/* play overlay */}
                    {show.youtubeUrl && (
                      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <div className="w-14 h-14 rounded-full bg-charger-gold flex items-center justify-center shadow-lg">
                          <Play className="w-6 h-6 text-charger-navy fill-charger-navy ml-1" />
                        </div>
                      </div>
                    )}

                    {/* year badge */}
                    <div className="absolute top-2 left-2">
                      <span className="bg-charger-gold text-charger-navy text-xs font-black px-2 py-0.5 rounded-sm">
                        {show.year}
                      </span>
                    </div>

                    {!show.youtubeUrl && (
                      <div className="absolute top-2 right-2">
                        <span className="bg-black/60 text-gray-400 text-xs px-2 py-0.5 rounded-sm">
                          No video
                        </span>
                      </div>
                    )}
                  </div>

                  {/* title */}
                  <div className="bg-charger-dark px-3 py-3 border-t border-white/5">
                    <p className="text-white text-xs font-semibold leading-snug line-clamp-2 min-h-[2.5rem]">
                      {show.title}
                    </p>
                    {show.youtubeUrl && (
                      <p className="text-charger-gold text-xs mt-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Watch on YouTube <ExternalLink className="w-3 h-3" />
                      </p>
                    )}
                  </div>
                </div>
              );

              return show.youtubeUrl ? (
                <a key={i} href={show.youtubeUrl} target="_blank" rel="noopener noreferrer" className="block">
                  {card}
                </a>
              ) : (
                <div key={i}>{card}</div>
              );
            })}
          </div>

          <p className="text-center text-gray-600 text-xs mt-8">
            Showing {filteredShows.length} of {MARCHING_SHOWS.length} shows
          </p>
        </div>
      </section>

      {/* TIMELINE STRIP */}
      <section className="bg-charger-dark py-8 px-6 overflow-x-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-0 min-w-max mx-auto justify-center">
            {YEARS.map((year, i) => {
              const showsThisYear = MARCHING_SHOWS.filter(s => s.year === year);
              return (
                <div key={year} className="flex items-center">
                  <button
                    onClick={() => setFilterYear(filterYear === year ? null : year)}
                    className={`flex flex-col items-center gap-1.5 px-3 py-2 transition-all group ${
                      filterYear === year ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                    }`}
                  >
                    <div className={`w-2.5 h-2.5 rounded-full border-2 transition-colors ${
                      filterYear === year
                        ? 'bg-charger-gold border-charger-gold'
                        : 'border-gray-600 group-hover:border-charger-gold'
                    }`} />
                    <span className={`text-xs font-bold transition-colors ${
                      filterYear === year ? 'text-charger-gold' : 'text-gray-500 group-hover:text-charger-gold'
                    }`}>{year}</span>
                    <span className="text-gray-700 text-xs leading-none">
                      {showsThisYear.length}×
                    </span>
                  </button>
                  {i < YEARS.length - 1 && <div className="w-4 h-px bg-gray-800" />}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-display font-bold text-charger-navy">Highlights Over the Years</h2>
            <div className="w-16 h-1 bg-charger-gold mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VAULT_HIGHLIGHTS.map((h, i) => (
              <div key={i} className="bg-white rounded-sm overflow-hidden border border-gray-100 group hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={h.image}
                    alt={`Highlight ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/45" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-charger-gold text-xs font-bold uppercase tracking-widest">
                      Highlight #{i + 1}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {h.caption}{' '}
                    {h.link && (
                      <a
                        href={h.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-charger-gold hover:underline font-semibold inline-flex items-center gap-1"
                      >
                        {h.linkText} <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charger-navy py-16 px-6 text-center border-t border-charger-gold/20">
        <h2 className="text-2xl font-display font-bold text-white mb-3">Want to be part of the legacy?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Join the Marching Chargers and write the next chapter in SCHS history.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://forms.gle/FvdZaaWbUZ9WhugQ8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-charger-gold text-charger-navy font-bold py-3 px-8 text-sm uppercase tracking-widest hover:bg-charger-gold-light transition-colors"
          >
            Join the Band <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="https://youtu.be/-hIlobbIsNM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-charger-gold text-charger-gold font-bold py-3 px-8 text-sm uppercase tracking-widest hover:bg-charger-gold hover:text-charger-navy transition-colors"
          >
            <Play className="w-4 h-4 fill-current" /> Watch 2024 Show
          </a>
        </div>
      </section>

    </div>
  );
}   
