import InfoSection from '@/components/InfoSection';
import { EXTERNAL_LINKS } from '@/data/siteData';

export const metadata = {
  title: 'Percussion',
  description: 'Learn about the SCHS percussion program.',
};

export default function PercussionPage() {
  return (
    <InfoSection
      title="Percussion"
      intro="The drumline and front ensemble drive rhythm, energy, and intensity across the music department."
      actions={[
        { label: 'Percussion Interest Form', href: EXTERNAL_LINKS.percussionInfoForm, external: true },
        { label: 'Open The Vault', href: '/band/the-vault', variant: 'outline' },
      ]}
    >
      <div className="rounded-sm border border-white/10 bg-[#161616] p-6 text-gray-300 leading-relaxed">
        The Strawberry Crest percussion program includes battery and front ensemble performers who train for field shows, concerts, and special events. Students build technique, musicianship, and teamwork while supporting the full sound of the Marching Chargers.
      </div>
    </InfoSection>
  );
}
