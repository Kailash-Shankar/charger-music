import InfoSection from '@/components/InfoSection';
import { ORCHESTRA_LEADERSHIP, HOME_GALLERY } from '@/data/siteData';

export const metadata = {
  title: 'Orchestra Leadership',
  description: 'Student leadership for the SCHS Orchestra program.',
};

export function OrchestraLeadershipPage() {
  return (
    <InfoSection title="Orchestra Leadership" intro={`Meet the orchestra leaders for ${ORCHESTRA_LEADERSHIP.year}.`}>
      <div className="rounded-sm border border-white/10 bg-[#161616] p-6">
        <div className="grid gap-4 md:grid-cols-2">
          {ORCHESTRA_LEADERSHIP.positions.map((position) => (
            <div key={position.role} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
              <p className="font-semibold text-white">{position.role}</p>
              <p className="text-gray-300">{position.members.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </InfoSection>
  );
}

export default OrchestraLeadershipPage;
