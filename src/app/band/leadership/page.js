import InfoSection from '@/components/InfoSection';
import { BAND_LEADERSHIP } from '@/data/siteData';

export const metadata = {
  title: 'Band Leadership',
  description: 'Student leadership for the SCHS Marching Charger Band.',
};

export default function BandLeadershipPage() {
  return (
    <InfoSection title="Band Leadership" intro={`Meet the student leaders for ${BAND_LEADERSHIP.year}.`}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-sm border border-white/10 bg-[#161616] p-6">
          <h2 className="mb-4 text-2xl font-display font-bold text-white">Officers</h2>
          <div className="space-y-4">
            {BAND_LEADERSHIP.officers.map((officer) => (
              <div key={officer.role} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                <p className="font-semibold text-white">{officer.role}</p>
                <p className="text-gray-300">{officer.members.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-sm border border-white/10 bg-[#161616] p-6">
          <h2 className="mb-4 text-2xl font-display font-bold text-white">Section Leaders</h2>
          <div className="space-y-4">
            {BAND_LEADERSHIP.sectionLeaders.map((section) => (
              <div key={section.section} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                <p className="font-semibold text-white">{section.section}</p>
                <p className="text-gray-300">{section.leaders.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </InfoSection>
  );
}
