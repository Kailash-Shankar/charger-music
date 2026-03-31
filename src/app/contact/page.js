import InfoSection from '@/components/InfoSection';
import { CONTACT_INFO, EXTERNAL_LINKS } from '@/data/siteData';

export const metadata = {
  title: 'Contact',
  description: 'Contact the Strawberry Crest High School Music Department.',
};

export default function ContactPage() {
  return (
    <InfoSection
      title="Contact"
      intro="Reach the Strawberry Crest High School Music Department and directors."
      actions={[
        { label: 'Open School Website', href: EXTERNAL_LINKS.schoolWebsite, external: true },
        { label: 'View Map', href: EXTERNAL_LINKS.googleMaps, external: true, variant: 'outline' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-sm border border-white/10 bg-[#161616] p-6">
          <h2 className="mb-4 text-2xl font-display font-bold text-white">Main Contact</h2>
          <p className="mb-3 text-gray-300"><strong className="text-white">Address:</strong> {CONTACT_INFO.address}</p>
          <p className="mb-3 text-gray-300"><strong className="text-white">Phone:</strong> {CONTACT_INFO.phone}</p>
          <p className="text-gray-300"><strong className="text-white">Boosters Email:</strong> {CONTACT_INFO.boosterEmail}</p>
        </div>
        <div className="rounded-sm border border-white/10 bg-[#161616] p-6">
          <h2 className="mb-4 text-2xl font-display font-bold text-white">Directors</h2>
          <div className="space-y-4">
            {CONTACT_INFO.directors.map((director) => (
              <div key={director.email} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                <p className="text-lg font-semibold text-white">{director.name}</p>
                <p className="text-sm uppercase tracking-wide text-charger-gold">{director.title}</p>
                <a className="mt-2 inline-block text-gray-300 hover:text-white" href={`mailto:${director.email}`}>
                  {director.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </InfoSection>
  );
}
